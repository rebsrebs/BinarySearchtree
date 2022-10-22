
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

  // methods
  insertNode() {
    // if key is smaller than the root
      // if key has no left, key = root.left
      // else
      // run insertNode on key.left
    // else if key is larger than the root
      // if key has no right, key = root.right
      // else
      // run insertNode on key.right
    // else return;
  }

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

    const MyTree = new Tree(array);
    return MyTree.root = root;
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















// const buildTree = function(array) {
//   console.log('Build tree has started!');
//   // start is index of first item, end is index of last item
//   let start = 0;
//   let end = array.length-1;
//   // Base case - if array is only 1 element long
//   if (start > end) {
//     return null;
//   } else {
//     // Find index of middle of array
//     let mid = Math.floor(((start + end)/2));
//     console.log(`Mid is index ${mid} with value ${array[mid]}`);
//     // create node with data from the mid index of array
//     const root = nodeFactory(array[mid]);
//     let leftArray = array.slice(start, mid);
//     let rightArray = array.slice(mid+1);
//     console.log(`leftArray is ${leftArray} and rightArray is ${rightArray}`);

//     root.left = buildTree(leftArray);
//     root.right = buildTree(rightArray); 

//      // How do I just print the main tree and not the subtrees?
//      prettyPrint(root);

//     const MyTree = new Tree(array);
//     return MyTree.root = root;
//   }
// }
