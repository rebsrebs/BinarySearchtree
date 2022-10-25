
// NODE FACTORY FUNCTION
const nodeFactory = (data) => {
  let left;
  let right;
  return { data, left, right };
};

// TREE CLASS
const Tree = class {

  constructor(array) {
    this.array = array;
    this.root = this.buildTree(array);
  }

// Methods
  buildTree(array) {
    let start = 0;
    let end = array.length-1;
    if (start > end) {
      return null;
    } else {
      let mid = Math.floor(((start + end)/2));
      const root = nodeFactory(array[mid]);
      let leftArray = array.slice(start, mid);
      let rightArray = array.slice(mid+1);
      root.left = this.buildTree(leftArray);
      root.right = this.buildTree(rightArray); 
      return root;
    }
  }

  insertNode(data, currentNode = this.root) {
    // base case
    if (currentNode === null) {
      return currentNode = nodeFactory(data);
    }
    if (data === currentNode.data) {
      return;
    }
    if (data < currentNode.data) {
      currentNode.left = this.insertNode(data, currentNode.left);
    } else if (data > currentNode.data) {
      currentNode.right = this.insertNode(data, currentNode.right);
    }

    return currentNode;
  }
}

const TheTree = new Tree([1,3,5,7,9]);

const prettyPrint = (node, prefix = '', isLeft = true) => {
  // console.log(`prettyPrint argument node.data is ${node.data}`)
  if (node.right) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

prettyPrint(TheTree.root);