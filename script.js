
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

// BUILD TREE FUNCTION
const buildTree = function(array) {
  // start is index of first item, end is index of last item
  let start = 0;
  let end = array.length-1;
  // Base case - if array is only 1 element long
  if (start >= end) {
    return null;
  } else {
    // Find index of middle of array
    let mid = Math.floor(((start + end)/2));
    console.log(`Mid is ${mid}`);
    const MyTree = new Tree(array);
    MyTree.root = buildTree(array);
    // create node with data from the mid index of array
    const root = nodeFactory(array[mid]);
    let leftArray = array.slice(start, mid);
    let rightArray = array.slice(mid+1);
    console.log(`leftArray is ${leftArray} and rightArray is ${rightArray}`);
    root.left = buildTree(leftArray);
    root.right = buildTree(rightArray); 
    return root;
  }
}
