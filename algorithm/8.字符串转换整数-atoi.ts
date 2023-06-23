/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  //去除空格
  s=s.trim()
  if(s.length===0){
    return 0
  }
  //取符号
  let sign=0
  if(s[0]==='-'){
    sign=1
    s=s.slice(1)
  }else if(s[0]==='+'){
    s=s.slice(1)
  }
  //取数字
  let number=''
  for(let i=0;i<s.length;i++){
    if(s[i]>='0'&&s[i]<='9'){
      number+=s[i]
    }else{
      break
    }
  }
  if(number===''){
    return 0
  }
  //删除数字前面的0
  let index=0
  while(number[index]==='0'){
    index++
  }
  number=number.slice(index)
  if(number===''){
    return 0
  }
  //溢出处理
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
  number=sign===0?number:'-'+number
  if(isOverFlow(number)){
    return number[0]==='-'?-(2**31):2**31-1
  }else{
    return parseInt(number)
  }
};
// @lc code=end

