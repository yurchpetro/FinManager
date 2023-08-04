export namespace VALIDATION_PATTERNS {
    export const NAME_PATTERN: string = '^[a-zA-Z]*$';
    export const NUMBERS_PATTERN: string = '^[0-9]*$';
    export const ENTITY_NAME_PATTERN: RegExp = /^[^\s]+(\s+[^\s]+)*$/;
    export const NAME_AND_NUMBERS_PATTERN: string = '^[A-Za-z0-9]*$';
    export const PHONE_PATTERN: RegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){5,14}(\s*)?$/;
    export const URL_PATTERN_STRICT: RegExp = /(^((https|http):\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$)/;
    export const URL_PATTERN: RegExp = /(^(https|http):\/\/?[A-z0-9])/;
    export const EMAIL_PATTERN: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
}
