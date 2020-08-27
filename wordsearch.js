const transpose = matrix => {
	const transposeArr = [];
	let tempArr = [];
	const column = matrix.length;
	const row = matrix[0].length;
	for (let newRow = 0; newRow < row; newRow++) {
		for (let newColumn = 0; newColumn < column; newColumn++) {
			tempArr.push(matrix[newColumn][newRow]);
		}
		transposeArr.push(tempArr);
		tempArr = [];
	}
	return transposeArr;
};

const sampleArr = [
	['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
	['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
	['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
	['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
	['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
	['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
	['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
	['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
	['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
];

const wordSearch = (letters, word) => {
	const horizontalJoin = letters.map(ls => ls.join(''));
	for (let l of horizontalJoin) {
		if (l.includes(word)) {
			console.log(l);
			return true;
		}
	}

	//transpose letters array to assess vertical column
	const newLettersArray = transpose(letters);
	console.table('letters:', letters);

	console.table('newLettersArray:', newLettersArray);

	const verticalJoin = newLettersArray.map(ls => ls.join(''));
	for (let l of verticalJoin) {
		if (l.includes(word)) {
			return true;
		}
	}

	const rows = letters.length;
	let sampleWord = '';

	for (let i = 0; i < rows; i++) {
		let first = 0;
		let second = i;
		while (first <= i) {
			const char = sampleArr[first++][second--];
			if (char) {
				sampleWord += char;
			}
		}
		console.log(sampleWord);

		if (sampleWord.length >= word.length && sampleWord.includes(word)) {
			console.log(sampleWord);
			return true;
		}
		sampleWord = '';
	}
	const columns = letters[0].length;
	for (let botDiagonal = 1; botDiagonal < columns; botDiagonal++) {
		let first = botDiagonal;
		let second = rows - 1;
		while (first <= rows - 1) {
			const char = sampleArr[first++][second--];
			if (char) {
				sampleWord += char;
			}
		}
		console.log(sampleWord);

		if (sampleWord.length >= word.length && sampleWord.includes(word)) {
			console.log(sampleWord);
			return true;
		}
		sampleWord = '';
	}

	return false;
};

wordSearch(sampleArr, 'ALFDHALSDFH');

module.exports = wordSearch;

// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found

// wordSearch(
// 	[
// 		['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
// 		['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
// 		['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
// 		['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
// 		['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
// 		['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
// 		['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
// 		['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
// 		['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// 	],
// 	'FRANK'
// );
