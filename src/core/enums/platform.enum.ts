export enum PLATFORM_ENUM {
    WEB = 'web',
    ANDROID = 'android',
    IOS = 'ios',
}

export type PlatformType =
    | PLATFORM_ENUM.WEB
    | PLATFORM_ENUM.ANDROID
    | PLATFORM_ENUM.IOS;
