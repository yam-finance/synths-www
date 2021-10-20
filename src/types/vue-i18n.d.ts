/**
 * @notice Global type definitions
 * using the typescript interface, you can define the i18n resources that is type-safed!
 */

import { DefineDateTimeFormat, DefineNumberFormat } from "vue-i18n"

declare module "vue-i18n" {
    /// @notice Define the datetime format schema
    export interface DefineDateTimeFormat {
        short: {
            hour: "numeric"
            minute: "numeric"
            second: "numeric"
            timeZoneName: "short"
            timezone: string
        }
    }

    /// @notice Define the number format schema
    export interface DefineNumberFormat {
        currency: {
            style: "currency"
            currencyDisplay: "symbol"
            currency: string
        }
    }
}
