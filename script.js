// You’ll build a balanced BST in this assignment. Do not use duplicate values because they make it more complicated and result in trees that are much harder to balance. Therefore, be sure to always remove duplicate values or check for an existing value before inserting.

// NODE FACTORY FUNCTION
const nodeFactory = (data) => {
  data = data;
  let left;
  let right;
  return { data, left, right };
};

// TREE CLASS
class Tree {
  constructor(array) {
    this.array = array;
    this.root = buildTree(array);
  }

  // Methods
  // addNode(object) {
  // }
}

// BUILD TREE FUNCTION
const buildTree = function(array, start = 0, end = array.length-1) {

  const MyTree = new Tree(array);

  // Find middle of array
  let mid = Math.floor(((start + end)/2));

  if (start > end) {
    return null;
  } else {
    // set value of node to the middle of array, this is the root of tree
    const newNode = nodeFactory(array[mid]);
    let leftArray = slice.array[start, mid];
    let rightArray = slice.array[mid];
    newNode.left = buildTree(leftArray);
    newNode.right = buildTree(rightArray); 
    // MyTree.addNode(newNode);   
  }
}




  //Algorithm steps:
// - initialize start = 0, end = length of the array -1
// - mid = (start+end)/2
// - create a tree node wiht mid as root (lets call it A)
// - recursively do the following steps:
// - find mid of left subarray and make it root of left subtree of A
// - find mid of right subarray and make it root of right subtree of A

