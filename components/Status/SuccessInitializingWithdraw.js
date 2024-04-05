import { useTranslation } from "next-i18next";
export default function SuccessInitializingWithdraw({ nickname }) {
  //@ts-ignore
  const { t } = useTranslation("common");
  return (
    <div>
      <h4>Успех!</h4>
      <h5>Вы успешно оформили вывод средств на {nickname || ""}</h5>
    </div>
  );
}

//Progress Bar + countdown timer + messages
