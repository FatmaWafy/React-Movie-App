/* eslint-disable */
import React, { createContext, useState, useContext } from "react";

// إنشاء Context
const LanguageContext = createContext();

// مزود (Provider) لإدارة اللغة
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    setLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"; // تعديل الاتجاه
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// دالة لتسهيل الوصول إلى الـ Context
export const useLanguage = () => useContext(LanguageContext);
