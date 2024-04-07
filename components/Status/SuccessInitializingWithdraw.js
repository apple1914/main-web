import { useTranslation } from "next-i18next";
export default function SuccessInitializingWithdraw({ nickname }) {
  //@ts-ignore
  const { t } = useTranslation("common");
  return (
    <div className="w-50 mx-auto p-3">
      <h4 className="text-center">Успех!</h4>
      <h6>Вы успешно оформили вывод средств на {nickname || ""}</h6>
    </div>
  );
}

//Progress Bar + countdown timer + messages
