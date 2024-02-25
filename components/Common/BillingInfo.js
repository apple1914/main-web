"use client"
import React, { useEffect, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

import {saveBillingInfo} from "../../backend/requests"
import {
    GetCountries,
    GetState,
    GetCity,
    GetLanguages, //async functions
  } from "react-country-state-city";
import { useTranslation } from "next-i18next";

const BillingInfo = () => {
    const {t} = useTranslation("common")
    const [countries,setCountries] = useState([{}])
    const [states,setStates] = useState([{}])
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [address1,setAddress1] = useState("")
    const [city,setCity] = useState("")
    const [state,setState] = useState({})
    const [country,setCountry] = useState({})
    const [zip,setZip] = useState("")

  useEffect(()=> {
    GetCountries().then((result) => {
        setCountries(result);
      });
  },[])


  const submitHandler = (e) => {
    e.preventDefault()
    const billingAddress = {
        firstName,lastName,address1,city,state:state.name,zip:zip,country:country.iso2
    }
    saveBillingInfo(billingAddress)
    return;
  };

  return (
    <div className="bg-white shadow rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-10">
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="form.country">
          <Form.Label>
            {t("Country")}
          </Form.Label>
          <Form.Select value={country.id} onChange={(e)=> {
            //iso2 is countryCode, .id is for state narrowing, name is for rendering
            const myCountry = countries[e.target.value]
            setCountry(myCountry)
            // changeBillingInfo({fieldName:"country",value:myCountry})
            GetState(myCountry.id).then((result) => {
                setStates(result);
              });
            }}>
            <option>{t("Pick Country")}</option>
            {countries.map((oneCountry) => {
              return <option value={oneCountry.id}>{oneCountry.name}</option>;
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="form.state">
          <Form.Label>{t("State")}</Form.Label>
          <Form.Select value={state.index} onChange={(e)=> {
            const myState = states[e.target.value]//this is the bug here: index is 152 for almaty but array doesnt have that many
            setState({...myState,index:e.target.value})
            // changeBillingInfo({fieldName:"state",value:{...myState,index:e.target.value}})
            }}>
            <option>{t("Pick State")}</option>
            {states.map((oneState,index) => {
              return (
                <option value={index}>
                  {oneState.name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
       
        <Form.Group controlId="form.city">
          <Form.Label>
            {t("City")}
          </Form.Label>
          <Form.Control
            type="text"
            value={city}
            onChange={(e)=> {
                setCity(e.target.value)
                // changeBillingInfo({fieldName:"city",value:e.target.value})
            }}
            placeholder={t("City")}
            required
          />
        </Form.Group>
        <Form.Group controlId="form.zip">
          <Form.Label>
           {t("Postal Code")}
          </Form.Label>
          <Form.Control
            type="text"
            value={zip}
            onChange={(e)=>{setZip(e.target.value)}}
            placeholder={t("Postal Code")}
            required
          />
        </Form.Group>
        <Form.Group controlId="form.address1">
          <Form.Label>
            {t("Adress")}
          </Form.Label>
          <Form.Control
            type="text"
            value={address1}
            onChange={(e)=> {setAddress1(e.target.value)}}
            placeholder={t("Adress")}
            required
          />
        </Form.Group>
        <Form.Group controlId="form.firstName">
          <Form.Label>
            {t("First name")}
          </Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(e)=> {setFirstName(e.target.value)}}
            placeholder={t("First name")}
            required
          />
        </Form.Group>
        <Form.Group controlId="form.lastName">
          <Form.Label>
            {t("Last name")}
          </Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={(e)=> {setLastName(e.target.value)}}
            placeholder={t("Last name")}
            required
          />
        </Form.Group>
        <center>
          <Button className="my-3 w-100" type="submit">
            {t("Continue")}
          </Button>
        </center>
      </Form>
    </div>
  );
};
export default BillingInfo;
