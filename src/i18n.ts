import { createI18n } from "vue-i18n"

/**
 * @notice Import locale messages resource from json for global scope
 */
import en from "@/locales/en.json"
import zh from "@/locales/zh.json"

/// @notice Type-define 'en' as the master schema for the resource
type MessageSchema = typeof en

/**
 * @notice Setup vue-i18n with i18n resources with global type definition.
 * If you define the i18n resource schema in your `*.d.ts`, these is checked with typeScript.
 * You can check global type defition at `./vue-i18n.d.ts`
 */
// @ts-ignore
export const i18n = createI18n<{ message: MessageSchema }, false>({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en: en,
        zh: zh,
    },
    datetimeFormats: {
        en: {
            short: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short",
                timezone: "US/LA",
            },
        },
    },
    numberFormats: {
        en: {
            currency: {
                style: "currency",
                currencyDisplay: "symbol",
                currency: "USD",
            },
        },
    },
})
