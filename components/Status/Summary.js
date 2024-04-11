import { useTranslation } from "next-i18next";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
export default function SuccessInitializingWithdraw({
  nickname,
  tusti,
  usdtAmount,
}) {
  //@ts-ignore
  const { t } = useTranslation("common");
  return (
    <div className="mx-auto px-2">
      <div className="text-muted border-bottom">{t("Summary")}</div>

      <Row>
        <Col className="text-start">{t("Вывод на")}:</Col>
        <Col className="text-end">{nickname}</Col>
      </Row>
      <Row>
        <Col className="text-start">{t("Сумма")}:</Col>
        <Col className="text-end">${usdtAmount?.toFixed(2)}</Col>
      </Row>
      <Row>
        <Col md={6} xs={4} className="text-start">
          {t("Status")}:
        </Col>
        <Col md={6} xs={8} className="text-end text-decoration-underline">
          {tusti === true ? t("Доставленно") : t("Обрабатывается")}
        </Col>
      </Row>
    </div>
  );
}

//Progress Bar + countdown timer + messages
