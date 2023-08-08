export function nextMounth(month: string): string {
    const date: string[] = month.split('-');
    let year: number = +date[1];
    let newMounth: number = +date[0] + 1;

    if (newMounth > 12) {
        newMounth = 1;
        year += 1;
    }

    return newMounth + '-' + year;
}

export function previousMounth(month: string): string {
    const date: string[] = month.split('-');
    let year: number = +date[1];
    let newMounth: number = +date[0] - 1;

    if (newMounth < 1) {
        newMounth = 12;
        year -= 1;
    }

    return newMounth + '-' + year;
}
