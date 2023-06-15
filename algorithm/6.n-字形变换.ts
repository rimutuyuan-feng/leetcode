/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] N 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  //时间复杂度O(n),空间复杂度O(1)
  if(numRows===1){
    return s
  }
  let result=''
  const step=2*numRows-2
  for(let row=0;row<numRows;row++){
    let curr=row
    while(curr<s.length){
      result+=s[curr]
      if(row!==0&&row!==(numRows-1)){
        let next=curr+step-2*row
        if(next<s.length){
          result+=s[next]
        }
      }
      curr+=step
    }
  }
  return result
};
// @lc code=end

