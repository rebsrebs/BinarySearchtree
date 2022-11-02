
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

  findNode(data, currentNode = this.root) {
    console.log(`findNode is running and the currentNode.data is ${currentNode.data}.`)

    // it tree is empty
    if (currentNode === null) {
      return 'Tree is empty. Nothing to delete.';
    } else
  
    // If you find the node
    if (data === currentNode.data) {
      console.log(`Found it. data is ${data} and currentNode.data is ${currentNode.data}`);
      return { currentNode };
    } else

    // If data is smaller than current node data
    if (data < currentNode.data) {
      if (currentNode.left) {
        currentNode = currentNode.left;
        this.findNode(data, currentNode);
      } else {
        return `currentNode ${currentNode} does not have a left, data not found. `
      }
    } else
    if (data > currentNode.data) {
      if (currentNode.right) {
        currentNode = currentNode.right;
        this.findNode(data, currentNode);
      } else {
        return `currentNode ${currentNode} does not have a right, data not found. `
      }
    } else
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