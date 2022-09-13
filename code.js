console.clear();
console.log('-----');

function node(data, child) {   // Node Factory 
  return {
    data,
    child,
  }
}

function tree(root) {  // Tree Factory
  return {
      root,           // Root attribute
  }
}

function buildTree(array) {   // returns the level-0 root node.
  return root
}


// test = [1, 2, 3, 4, 5, 6, 7];

// Assuming the following output format:
//       4
//   2       6
// 1   3   5   7
// as an object literal

// tree = {
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
