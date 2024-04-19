// 297. Serialize and Deserialize Binary Tree

/* 
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
*/

// Link - https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serialize(root) {
  if (!root) return "null";
  return root.val + "," + serialize(root.left) + "," + serialize(root.right);
}

function deserialize(data) {
  const nodes = data.split(",");
  let index = 0;

  function buildTree() {
    if (index >= nodes.length) return null;
    const val = nodes[index++];
    if (val === "null") return null;
    const node = new TreeNode(parseInt(val));
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }

  return buildTree();
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(4);
root1.right.right = new TreeNode(5);

const serialized = serialize(root1);
console.log("Serialized:", serialized);

const deserialized = deserialize(serialized);
console.log("Deserialized:", deserialized);
