// 方法一
const romnMap = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
}

const composeRomanMap = {
	IV: 4,
	IX: 9,
	XL: 40,
	XC: 90,
	CD: 400,
	CM: 900,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	let int = 0
	let _str = s
	Object.keys(composeRomanMap).forEach(key => {
		const value = composeRomanMap[key]
		const regx = new RegExp(key, 'g')
		int = int + ((s.match(regx) || []).length * value)
		_str = _str.replace(regx, '')
	})

	Object.keys(romnMap).forEach(key => {
		const value = romnMap[key]
		const regx = new RegExp(key, 'g')
		int = int + ((_str.match(regx) || []).length * value)
	})
	return int
};


// 方法二
const romnMap = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	let int = 0
	let skip = false
	const strArr = s.split('')
	strArr.forEach((word, index) => {
		const nextWord = strArr[index + 1]
		if (skip) {
			skip = false
			return
		}
		if (word === 'I' && nextWord === 'V') {
			int = int + 4
			skip = true
		} else if (word === 'I' && nextWord === 'X') {
			int = int + 9
			skip = true
		} else if (word === 'X' && nextWord === 'L') {
			int = int + 40
			skip = true
		} else if (word === 'X' && nextWord === 'C') {
			int = int + 90
			skip = true
		} else if (word === 'C' && nextWord === 'D') {
			int = int + 400
			skip = true
		} else if (word === 'C' && nextWord === 'M') {
			int = int + 900
			skip = true
		} else {
			int = int + romnMap[word]
		}
	})
	
	return int
};


// 方法三
const romnMap = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
	IV: 4,
	IX: 9,
	XL: 40,
	XC: 90,
	CD: 400,
	CM: 900,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	let int = 0
	let skip = false
	const strArr = s.split('')
	strArr.forEach((word, index) => {
		if (skip) {
			skip = false
			return
		}
		const nextWord = strArr[index + 1]
		const joinWord = word + nextWord
		const composeVale = romnMap[joinWord]
		if (composeVale) {
			skip = true
			int = int + composeVale
		} else {
			int = int + romnMap[word]
		}
	})
	
	return int
};