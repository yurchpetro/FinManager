export function GetMonthYearFunction(date?: number): string {
    if (date) {
        return (new Date(date).getMonth() + 1).toString() + '-' + new Date(date).getFullYear().toString();
    } else {
        return (new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();
    }
}
