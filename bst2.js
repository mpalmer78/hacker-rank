class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(values, start = 0, end = values.length - 1) {
        if (start > end) return;

        const middle = Math.floor((start + end) / 2);
        const node = new Node(values[middle]);

        if (!this.root) {
            this.root = node;
        } else {
            this._insertNode(this.root, node);
        }

        this.insert(values, start, middle - 1);
        this.insert(values, middle + 1, end);
    }

    _insertNode(parent, node) {
        if (node.value < parent.value) {
            if (!parent.left) {
                parent.left = node;
            } else {
                this._insertNode(parent.left, node);
            }
        } else {
            if (!parent.right) {
                parent.right = node;
            } else {
                this._insertNode(parent.right, node);
            }
        }
    }

    preOrderDFS(node = this.root, result = []) {
        result.push(node.value);
        if (node.left) this.preOrderDFS(node.left, result);
        if (node.right) this.preOrderDFS(node.right, result);
        return result;
    }

    bfs(node = this.root) {
        const queue = [node];
        const result = [];
        while (queue.length) {
            const currentNode = queue.shift();
            result.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        return result;
    }
}

const bst = new BinarySearchTree();
bst.insert([1, 2, 3, 4, 5, 6, 7, 8, 9]);


