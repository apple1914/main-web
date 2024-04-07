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
      <div className="text-muted text-decoration-underline">Summary</div>

      <Row>
        <Col className="text-start">Вывод на:</Col>
        <Col className="text-end">{nickname}</Col>
      </Row>
      <Row>
        <Col className="text-start">Сумма ($):</Col>
        <Col className="text-end">${usdtAmount}</Col>
      </Row>
      <Row>
        <Col className="text-start">Статус:</Col>
        <Col className="text-end">
          {tusti === true ? "Доставленно" : "Обрабатывается"}
        </Col>
      </Row>
    </div>
  );
}

//Progress Bar + countdown timer + messages
