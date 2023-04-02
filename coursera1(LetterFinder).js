function findLetter(word, match) {
    var condition1 = typeof (word) == 'string' && word.length >= 2;
    var condition2 = typeof (match) == 'string' && match.length == 1;
    var count = 0;
    if (condition1 && condition2) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] == match) {
                count++;
            }
        }
        if (count > 0) {
            console.log(`${match} has been found in ${word} ${count} time/s`)
        }
        else {
            console.log(`${match} not found in ${word}`)
        }
    }
    else {
        console.log("Enter the right parameters. (word must be atleast 2 letters, and letter can be only 1, and both should be string)")
    }
};

findLetter("Brotherhood", "b");
