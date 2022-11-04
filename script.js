
// NODE FACTORY FUNCTION
const nodeFactory = (data) => {
  let left = null;
  let right = null;
  return { data, left, right };
};

function compareNumbers(a, b) {
  return a - b;
}

function logNodeData(node) {
  console.log(node.data);
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
      currentNode = nodeFactory(data);
      return currentNode;

    // if data is the same as current node
    } else if (data === currentNode.data) {
      console.log('Data already on tree.');

    // if data is smaller than current node
    } else if (data < currentNode.data) {
      currentNode.left = this.insertNode(data, currentNode.left);

    // if data is bigger than current node  
    } else if (data > currentNode.data) {
      currentNode.right = this.insertNode(data, currentNode.right);
    } 

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
        //find a minimum value in the right subtree currentNode.right
        let deleteThis = currentNode;
        let subTree = currentNode.right;
        while (subTree.left) {
          subTree = subTree.left
        }
        console.log(`subTree.data ${subTree.data} is the minimum.`)
        // store data 
        let temp = subTree.data;
        // delete node that had that data
        this.deleteNode(subTree.data);
        // replace the data to delete with that stored data
        deleteThis.data = temp;
      }
      return currentNode;
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
        console.log('Data not found.');
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
        console.log('Data not found.');
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
        return `Data not found in this tree. `
      }
    // If data is larger than current node data
    } else if (data > currentNode.data) {
      console.log(`data ${data} is bigger than currentNode.data ${currentNode.data}`);
      // If currentNode has a right
      if (currentNode.right) {
        return this.findNode(data, currentNode.right);
      } else {
        return `Data not found in this tree. `
      }
    // BASE CASE If you find the node:
    } else if (data === currentNode.data) {
      console.log('found it!')
    }
    return currentNode;
  }
  //END FINDNODE

  //START LEVEL ORDER V1
  levelOrder(callback) {
    let done = [];
    if (this.root === null) {
      return;
    } else {
      let queue = [];
      queue.push(this.root);
      while (queue.length > 0) {
        // enqueue children
        if (queue[0].left) {
          queue.push(queue[0].left);
        }
        if (queue[0].right) {
          queue.push(queue[0].right);
        }
        // if function was passed, run it
        if (callback) {
          callback(queue[0])
        }
        done.push(queue.shift());      
      }
    }
    if (callback) {
      return;
    } else {
    return done;
    }
  }
  //END LEVEL ORDER

  //START LEVEL ORDER RECURSIVE
  levelOrderRec(currentNode = this.root, queue = [], done = []) {
    if (this.root === null) {
      return 'Tree empty.';
    } else {
      // put currentNode passed to function into queue
      queue.push(currentNode);
      // if the front of queue has children, send them through again
      if (queue[0].right) {
        this.levelOrderRec(queue[0].right);
      }
      if (queue[0].left) {
        this.levelOrderRec(queue[0].left);
      }
      done.push(queue.shift());   
      console.log(done[0]); 
    }
  }

  //END LEVEL ORDER RECURSIVE


  // HEIGHT - if there is only a root the height is 0
  // Tree has min and max height
  // A balanced tree has a diff of max 1 between min and max
  // min height is distance between root node and first leaf node without two children but it can have one child
  getMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.getMinHeight(node.left);
    let right = this.getMinHeight(node.right);
    if (left < right) {
      return left + 1
    } else {
      return right + 1;
    };
    }

  getMaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    console.log(`Node.data ${node.data}`);

    let left = this.getMaxHeight(node.left);
    let right = this.getMaxHeight(node.right);
    console.log (`Node.data ${node.data} Left ${left} and right ${right}`);
    // whichever one is bigger, return that one plus 1
    if (left > right) {
      console.log("Left:");
      return left + 1;
    } else {
      console.log("Right:");
      return right + 1;
    };
  }

    // root, left, right
    preOrder(callback, currentNode = this.root, array=[]) {
      if (currentNode != null) {

        if (callback) {
          callback(currentNode);
        } else {
          array.push(currentNode.data);
        }

        this.preOrder(callback, currentNode.left, array);
        this.preOrder(callback, currentNode.right, array);
      } else {
        return;
      }
      if (callback) {
        return;
      } else {
      return array;
      }
    }

  // left, root, right
  inOrder(callback, currentNode = this.root, array=[]) {
    if (currentNode != null) {
      this.inOrder(callback, currentNode.left, array);

      if (callback) {
        callback(currentNode);
      } else {
        array.push(currentNode.data);
      }
      
      this.inOrder(callback, currentNode.right, array);
    } else {
      return;
    }
    if (callback) {
      return;
    } else {
    return array;
    }
  }

  // left, right, root
  postOrder(callback, currentNode = this.root, array=[]) {
    if (currentNode != null) {
      this.postOrder(callback, currentNode.left, array);
      this.postOrder(callback, currentNode.right, array);

       if (callback) {
        callback(currentNode);
      } else {
        array.push(currentNode.data);
      }

    } else {
      return;
    }
    
    if (callback) {
      return;
    } else {
    return array;
    }

  }


// getDepth() {

// }


isBalanced(){
  if (!this.root) {
    return 'There is no tree.'
  }
  if (this.getMaxHeight() - this.getMinHeight() <=1) {
    console.log(this.getMaxHeight() - this.getMinHeight());
    return true;
  } else {
    console.log(this.getMaxHeight() - this.getMinHeight());
    return false;
  }
}


// rebalance() {

// }



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
