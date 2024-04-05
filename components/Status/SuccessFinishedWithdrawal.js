import { useTranslation } from "next-i18next";
export default function SuccessInitializingWithdraw({ nickname }) {
  //@ts-ignore
  const { t } = useTranslation("common");
  return (
    <div>
      <h4>Ура</h4>
      <h5>Ваш вывод средств на {nickname || ""} был успешно выполнен!</h5>
    </div>
  );
}

//Progress Bar + countdown timer + messages
