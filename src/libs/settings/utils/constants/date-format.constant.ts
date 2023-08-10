import { SelectModel } from '@common/models';

export const dateFormatConstant: SelectModel[] = [
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
