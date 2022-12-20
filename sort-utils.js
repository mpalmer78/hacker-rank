let stack = 0;

const unsorted = generateRandoArray(15);
// console.log(unsorted);

const sorted = bubbleSort(unsorted);
console.log('sorted: ' + sorted);

function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}


function quickSort(arr) {
    if (!arr || arr.length <= 1) return arr;
    // pivot at the beginning and push lesser than to the left, greater than to the right, then combine
    // rinse, and repeat
    const pivot = arr[0];
    const left = [];
    const right = [];

    for(let i = 1; i < arr.length; i++) {
        const value = arr[i];
        if (value < pivot) left.push(value);
        else right.push(value);
    }
    const sorted = [...quicksort(left), pivot, ...quicksort(right)];
    console.log(`s${stack++} = ${sorted}`);
    return sorted;
}

function generateRandoArray(length) {
    const randos = [];
    for (let i = 1; i <= length; i++) {
        randos.push(generateRandoNumber(i, length));
    }
    return randos;
}

function generateRandoNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}