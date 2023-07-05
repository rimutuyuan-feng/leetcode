/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  //时间复杂度O(n),空间复杂度O(1)
  //左边界
  let left=0
  //右边界
  let right=height.length-1
  //最多盛水
  let result=0
  //贪心查找以每条边为最小边最大盛水体积
  while(left<right){
    //如果左边小，则此时为以左边为最小边盛水最多的情况
    if(height[left]<height[right]){
      result=Math.max(result,(right-left)*height[left])
      left++
    }else{//如果左边不小小，则此时为以右边为最小边盛水最多的情况
      result=Math.max(result,(right-left)*height[right])
      right--
    }
  }
  return result
};
// @lc code=end

