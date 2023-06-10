/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  //时间复杂度O(m+n),空间复杂度O(1)
  const length1=nums1.length
  const length2=nums2.length
  if(length1===0&&length2===0){
    return 0
  }
  //指向nums1的当前索引
  let index1=0
  //指向nums2的当前索引
  let index2=0
  //中位数的排行，从1开始
  let medianCount=(length1+length2+1)>>1
  //前一个中位数
  let median1=0
  //后一个中位数
  let median2=0
  while(medianCount>0){
    if(index1<length1&&index2<length2){
      if(nums1[index1]>nums2[index2]){
        median1=nums2[index2]
        index2++
      }else{
        median1=nums1[index1]
        index1++
      }
    }else if(index1<length1){
      median1=nums1[index1]
      index1++
    }else{
      median1=nums2[index2]
      index2++
    }
    medianCount--
  }
  if(index1!==length1&&index2!==length2){
    median2=Math.min(nums1[index1],nums2[index2])
  }else if(index1!==length1){
    median2=nums1[index1]
  }else{
    median2=nums2[index2]
  }
  return (length1+length2)%2===0?(median1+median2)/2:median1
};
// @lc code=end

