
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

  // Start deleteNode
  deleteNode(data, currentNode = this.root) {
    console.log(`deleteNode is running and the currentNode.data is ${currentNode.data}.`)

    // it tree is empty
    if (currentNode === null) {
      return 'Tree is empty. Nothing to delete.';
    }
  
    // If you find the node
    if (data === currentNode.data) {
      console.log('Found it.');
    }

    // If data is smaller than current node data
    if (data < currentNode.data) {
      console.log(`data ${data} is smaller than currentNode.data ${currentNode.data}`);
      // If currentNode has a left
      if (currentNode.left) {
        currentNode = currentNode.left;
        this.deleteNode(data, currentNode);
      }
    }
    // If data is larger than current node data
    if (data > currentNode.data) {
      console.log(`data ${data} is bigger than currentNode.data ${currentNode.data}`);
      // If currentNode has a right
      if (currentNode.right) {
        currentNode = currentNode.right;
        this.deleteNode(data, currentNode);
      }
    }
    return currentNode;

  }
  // End deleteNode




  // Start findNode
  // Works except on leaf nodes
  findNode(data, currentNode = this.root) {
    console.log(`findNode is running and the currentNode.data is ${currentNode.data}.`)

    // it tree is empty
    if (currentNode === null) {
      return 'Tree is empty. Nothing to delete.';
    }
  
    // If you find the node
    if (data === currentNode.data) {
      console.log(`Found it. data is ${data} and currentNode.data is ${currentNode.data}`);
    }

    // If data is smaller than current node data
    if (data < currentNode.data) {
      console.log(`data ${data} is smaller than currentNode.data ${currentNode.data}`);
      // If currentNode has a left
      if (currentNode.left) {
        currentNode = currentNode.left;
        this.findNode(data, currentNode);
      } else {
        `currentNode ${currentNode} does not have a left, data not found. `
        return currentNode;
      }
    }
    // If data is larger than current node data
    if (data > currentNode.data) {
      console.log(`data ${data} is bigger than currentNode.data ${currentNode.data}`);
      // If currentNode has a right
      if (currentNode.right) {
        currentNode = currentNode.right;
        this.findNode(data, currentNode);
      } else {
        return `currentNode ${currentNode} does not have a right, data not found. `
      }
    }
    
    if (currentNode.left && currentNode.right) {
      return currentNode;
    } else {
      'This is a leaf node and I cannot figure out how to return it yet'
    }

  }
  // End findNode

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