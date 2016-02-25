function isStartsWith (text, byTextLength, prefix) {
	prefixLength = prefix.length
	if (prefixLength > byTextLength) {
		return false;
	}

	for (var i = 0; i < prefixLength; i++) {
		if (text[i] != prefix[i]) {
			return false;
		}
	};

	return true;
}

function isEndsWith (text, byTextLength, suffix) {
	suffixLength = suffix.length;
	if (suffixLength > byTextLength) {
		return false;
	}

	for (var i = 0; i < suffixLength; i++) {
		if (text.substring(text.length - suffixLength)[i] != suffix[i]) {
			return false;
		}
	};

	return true;
}

module.exports = {
	isStartsWith: isStartsWith,
	isEndsWith: isEndsWith
}