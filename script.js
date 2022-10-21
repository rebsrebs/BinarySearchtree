
// NODE FACTORY FUNCTION
const nodeFactory = (data) => {
  let left;
  let right;
  return { data, left, right };
};

// TREE CLASS
class Tree {
  constructor(array) {
    this.array = array;
    this.root = null;
  }

  // Methods
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

// BUILD TREE FUNCTION
const buildTree = function(array) {
  console.log('Build tree has started!');
  // start is index of first item, end is index of last item
  let start = 0;
  let end = array.length-1;
  // Base case - if array is only 1 element long
  if (start > end) {
    return null;
  } else {
    // Find index of middle of array
    let mid = Math.floor(((start + end)/2));
    console.log(`Mid is index ${mid} with value ${array[mid]}`);
    // create node with data from the mid index of array
    const root = nodeFactory(array[mid]);
    let leftArray = array.slice(start, mid);
    let rightArray = array.slice(mid+1);
    console.log(`leftArray is ${leftArray} and rightArray is ${rightArray}`);
    root.left = buildTree(leftArray);
    root.right = buildTree(rightArray); 
    // prettyPrint(root);
    const MyTree = new Tree(array);
    return MyTree.root = root;
  }
}
