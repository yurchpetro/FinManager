export enum SETTING_ITEM_ENUM {
    POINTER = 'pointer',
    SELECT = 'select',
    TOGGLE = 'toggle',
}

export type SettingItemType = SETTING_ITEM_ENUM.POINTER | SETTING_ITEM_ENUM.SELECT | SETTING_ITEM_ENUM.TOGGLE;
