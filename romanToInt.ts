console.log(romanToInt('I'));

function romanToInt(s: string): number {
    const numbers: number[] = [];
    for(let i = 0; i < s.length; i++) {
        let numeral = s[i];
        if (isSubtractor(numeral) && s.length - 1 > i) {
            const next = s[i+1];
            if (isSubtractable(next)) {
                numeral = numeral + next;
                i++;
            }
        }
        numbers.push(numeralToNumber(numeral));
    }
    return numbers.reduce((prev, curr) => prev + curr);
}

function numeralToNumber(numeral: string): number {
    const romans = getRomanValues();
    return romans.get(numeral) ?? 0;
}

function isSubtractor(numeral: string): boolean {
    return ['I','X','C'].includes(numeral);
}

function isSubtractable(numeral: string): boolean {
    return ['X','V','L','C','D','M'].includes(numeral);
}

function getRomanValues(): Map<string, number> {
    const romans = new Map<string, number>();
    romans.set('I', 1);
    romans.set('V', 5);
    romans.set('X', 10);
    romans.set('L', 50);
    romans.set('C', 100);
    romans.set('D', 500);
    romans.set('M', 1000);
    romans.set('IV', 4);
    romans.set('IX', 9);
    romans.set('XL', 40);
    romans.set('XC', 90);
    romans.set('CD', 400);
    romans.set('CM', 900);
    return romans;
}