/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  const x=s.length
  const y=p.length
  const dp:boolean[][]=new Array(x+1).fill(false).map(item=>new Array(y+1).fill(false))
  dp[0][0]=true
  for(let index2=1;index2<=y;index2++){
    if(p[index2-1]==='*'){
      dp[0][index2]=dp[0][index2-2]
    }
  }
  for(let index1=1;index1<=x;index1++){
    for(let index2=1;index2<=y;index2++){
      if(p[index2-1]==='.'||p[index2-1]===s[index1-1]){
        dp[index1][index2]=dp[index1-1][index2-1]
      }else if(p[index2-1]==='*'){
        dp[index1][index2]=dp[index1][index2-2]||((p[index2-2]==='.'||s[index1-1]===p[index2-2])?dp[index1-1][index2]:false)
      }
    }
  }
  return dp[x][y]
};
// @lc code=end

