//Ex1
function hasSpaces(str) {
const regex = /\s/
 return regex.test(str)
}
console.log("Ex 1: " + hasSpaces("Amine Samet"))
console.log("Ex 1: " + hasSpaces("AmineSamet"))

//Ex2
function countVowels(str) {
 const regex = /[aeiou]/gi
 const vowels = str.match(regex)
 if (vowels === null ) {
    return 0
 }
  else {
    return vowels.length
 }
}
console.log("Ex 2: " + countVowels("Aminoo"))
console.log("Ex 2: " + countVowels("lpmnbvc"))

//Ex3
function replaceVowels(str, char) {
    const regex = /[aeiou]/gi
    return str.replace(regex, char)
}
console.log("Ex 3: " + replaceVowels('Aminoo','x'))

//Ex4
function mathExpr(input) {
    const regex = /([-+/*]\d+(\.\d+)?)/
    return regex.test(input)
}
console.log("Ex 4: " + mathExpr("4+5"))
console.log("Ex 4: " + mathExpr("4*no"))
console.log("Ex 4: " + mathExpr("5/yes"))
console.log("Ex 4: " + mathExpr("8-12+20/15"))

//Ex5
function asterisk(str) {
    const regex =  /[a][a-z]{0,}[c]{0,}[a-z]{0,}/i
    return regex.test(str) 
}
console.log("Ex 5: " + asterisk("ac")) 
console.log("Ex 5: " + asterisk("aacc")) 
console.log("Ex 5: " + asterisk("bbbccount")) 
console.log("Ex 5: " + asterisk("abbbccount")) 
console.log("Ex 5: " + asterisk("abccount")) 
console.log("Ex 5: " + asterisk("account")) 

//Ex6
function zipCode(str){
    regex = /^[0-9]{5}$/
    return regex.test(str)
}
console.log("Ex 6: " + zipCode("20438"))
console.log("Ex 6: " + zipCode("1#368"))
console.log("Ex 6: " + zipCode("2028014444"))
