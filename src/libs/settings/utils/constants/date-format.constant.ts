import { DateFormatItemModel } from '@libs/settings/utils/models/date-format-item.model';

export const dateFormatConstant: DateFormatItemModel[] = [
    {
        viewValue: 'European - DD.MM.YYYY',
        value: 'dd.MM.yyyy',
    },
    {
        viewValue: 'British - DD/MM/YYYY',
        value: 'dd/MM/yyyy',
    },
    {
        viewValue: 'American - MM/DD/YYYY',
        value: 'MM/dd/yyyy',
    },
    {
        viewValue: 'General ISO - YYYY-MM-DD',
        value: 'yyyy-MM-dd',
    },
];
