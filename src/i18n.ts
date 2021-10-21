import { createI18n } from "vue-i18n"

/**
 * @notice Import locale messages resource from json for global scope
 */
import enUS from "@/locales/en-US.json"

/// @notice Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof enUS

/**
 * @notice Setup vue-i18n with i18n resources with global type definition.
 * If you define the i18n resource schema in your `*.d.ts`, these is checked with typeScript.
 * You can check global type defition at `./vue-i18n.d.ts`
 */
// @ts-ignore
export const i18n = createI18n<{ message: MessageSchema }, false>({
    legacy: false,
    locale: "en-US",
    fallbackLocale: "en-US",
    messages: {
        "en-US": enUS,
    },
    datetimeFormats: {
        "en-US": {
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
        "en-US": {
            currency: {
                style: "currency",
                currencyDisplay: "symbol",
                currency: "USD",
            },
        },
    },
})
