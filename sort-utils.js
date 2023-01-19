

const unsorted = generateRandoArray(15);
console.log('unsorted');
console.log(unsorted);

//const sorted = quickSort(unsorted);
const sorted = mergeSort(unsorted);
console.log('sorted');
console.log(sorted);

function mergeSort(list) {
    // console.log(list);
    // divide & conquer, sorting along the way until done
    if (list.length < 2) return list;
    const mid = Math.floor(list.length / 2);
    const leftSorted = mergeSort(list.slice(0, mid));
    const rightSorted = mergeSort(list.slice(mid))
    return merge(leftSorted, rightSorted);
}

function merge(left, right) {
    // compare sides, pushing lesser to result
    const result = [];
    let indexLeft = 0;
    let indexRight = 0;
    while(indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }
    return [...result, ...left.slice(indexLeft), ...right.slice(indexRight)];
}

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
    let stack = 0;
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