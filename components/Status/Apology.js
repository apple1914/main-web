import { useTranslation } from "next-i18next";
export default function Apology() {
  //@ts-ignore
  const { t } = useTranslation("common");
  return (
    <div className="mx-auto px-2 pt-3">
      <div className="text-muted text-center text-decoration-underline">
        {t("delayMessage.title")}
      </div>
      <div className="text-muted text-center">{t("delayMessage.text")}</div>
    </div>
  );
}

//Progress Bar + countdown timer + messages
