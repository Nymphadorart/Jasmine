let selectElementsStartingWithA = (array) => {
    return array.filter(str => /^[a]/i.test(str));
    //return array.filter((str) =>.startWith("a"))
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(str => /^[aeiou]/i.test(str));
    //return array.filter((str) =>.startWith("a,e,i,o,u"))
}

let removeNullElements = (array) => {

    return array.filter(x => x !== null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(x => x !==false && x !==null );
}

let reverseWordsInArray = (array) => {
    return array.toString().split("").reverse().join("").split(",").reverse()

}

let everyPossiblePair = (array) => {
    return array.sort().map( (v, i) => array.slice(i + 1).map(w => [v, w]) ).flat();

}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3,8);
}

let addElementToBeginning = (array, element) => {
    return [element, ...array];
    //return array.unshift(element)
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

let getFirstHalf = (string) => {
    return string.substr(0,3);
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
   let count = 0 ;
   for (let elem of array) {
       if (elem === elem.split("").reverse().join("")) count++;
   } return count;
    
   //return array.toString().split("").reverse().join("").split(",")
}

let shortestWord = (array) => {
    return array.sort((a, b) => a.length - b.length)[0];
}

let longestWord = (array) => {
    return array.sort((a, b) => b.length - a.length)[0];
    //return array.reduce((a, b) => a.length < b.length ? b : a, "");
}

let sumNumbers = (array) => {
    return array.reduce ((a,b) => a + b, 0);
}

let repeatElements = (array) => {
    return array.concat(array)
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return array.reduce ((a, b) => a + b )/array.length ;
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.filter(el => { return el <= 5 }).splice(0, 6)
}

let convertArrayToObject = (array) => {
    let Obj = {};
    for (let i = 0; i < array.length - 1; i += 2) {
      Obj[array[i]] = array[i + 1];
    }
    return Obj;
     //return Object.assign({}, array);
}

let getAllLetters = (array) => {
return array.split(",")
}

let swapKeysAndValues = (object) => {
    const swapped = Object.entries(object).map(
        ([key, value]) => [value, key]
      );
    
      return Object.fromEntries(swapped);;
}

let sumKeysAndValues = (object) => {
    /*return Object.reduce(
        (a, b) => a + b, 0);;*/

        return Object.reduce((a, b) => a + (b[key] || 0), 0);
    
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g,'');
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString();
}

let getDomainName = (string) => {
    //return string.substring(0, string.lastIndexOf("@")+1);
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    if( string.match() ){
        return true;
      }else{
        return false;
      }
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    return  (number);
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
