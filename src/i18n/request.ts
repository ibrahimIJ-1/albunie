import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "ar"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    locale = "en";
  }

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
