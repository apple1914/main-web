import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useTranslation } from "next-i18next";

const FaqContent = () => {
  const {t} = useTranslation("common")
  return (
    <>
      <div className="faq-area faq-page pt-100">
        <div className="container">
          <div className="faq-accordion">
            <h2>{t("Get Every Single Answer")}</h2>

            <Accordion preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {t("FaqCompanyQuestion1")}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <p>
                      {t("FaqCompanyAnswer1")}
                      </p>

                      
                    </div>
                    <div className="col-lg-6">
                      <img src="/images/faq/faq-img1.png" alt="Image" />
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                  {t("FaqCompanyQuestion2")}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  {t("FaqCompanyAnswer2")}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                  {t("FaqCompanyQuestion3")}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <p>
                      {t("FaqCompanyAnswer3")}
                      </p>

                    
                    </div>
                    <div className="col-lg-6">
                      <img src="/images/faq/faq-img2.png" alt="Image" />
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {t("FaqCompanyQuestion4")}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                   {t("FaqCompanyAnswer4")}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
