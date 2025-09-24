import React from "react";
import { useTranslation } from "react-i18next";
import { getAssetPath } from "../lib/utils";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-mywai/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="relative h-14 w-14">
                <img
                  src={getAssetPath("logo.png")}
                  alt="Logo MyWai"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-2xl font-display font-bold text-mywai-dark">
                MyWai
              </span>
            </a>
            <p className="text-muted-foreground">
              {t("footer.brand_description")}
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">
              {t("footer.quick_links.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-mywai transition-colors"
                >
                  {t("footer.quick_links.about")}
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-muted-foreground hover:text-mywai transition-colors"
                >
                  {t("footer.quick_links.process")}
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-muted-foreground hover:text-mywai transition-colors"
                >
                  {t("footer.quick_links.pricing")}
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-muted-foreground hover:text-mywai transition-colors"
                >
                  {t("footer.quick_links.testimonials")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">
              {t("footer.information.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#faq"
                  className="text-muted-foreground hover:text-mywai transition-colors"
                >
                  {t("footer.information.faq")}
                </a>
              </li>
              <li>
                <a
                  href="/mentions-legales"
                  className="text-muted-foreground hover:text-mywai transition-colors"
                >
                  {t("footer.information.legal")}
                </a>
              </li>
              <li>
                <a
                  href="/cgu"
                  className="text-muted-foreground hover:text-mywai transition-colors"
                >
                  {t("footer.information.terms")}
                </a>
              </li>
              <li>
                <a
                  href="javascript:Sddan.cmp.displayUI();"
                  className="text-muted-foreground hover:text-mywai transition-colors"
                >
                  {t("footer.information.cookies")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">
              {t("footer.contact.title")}
            </h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                {t("footer.contact.email")}:
                <a
                  href={`mailto:${t("footer.contact.email_value")}`}
                  className="text-mywai hover:text-mywai-dark transition-colors ml-1"
                >
                  {t("footer.contact.email_value")}
                </a>
              </li>
            </ul>
            Imprimé avec ❤️ en Bretagne
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-mywai/10 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} MyWai. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
