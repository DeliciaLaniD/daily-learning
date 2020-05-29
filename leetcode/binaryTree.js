/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var preorder = [3,9,20,15,7],
    inorder = [9,3,15,20,7]
var buildTree = function(preorder, inorder) {
    var root = preorder[0];
    var rootIndex = 0;
    for (var i = 0; i < inorder.length; i++) {
        if (root === inorder[i]) {
            rootIndex = i;
            break;
        }
    }
    var tree = new TreeNode(root);
    console.log(preorder.slice(1, rootIndex))
    tree.left = buildTree(preorder.slice(1, rootIndex), inorder.slice(0, rootIndex));
    // console.log(tree)
    tree.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));
    return tree;
};
buildTree(preorder, inorder);