function charCount(myChar, str) {
	let num = 0;
	for (i=0;i<str.length; i++) {
		if (str[i]==myChar) {
			num = num+1;
		}
	}
	return num;
}