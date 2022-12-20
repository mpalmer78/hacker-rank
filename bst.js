function createBalancedBST(numbers) {
    // base case: empty array
    if (numbers.length === 0) return null;

    // calculate the median value of the array
    const medianIndex = Math.floor(numbers.length / 2);
    const medianValue = numbers[medianIndex];

    // create the root node with the median value
    const root = {
        value: medianValue,
        left: null,
        right: null,
    };

    // create the left and right subtrees by recursively
    // calling this function on the subarrays of values
    // less than and greater than the median value
    root.left = createBalancedBST(numbers.slice(0, medianIndex));
    root.right = createBalancedBST(numbers.slice(medianIndex + 1));

    return root;
}

const numbers = range(1,100);
const balancedBST = createBalancedBST(numbers);
printBST(balancedBST);


function printBST(root) {
    // base case: empty tree
    if (!root) return;

    // create a queue to store the nodes we need to visit
    const queue = [root];

    // keep track of the current level of the tree
    let currentLevel = 1;

    // continue searching while there are nodes in the queue
    while (queue.length > 0) {
        // pop the first node from the queue
        const current = queue.shift();

        // print the value of the current node
        console.log(current.value);

        // add the left and right children of the current node
        // to the queue (if they exist)
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);

        // if we've visited all the nodes at the current level,
        // print a newline and increment the current level
        if (queue.length === 0) {
            console.log('\n');
            currentLevel++;
        }
    }
}

function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => i)
}