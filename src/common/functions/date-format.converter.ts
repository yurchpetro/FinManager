export function ISO2Number(iso: string): number {
    const date: string[] = iso.split('T')[0].split('-');
    const time: string[] = iso.split('T')[1].split(':');
    return new Date(new Date().setFullYear(+date[0], +date[1] - 1, +date[2])).setHours(+time[0], +time[1], +time[2]);
}
