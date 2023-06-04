/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  //时间复杂度O(n),空间复杂度O(n)
  //保存已遍历的值和下标
  const valueIndexMap=new Map<number,number>()
  //遍历数组
  for(let i=nums.length-1;i>=0;i--){
    const need=target-nums[i]
    //有target-value
    if(valueIndexMap.has(need)){
      return [i,valueIndexMap.get(need)!]
    }else{
      valueIndexMap.set(nums[i],i)
    }
  }
  return []
};
// @lc code=end

