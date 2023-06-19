/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  //时间复杂度O(1),空间复杂度O(1)
  let strX=`${x}`
  function isOverFlow(str:string):boolean{
    const max=`${(2**31-1)}`
    const min=`${(1<<31)}`
    return function judge(str:string,compare:string):boolean{
      function process(str:string,compare:string,index:number):boolean{
        if(index===str.length){
          return false
        }
        return str[index]<compare[index]?false:str[index]>compare[index]?true:process(str,compare,index+1)
      }
      return str.length>compare.length?true:str.length<compare.length?false:process(str,compare,0)
    }(str,str[0]==='-'?min:max)
  }
  function reverseStr(str:string):string{
    let reverseStr=''
    for(let i=str.length-1;i>0;i--){
      reverseStr+=str[i]
    }
    return str[0]==='-'?`-${reverseStr}`:`${reverseStr}${str[0]}`
  }
  let result=reverseStr(strX)
  return isOverFlow(result)?0:parseInt(result)
};
// @lc code=end
