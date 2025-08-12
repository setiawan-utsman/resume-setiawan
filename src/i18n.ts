import i18next from "i18next";
import translationID from "./app/assets/i18n/id.json";
import translationEN from "./app/assets/i18n/en.json";
import { initReactI18next } from "react-i18next";

const resources: any = {
  en: {
    translation: translationEN
  },
  id: {
    translation: translationID
  },
};

i18next.
use(initReactI18next)
.init({
  lng: "id", // if you're using a language detector, do not define the lng option
  debug: true,
  resources: resources
});