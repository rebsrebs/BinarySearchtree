
// NODE FACTORY FUNCTION
const nodeFactory = (data) => {
  let left;
  let right;
  return { data, left, right };
};

function compareNumbers(a, b) {
  return a - b;
}

// TREE CLASS
const Tree = class {

  constructor(array) {
    this.array = array;
    this.sortedArray = array.sort(compareNumbers);
    this.root = this.buildTree(this.sortedArray);
    // this.root = this.buildTree(array);
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

  //START INSERTNODE
  // put in the data you want to add, and the top of the tree
  insertNode(data, currentNode = this.root) {
    
    // node is empty
    if (currentNode === null) {
      // create a node
      console.log(`Base case because currentNode is ${currentNode} which is null.`)
      return currentNode = nodeFactory(data);
    } else
    // if data is the same as current node
    if (data === currentNode.data) {
      // do nothing
      return 'Data already on tree.';
    } else
    // if data is smaller than current node
    if (data < currentNode.data) {
      currentNode.left = this.insertNode(data, currentNode.left);
    } else if (data > currentNode.data) {
      currentNode.right = this.insertNode(data, currentNode.right);
    } 
    // Not sure what this is doing but if I remove it it's wrong
    return currentNode;
  }
  //END INSERTNODE

  //START DELETENODE
  deleteNode(data, currentNode = this.root) {
    console.log(`deleteNode is running and the currentNode.data is ${currentNode.data}.`)

    // it tree is empty
    if (currentNode === null) {
      return 'Tree is empty. Nothing to delete.';
    }
  
    // If you find the node
    if (data === currentNode.data) {
      console.log('Found it.');
      // If the node is a leaf
      if (!currentNode.left && !currentNode.right) {
        console.log('The node is a leaf, we must simply delete it.')
      }
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
  //END DELETENODE




  //START FINDNODE
  findNode(data, currentNode = this.root) {
    // If tree is empty
    if (currentNode.data === null) {
      return 'Tree is empty. Nothing to find.';
    }
    // If data is smaller than current node data
    if (data < currentNode.data) {
      // If currentNode has a left
      if (currentNode.left) {
        return this.findNode(data, currentNode.left);
      } else {
        return `currentNode does not have a left, data not found in this tree. `
      }
    // If data is larger than current node data
    } else if (data > currentNode.data) {
      console.log(`data ${data} is bigger than currentNode.data ${currentNode.data}`);
      // If currentNode has a right
      if (currentNode.right) {
        return this.findNode(data, currentNode.right);
      } else {
        return `currentNode does not have a right, data not found in this tree. `
      }
    // BASE CASE If you find the node:
    } else if (data === currentNode.data) {
      console.log('found it!')
        return currentNode; 
    } else {
      return 'Not sure what happened.';
    }
  }
  //END FINDNODE
}





const TheTree = new Tree([1,3,5,8,9,20]);

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