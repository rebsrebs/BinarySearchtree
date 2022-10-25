
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
    this.root = this.buildTree(array);
  }

// Methods
  buildTree(array) {
    let start = 0;
    let end = array.length-1;
    if (start > end) {
      return null;
    } else {
      let mid = Math.floor(((start + end)/2));
      const root = nodeFactory(array[mid]);
      let leftArray = array.slice(start, mid);
      let rightArray = array.slice(mid+1);
      root.left = this.buildTree(leftArray);
      root.right = this.buildTree(rightArray); 
      return root;
    }
  }

  insertNode(data, currentNode = this.root) {
    // base case
    if (currentNode === null) {
      currentNode = nodeFactory(data);
    }
    if (data === currentNode.data) {
      return;
    }
    if (data < currentNode.data) {
      currentNode.left = this.insertNode(data, currentNode.left);
    } else if (data > currentNode.data) {
      currentNode.right = this.insertNode(data, currentNode.right);
    }

    console.log(currentNode);
    return currentNode;
  }


  // insertNode(data, current = this.root) {
  //   console.log(`data is ${data} and current is ${current} and current.data is ${current.data}`)
  //   if (data < current.data) {
  //     console.log(`data ${data} is smaller than current.data ${current.data}`);
  //     if (current.left===null) {
  //       console.log(`current.leff is null so we will create a new node`)
  //       // create node
  //       const newNode = nodeFactory(data);
  //       newNode.left = null;
  //       newNode.right = null;
  //       // point current leaf node to it
  //       current.left = newNode;
  //       return;
  //     } else {
  //     console.log(`current.left.data is ${current.left.data}`);
  //     current = current.left;
  //     // this does not work:
  //     current.insertNode(data, current);
  //     }
  //   } else if (data > this.root.data) {
  //     // if this is a leaf node
  //     if (current.right===null) {
  //       // create node
  //       const newNode = nodeFactory(data);
  //       newNode.left = null;
  //       newNode.right = null;
  //       // point current leaf node to it
  //       current.right = newNode;
  //       return;
  //     } else {
  //       current = current.right;
  //       current.insertNode(data, current);
  //     }
  //   } else {
  //     console.log('no change made');
  //     return current;
  //   }
  // }


  // alternate version after watching video
  // addData(data) {
  //   if (this.root === null) {
  //     this.root = nodeFactory(data);

  //   } else {
  //     const insertNode = function(data, current = this.root){

  //       if (data < current.data) {

  //         if (current.left === null) {
  //           return current.left = nodeFactory(data);
  //         } else {
  //           current = current.left;
  //           return current.insertNode(data, current);
  //         }

  //       } else if (data > current.data) {
  //         if (current.right === null) {
  //           return current.right = nodeFactory(data);
  //         } else {
  //           current = current.right;
  //           return current.insertNode(data, current);
  //         }
  //       }

  //     }
  //     insertNode(data);
  //   }
  // }




}




const TheTree = new Tree([1,3,5,7,9]);







//   insertNode(data, current = this.root) {
//     console.log(`data is ${data} and current is ${current} and current.data is ${current.data}`)
//     if (data < current.data) {
//       console.log(`data ${data} is smaller than current.data ${current.data}`);
//       if (current.left===null) {
//         console.log(`current.leff is null so we will create a new node`)
//         // create node
//         const newNode = nodeFactory(data);
//         newNode.left = null;
//         newNode.right = null;
//         // point current leaf node to it
//         current.left = newNode;
//         return;
//       } else {
//       console.log(`current.left.data is ${current.left.data}`);
//       current = current.left;
//       // this does not work:
//       current.insertNode(data, current);
//       }
//     } else if (data > this.root.data) {
//       // if this is a leaf node
//       if (current.right===null) {
//         // create node
//         const newNode = nodeFactory(data);
//         newNode.left = null;
//         newNode.right = null;
//         // point current leaf node to it
//         current.right = newNode;
//         return;
//       } else {
//         current = current.right;
//         current.insertNode(data, current);
//       }
//     } else {
//       console.log('no change made');
//       return current;
//     }
//   }
// }



// // BUILD TREE FUNCTION
// const buildTree = function(array) {
//   let start = 0;
//   let end = array.length-1;
//   if (start > end) {
//     return null;
//   } else {
//     let mid = Math.floor(((start + end)/2));
  
//     const root = nodeFactory(array[mid]);
//     let leftArray = array.slice(start, mid);
//     let rightArray = array.slice(mid+1);

//     // prettyPrint(root);

//     // root.left = new Tree(leftArray);
//     // root.right = new Tree(rightArray);

//     root.left = buildTree(leftArray);
//     root.right = buildTree(rightArray); 
    
//     return root;
//   }
// }

// const prettyPrint = (node, prefix = '', isLeft = true) => {
//   // if the node has a right child
//   if (node.right !== null) {
//     prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
//   }
//   console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
//   // if the node has a left child
//   if (node.left !== null) {
//     prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
//   }
// }








// const TheTree = new Tree([1,3,5]);



// root.left = new Tree(leftArray);
    // root.right = new Tree(rightArray);


// deleteNode() {
    // if node is a leaf
      // the node that previously pointed to that node will no longer do that
    // else if node has one child, replace it with its child so node that previously pointed to it will point to its child
    // else if node has two children
      // find the next biggest thing
      // look in its right sub tree for the left most thing that has no left - it's the smallest thing in its subtree
      // replace node with that node - recursively if something also had children??

  // }