import { getCookie } from "@/lib/cookies-helper";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "ar"];

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  let locale = "en";
  try {
    locale = (await getCookie("NEXT_LOCALE")) ?? "en";
  } catch (error) {
    locale = "en";
  }
  // return {
  //   locale,
  //   messages: (await import(`../messages/${locale}.json`)).default,
  // };

  const messages = {
    en: () => import("./messages/en.json"),
    ar: () => import("./messages/ar.json"),
  };
  const importedMessages = await messages[locale as keyof typeof messages]();

  return {
    locale: locale as string,
    messages: importedMessages.default,
  };
});
