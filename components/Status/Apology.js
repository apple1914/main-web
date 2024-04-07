import { useTranslation } from "next-i18next";
export default function Apology() {
  //@ts-ignore
  const { t } = useTranslation("common");
  return (
    <div className="mx-auto px-2 pt-3">
      <div className="text-muted text-center text-decoration-underline">
        Приносим извинения за задержку
      </div>
      <div className="text-muted text-center">
        Не беспокойтесь, ваши средства в пути. Мы обработаем вашу транзакцию в
        ближайшее время. Благодарим за понимание
      </div>
    </div>
  );
}

//Progress Bar + countdown timer + messages
