"use client";
import Leveler from "../Common/Leveler";
import { useTranslation } from "next-i18next";
import WithdrawalCountdownAndProgress from "./WithdrawalCountdownAndProgress";

import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

// NOTE! you DONT need the withdrawal/deposit schema changes in order to finish this!
// for this tracker to be finished, all you need is just a standalone /withdrawal/:withdrawalId lookup object
// so feel free to run and deug this and make a pr and ake the changes only after! (what about tusti though..undefined defaults to false)
//
//
//
//
//
//
//
//

export default function WithdrawalSuccessScreenMain() {
  //@ts-ignore
  const { t } = useTranslation("common");

  return (
    <div className="content py-4 mt-5">
      <Row>
        <Col xs={3} md={4}></Col>
        <Col xs={6} md={4}>
          <div className="container mt-5 shadow rounded pb-5">
            <div className="d-flex justify-content-center">
              <div>
                <Image
                  src="/images/success/airplane.jpg"
                  alt="Image"
                  width={300}
                  height={100}
                  // fill={true}
                />
                {/* <div className="about-img-2">
              <img src="/images/about-img-2.jpg" alt="Image" />
            </div> */}
              </div>
            </div>
            <WithdrawalCountdownAndProgress />
          </div>
        </Col>
        <Col xs={3} md={4}></Col>
      </Row>
      <div className="pt-5 mb-5">
        <Leveler level={3} />
      </div>
    </div>
  );
}
//mercuryo already has payment success screen actually

//
