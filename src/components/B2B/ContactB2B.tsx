import Button from "../ui/button/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactB2B = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-cream" id="contact-b2b">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t("b2b.contact.title")}</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          {t("b2b.contact.subtitle")}
        </p>
        <div className="max-w-3xl mx-auto mt-10 bg-white/80 backdrop-blur rounded-3xl p-8 md:p-10 ring-1 ring-mywai/15">
          {submitted ? (
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold mb-4 text-mywai">
                {t("b2b.contact.thank_you")}
              </h3>
              <p className="text-muted-foreground">
                {t("b2b.contact.thank_you_msg")}
              </p>
            </div>
          ) : (
            <form
              className="space-y-6"
              action="https://formspree.io/f/xanpygdo"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("b2b.contact.fields.name")}
                  </label>
                  <input
                    name="name"
                    required
                    type="text"
                    className="w-full border border-mywai/20 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mywai bg-white/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("b2b.contact.fields.email")}
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full border border-mywai/20 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mywai bg-white/60"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("b2b.contact.fields.company")}
                </label>
                <input
                  name="company"
                  type="text"
                  className="w-full border border-mywai/20 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mywai bg-white/60"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("b2b.contact.fields.website")}
                  </label>
                  <input
                    name="website"
                    type="url"
                    placeholder="https://"
                    className="w-full border border-mywai/20 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mywai bg-white/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("b2b.contact.fields.phone")}
                  </label>
                  <input
                    type="tel"
                    placeholder="+33"
                    className="w-full border border-mywai/20 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mywai bg-white/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("b2b.contact.fields.message")}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-mywai/20 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mywai bg-white/60"
                />
              </div>
              <div className="text-center">
                <button type="submit">
                  <Button
                    variant="primary"
                    size="md"
                    className="!bg-mywai hover:!bg-mywai-dark !text-white"
                  >
                    {t("b2b.contact.submit")}
                  </Button>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactB2B;
