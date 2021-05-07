/**
 * 区間[start, end]に含まれる整数の配列を返す
 */
export function closeRange(start: number, end: number): number[] {
    if (start > end) {
        return [];
    } else if (start === end) {
        return [start];
    }

    const range: number[] = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}
