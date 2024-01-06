import { createContext, useMemo, useState } from "react";
import getUserLocale from "get-user-locale"
import PropTypes from "prop-types";

import langFr from "../data/langFr.json"
import langEn from "../data/langEn.json"

export const LocaleContext = createContext();

export function LocaleContextProvider({ children }) {
    const systemLocale = getUserLocale()

    const [language, setLanguage] = useState(systemLocale === "fr-FR" ? langFr : langEn);

  const memoizedLanguage = useMemo(() => {
    return { language, setLanguage };
  }, [language]);

  return (
    <LocaleContext.Provider value={memoizedLanguage}>{children}</LocaleContext.Provider>
  );
}
LocaleContextProvider.propTypes = {
  children: PropTypes.node,
};
LocaleContextProvider.defaultProps = {
  children: "",
};