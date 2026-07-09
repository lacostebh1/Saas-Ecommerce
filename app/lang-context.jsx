'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { UI, detectLang } from '../lib/i18n';

const LangContext = createContext({ lang: 'fr', setLang: () => {}, t: UI.fr });

export function LangProvider({ children }) {
  const [lang, setLangState] = useState('fr');

  useEffect(() => {
    const detected = detectLang();
    if (detected !== 'fr') setLangState(detected);
  }, []);

  const setLang = (code) => {
    if (!UI[code]) return;
    setLangState(code);
    try { localStorage.setItem('srm_lang', code); } catch {}
    document.documentElement.lang = code;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: UI[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
