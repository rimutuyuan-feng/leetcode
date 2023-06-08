/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let result=0
  const length=s.length
  //窗口左侧，包含
  let left=0
  //窗口右侧，不包含
  let right=0
  //集合判断字符是否在窗口中存在
  const set=new Set()
  while(right<length){
    //窗口中有当前字符
    if(set.has(s[right])){
      //窗口左侧右移，窗口缩小
      set.delete(s[left])
      left++   
    }else{ //窗口中没有当前字符
      //窗口右侧右移，窗口增大
      set.add(s[right])
      right++
      //记录最大值
      result=Math.max(right-left,result)
    }
  }
  return result
};
// @lc code=end

