// TODO: Add translations for the app
// web/src/translations.ts 
// - este archivo es igual a ese archivo

const enum LANGUAGE {
  ES = "es",
  EN = "en",
  FR = "fr",
}
const DEFAULT_LANGUAGE: LANGUAGE = LANGUAGE.ES;

export { DEFAULT_LANGUAGE, LANGUAGE };
export const LIMIT_CHARACTERS_IN_TRANSLATION = 9200;

export const Languages = [
  { title: "Español", value: LANGUAGE.ES },
  { title: "Inglés", value: LANGUAGE.EN },
  { title: "Francés", value: LANGUAGE.FR },
];
