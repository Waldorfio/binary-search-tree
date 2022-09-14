console.clear();
console.log('-----');

function node(data, left, right) {   // Node Factory
  return {
    data,
    left,
    right
  };
}

// function tree(root) {  // Tree Factory
//   return {
//       root,           // Root attribute
//   }
// }

// Custom print function to visualise tree (from the Odin Project)
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

function buildTree(arr) {   // returns the level-0 root node.
  // Base Case
  if (arr.length <= 1) {
    return node(arr[0], null, null);    // Make left/right null if reached last node
  }

  const mid = (arr.length-1)/2;
  const root = node(arr[mid], {}, {});

  const lhs = arr.splice(0, mid);
  const rhs = arr.splice(1, arr.length);

  root.left = buildTree(lhs);           // Applying recursion to LHS
  root.right = buildTree(rhs);          // Applying recursion to RHS

  return root     // Returning root, so that the root.left/right expressions above can capture the tree
}

test = [1, 2, 3, 4, 5, 6, 7]; // test dataset
root = buildTree(test);       // build the tree
prettyPrint(root);            // visualise tree


// Assuming the following output format:
//       4
//   2       6
// 1   3   5   7

// tree2 = {
//     data: 4,
//     left: {
//         data: 2,
//         left: {
//             data: 1,
//             left: null,
//             right: null
//         },
//         right: {
//             data: 3,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         data: 6,
//         left: {
//             data: 5,
//             left: null,
//             right: null
//         },
//         right: {
//             data: 7,
//             left: null,
//             right: null
//         }
//     }
// };
