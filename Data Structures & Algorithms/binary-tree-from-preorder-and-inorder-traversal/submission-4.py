class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        in_map = {val: i for i, val in enumerate(inorder)}
        pre_idx = 0
        
        def helper(in_start, in_end):
            nonlocal pre_idx
            if in_start > in_end:
                return None
            
            val = preorder[pre_idx]
            root = TreeNode(val)
            pre_idx += 1
            
            mid = in_map[val]
            root.left = helper(in_start, mid - 1)
            root.right = helper(mid + 1, in_end)
            return root
            
        return helper(0, len(inorder) - 1)