console.clear();
console.log('-----');

function node(data, left, right) {   // Node Factory 
  return {
    data,
    left,
    right,
  }
}
exampleNode = node(4, null, null);

// function tree(root) {  // Tree Factory
//   return {
//       root,           // Root attribute
//   }
// }

function buildTree(arr, tree, dir) {   // returns the level-0 root node.
  console.log('running buildTree...');
  // Base Case
  if (arr.length < 1) {
    return
  }
  
  midIdx = (arr.length-1)/2;
  midNode = node(arr[midIdx], {}, {});

  if (dir=='initial') {tree = midNode};
  if (dir=='left') {tree.left = midNode};
  if (dir=='right') {tree.right = midNode};

  lhs = arr.splice(0, midIdx);
  rhs = arr.splice(1, arr.length);

  buildTree(lhs, tree.left, 'left');
  buildTree(rhs, tree.right, 'right');
  console.log(tree);
  return

}

test = [1, 2, 3, 4, 5, 6, 7];

buildTree(test, {}, 'initial');

// Assuming the following output format:
//       4
//   2       6
// 1   3   5   7
// as an object literal


tree2 = {
    data: 4,
    left: {
        data: 2,
        left: {
            data: 1,
            left: null,
            right: null
        },
        right: {
            data: 3,
            left: null,
            right: null
        }
    },
    right: {
        data: 6,
        left: {
            data: 5,
            left: null,
            right: null
        },
        right: {
            data: 7,
            left: null,
            right: null
        }
    }
};
