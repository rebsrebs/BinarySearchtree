
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
    this.root = buildTree(array);
  }

  //methods
  insertNode(data) {
    console.log(`data is ${data} and root is ${this.root.data}`);
    if (data < this.root.data) {
      console.log(`Data ${data} is smaller than this.root ${this.root}`);
      if (this.root.left.data===null) {
        this.root.left = data;
        return this.root;
      } else {
      this.root.left(insertNode(data)) 
      }
    } else if (data > this.root) {
      console.log(`Data ${data} is greater than this.root ${this.root}`);
      if (this.root.right===null) {
        this.root.right = data;
        return this.root;
      } else {
      this.root.right(insertNode(data)) 
      }
    } else {
      console.log('no change made');
      return this.root;
    }
  }

  // deleteNode() {
    // if node is a leaf
      // the node that previously pointed to that node will no longer do that
    // else if node has one child, replace it with its child so node that previously pointed to it will point to its child
    // else if node has two children
      // find the next biggest thing
      // look in its right sub tree for the left most thing that has no left - it's the smallest thing in its subtree
      // replace node with that node - recursively if something also had children??

  // }
}

  

// BUILD TREE FUNCTION
const buildTree = function(array) {
  let start = 0;
  let end = array.length-1;
  if (start > end) {
    return null;
  } else {
    let mid = Math.floor(((start + end)/2));
  
    const root = nodeFactory(array[mid]);
    let leftArray = array.slice(start, mid);
    let rightArray = array.slice(mid+1);

    root.left = buildTree(leftArray);
    root.right = buildTree(rightArray); 

    prettyPrint(root);

    return root;
  }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  // if the node has a right child
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  // if the node has a left child
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

const TheTree = new Tree([1,2,3,4,5,7,8]);
