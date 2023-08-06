export function IdGeneratorFunction(): string {
    const min = 999;
    const max = 10000;

    const time: string = new Date().getTime().toString();
    const random: string = Math.floor(Math.random() * (max - min + 1) + min).toString();

    return time + random;
}
