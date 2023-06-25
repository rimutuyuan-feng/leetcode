/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  let str=`${x}`
  let left=0
  let right=str.length-1
  while(left<=right){
    if(str[left]!==str[right]){
      return false
    }
    left++
    right--
  }
  return true
};
// @lc code=end

