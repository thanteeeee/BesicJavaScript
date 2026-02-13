function findLongestwords(setence){
    setence = setence.split(",").join(" ").split(" ")
    let total = 0
    let longestWord = setence[0]

    setence.forEach(word => {
        if(longestWord.length <= word.length){
            longestWord = word
        }
    });
    
    setence.forEach(word => {
        if(longestWord.toUpperCase() === word.toUpperCase()){
            total++
        }
    })
    

    return {
        words:longestWord,
        count:total
    }
    
}

console.log(findLongestwords("There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain"))
