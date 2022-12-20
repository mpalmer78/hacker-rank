class BinarySearchTree {
    constructor(numbers) {
        this.root = null;
        this.buildTree(numbers);
    }
    buildTree(numbers) {
        if (numbers.length === 0)
            return;
        // Find the middle element of the array and use it as the root of the tree
        const middle = Math.floor(numbers.length / 2);
        this.root = new Node(numbers[middle]);
        // Create the left and right subtrees by recursively building the tree
        this.root.left = new BinarySearchTree(numbers.slice(0, middle));
        this.root.right = new BinarySearchTree(numbers.slice(middle + 1));
    }
}
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
function printTree(node, parent, depth) {
    // Output the right subtree
    if (node.right) {
        // Output the edge from the current node to its right child
        console.log(' '.repeat(depth * 2) + '└' + '─'.repeat(2) + node.right.value);
        // Print the right subtree with the current node as its parent
        printTree(node.right, node, depth + 1);
    }
    // Output the current node
    if (parent) {
        // Output the edge from the parent node to the current node
        console.log(' '.repeat((depth - 1) * 2) + '└' + '─'.repeat(2) + node.value);
    }
    else {
        // This is the root node, so no edge is needed
        console.log(' '.repeat(depth * 2) + node.value);
    }
    // Output the left subtree
    if (node.left) {
        // Output the edge from the current node to its left child
        console.log(' '.repeat(depth * 2) + '└' + '─'.repeat(2) + node.left.value);
        // Print the left subtree with the current node as its parent
        printTree(node.left, node, depth + 1);
    }
}
function printTreeWithEdges(node, depth) {
    // Output the right subtree
    if (node.right) {
        printTree(node.right, depth + 1);
    }
    // Output the current node and its edges
    console.log(' '.repeat(depth * 2) + node.value);
    if (node.left && node.right) {
        console.log(' '.repeat(depth * 2 + String(node.value).length) + '/ \\');
        console.log(' '.repeat(depth * 2 + String(node.value).length) + '-' + '-'.repeat(String(node.value).length - 1));
    }
    else if (node.left) {
        console.log(' '.repeat(depth * 2 + String(node.value).length) + '/');
    }
    else if (node.right) {
        console.log(' '.repeat(depth * 2 + String(node.value).length) + '\\');
        console.log(' '.repeat(depth * 2 + String(node.value).length) + '-' + '-'.repeat(String(node.value).length - 1));
    }
    // Output the left subtree
    if (node.left) {
        printTree(node.left, depth + 1);
    }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tree = new BinarySearchTree(numbers);
printTreeWithEdges(tree, 0);
//# sourceMappingURL=test.js.map