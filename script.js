
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
    if (data && currentNode) {
    console.log(`At beginning of insertNode, data in currentNode is ${currentNode.data} and data is ${data}`);
    console.log(typeof data, typeof currentNode.data);
    }
    
    // node is empty
    if (currentNode === null) {
      // create a node
      // console.log(`Base case because currentNode is ${currentNode} which is null.`)
      currentNode = nodeFactory(data);
      return currentNode;

    // if data is the same as current node
    } else if (data === currentNode.data) {
      // do nothing - this is not happening
      return 'Data already on tree.';

    // if data is smaller than current node
    } else if (data < currentNode.data) {
      console.log(`data ${data} smaller than currentNode.data ${currentNode.data} so going to run recursively`);
      currentNode.left = this.insertNode(data, currentNode.left);

    // if data is bigger than current node  
    } else if (data > currentNode.data) {
      console.log(`data ${data} larger than currentNode.data ${currentNode.data} so going to run recursively`);
      currentNode.right = this.insertNode(data, currentNode.right);
    } 

    // Not sure what this is doing but if I remove it it's wrong
    console.log(`about to return currentNode whose data is ${currentNode.data} at the very end of the function`)
    return currentNode;
  }
  //END INSERTNODE

  //START DELETENODE
  // need to recognize if data is not in tree
  deleteNode(data, currentNode = this.root, parent = null) {
    console.log(`deleteNode is running and the currentNode.data is ${currentNode.data}.`)

    // it tree is empty
    if (currentNode === null) {
      return 'Tree empty.';
    }
  
    // If you find the node
    if (data === currentNode.data) {
      console.log('Found it.');

      // If the node is a leaf
      if (!currentNode.left && !currentNode.right) {
        console.log('The node is a leaf, we must simply delete it.')
        // remove parent link to node
        if (parent.right === currentNode) {
          parent.right = null;
        } else if (parent.left === currentNode) {
          parent.left = null;
        }
        // if the node to delete has only a right child
      } else if (currentNode.right && !currentNode.left){
          if (currentNode.data < parent.data) {
            parent.left = currentNode.right;
          } else {
            parent.right = currentNode.right;
          }
        // if the node has only a left child
      } else if (currentNode.left && !currentNode.right){
        if (currentNode.data > parent.data) {
          parent.right = currentNode.left;
        } else {
          parent.left = currentNode.left;
        }
        // if the node has two children
      } else if (currentNode.left && currentNode.right) {
        console.log ('Node to be deleted has two children.')

      }
      return 'node deleted.'
    }

    // If data is smaller than current node data
    if (data < currentNode.data) {
      console.log(`data ${data} is smaller than currentNode.data ${currentNode.data}`);
      // If currentNode has a left
      if (currentNode.left) {
        parent = currentNode;
        currentNode = currentNode.left;
        this.deleteNode(data, currentNode, parent);
      } else {
        return 'Data not found.'
      }
    }
    // If data is larger than current node data
    if (data > currentNode.data) {
      console.log(`data ${data} is bigger than currentNode.data ${currentNode.data}`);
      // If currentNode has a right
      if (currentNode.right) {
        parent = currentNode;
        currentNode = currentNode.right;
        this.deleteNode(data, currentNode, parent);
      } else {
        return 'Data not found.'
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