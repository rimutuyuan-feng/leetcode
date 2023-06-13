/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  //时间复杂度O(n),空间复杂度O(n)
	if (s.length < 2) {
		return s
	}
	s = `#${s.split('').join('#')}#`
	const length = s.length
	const help:number[] = new Array(length)
	let max = 0
	let index = -1
	let r = -1
	for (let i = 0; i < length; i++) {
		help[i] = r > i ? Math.min(r - i, help[2 * index - i]) : 1
		let right = help[i] + i
		let left = i - help[i]
		while (left >= 0 && right < length && s[right] === s[left]) {
			help[i]++
			left--
			right++
		}
		if (right > r) {
			r = right
			index = i
		}
		max = Math.max(max, help[i])
	}
  let resultIndex=0
	help.forEach((value,index)=>{
    if(value===max){
      resultIndex=index
    }
  })
  return (s.slice(resultIndex-max+1,resultIndex)+s.substr(resultIndex,max)).split('#').join('')
};
// @lc code=end

