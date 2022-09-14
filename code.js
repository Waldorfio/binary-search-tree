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

function buildTree(arr) {   // returns the level-0 root node.
  // Base Case
  if (arr.length <= 1) {
    return node(arr[0], null, null);    // Make left/right null if reached last node
  }

  const mid = (arr.length-1)/2;
  const root = node(arr[mid], {}, {});

  const lhs = arr.splice(0, mid);
  const rhs = arr.splice(1, arr.length);

  root.left = buildTree(lhs);
  root.right = buildTree(rhs);

  return root
}

test = [1, 2, 3, 4, 5, 6, 7];
root = buildTree(test);
console.log(root);

// Assuming the following output format:
//       4
//   2       6
// 1   3   5   7
// as an object literal


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
