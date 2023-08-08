export function GetMonthYearFunction(date: number): string {
    return (new Date(date).getMonth() + 1).toString() + '-' + new Date(date).getFullYear().toString();
}
