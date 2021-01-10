


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (!strs || !strs.length ) return ''

	if (strs.length === 1) return strs[0]

	const [firstStr, ...otherStrs] = strs
	const firstStrLength = firstStr.length
	
	const subStrs = {}

	let maxStr = '' 

	for (let i = 1; i <= firstStrLength; i++) {
		const key = firstStr.substr(0, i)
		subStrs[key] = 1
	}

	otherStrs.forEach((str, index) => {
		Object.keys(subStrs).forEach((key) => {
			if (str.substr(0, key.length) !== key) {
				delete subStrs[key]
				return
			}
			
			if (index === otherStrs.length - 1 && key.length > maxStr.length) {
				maxStr = key
			}	
		})

	})

	return maxStr
};