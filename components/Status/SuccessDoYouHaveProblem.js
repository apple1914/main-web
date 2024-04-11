import { useTranslation } from "next-i18next";
import Link from "next/link";
export default function SuccessDoYouHaveProblem() {
  //@ts-ignore
  const { t } = useTranslation("common");
  return (
    <div className="mx-auto px-2 mt-4 text-center">
      <div className="text-muted text-center border-bottom">
        {t("successTustiSupport.title")}
      </div>

      <Link
        className="btn btn-outline-primary text-primary mx-auto mt-5"
        href="/contact"
        activeClassName="active"
      >
        {t("Contact us")}
      </Link>
      <div className="text-muted mt-2 w-75 mx-auto">
        {t("successTustiSupport.text")}
      </div>
    </div>
  );
}

//Progress Bar + countdown timer + messages
