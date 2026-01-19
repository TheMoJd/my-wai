import Button from "../ui/button/Button";
import { useTranslation } from "react-i18next";

const ContactB2B = () => {
  const { t } = useTranslation();

  const calendarUrl = "https://calendar.notion.so/meet/baptistejeauneau/k32uk3rre";

  return (
    <section className="section-padding bg-cream" id="contact-b2b">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t("b2b.contact.title")}</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          {t("b2b.contact.subtitle")}
        </p>
        <div className="max-w-3xl mx-auto mt-10 bg-white/80 backdrop-blur rounded-3xl p-8 md:p-10 ring-1 ring-mywai/15">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-mywai">
                {t("b2b.contact.booking_title")}
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {t("b2b.contact.booking_description")}
              </p>
            </div>
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="lg"
                className="!bg-mywai hover:!bg-mywai-dark !text-white mt-4"
              >
                {t("b2b.contact.booking_cta")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactB2B;
