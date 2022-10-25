
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
    this.sortedArray = array.sort();
    this.root = this.buildTree(this.sortedArray);
  }

// Methods
  buildTree(sortedArray) {
    let start = 0;
    let end = sortedArray.length-1;
    if (start > end) {
      return null;
    } else {
      let mid = Math.floor(((start + end)/2));
      const root = nodeFactory(sortedArray[mid]);
      let leftArray = sortedArray.slice(start, mid);
      let rightArray = sortedArray.slice(mid+1);
      root.left = this.buildTree(leftArray);
      root.right = this.buildTree(rightArray); 
      return root;
    }
  }

  insertNode(data, currentNode = this.root) {
    // if tree is empty
    if (currentNode === null) {
      // create a node
      return currentNode = nodeFactory(data);
    }
    // if data is the same as current node
    if (data === currentNode.data) {
      // do nothing
      return;
    }

    if (data < currentNode.data) {
      currentNode.left = this.insertNode(data, currentNode.left);
    } else if (data > currentNode.data) {
      currentNode.right = this.insertNode(data, currentNode.right);
    }
    // Not sure what this is doing but if I remove it it's wrong
    return currentNode;
  }
}



const TheTree = new Tree([3,5,7,9,1]);

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