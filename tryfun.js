function findLongestVowels(sentance,lengthWord){
    sentance = sentance.join(" ").toUpperCase().split(" ")

    const result = sentance.filter(word => {
        if(word.length >= lengthWord && /[AEIOU]/.test(word)){
            return word
        }
    })

    const sortedWords = result.sort((a, b) => {
        const vowelCountA = (a.match(/[AEIOU]/g) || []).length
        const vowelCountB = (b.match(/[AEIOU]/g) || []).length

        if (vowelCountA !== vowelCountB) {
            return vowelCountB - vowelCountA
        }

        return a.localeCompare(b)
    });

    return sortedWords.join(" ")
}

const sentance = ["banana","apple","fig","horse","grape"]
console.log(findLongestVowels(sentance,5))
