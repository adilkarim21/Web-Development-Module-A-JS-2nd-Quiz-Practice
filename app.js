// Chap # 21 CHANGING CASES:


// var countryToCheck = prompt("Enter your country..");
// countryToCheck = countryToCheck.toLowerCase();
// var cleanestCountries = ["iran","pakistan","afghanistan","saudia","america","thailand"];

// for ( var i =  0 ; i < cleanestCountries.length ; i++ ) {
//     if ( countryToCheck === cleanestCountries[i] ) {
//         alert("It's one of the cleanest country...");
//     }
// }


// var countryToCheck = prompt("Enter your country..");
// countryToCheck = countryToCheck.toUpperCase();
// var cleanestCountries = ["IRAN","PAKISTAN","AFGHANISTAN","SAUDIA","AMERICA","THAILAND"];

// for ( var i =  0 ; i < cleanestCountries.length ; i++ ) {
//     if ( countryToCheck === cleanestCountries[i] ) {
//         alert("It's one of the cleanest country...");
//     }
// }


// var userInput = prompt("Enter your city");

// userInput = userInput.toLowerCase()

// console.log(userInput);

// var citiesArr = [
//     "karachi",
//     "lahore",
//     "multan",
//     "quetta",
//     "peshawar",
//     "islamabad",
// ];

// var flags = false;

// for ( var i = 0 ; i <= 5 ; i++ ) {
//     if ( userInput === citiesArr[i] ) {
//         console.log("city found..");
//         flags = true;
//     }    
// }

// if ( flags === false ) {
//     console.log("city not found..");
// }



// var text = "hello world";

// console.log(text.slice(6,11));



// var userInput = prompt("Enter your city");

// var firstChar = userInput.slice(0,1).toUpperCase();

// var remainingChar = userInput.slice(1,).toLowerCase();

// var updatedValue = firstChar + remainingChar;

// console.log(updatedValue);

// var citiesArr = [
//     "Karachi",
//     "Lahore",
//     "Multan",
//     "Quetta",
//     "Peshawar",
//     "Islamabad",
// ];

// var flags = false;

// for ( var i = 0 ; i <= 5 ; i++ ) {
//     if ( updatedValue === citiesArr[i] ) {
//         console.log("city found..");
//         flags = true;
//     }    
// }

// if ( flags === false ) {
//     console.log("city not found..");
// }




// Chap # 22 STRINGS: MEASURING LENGTHS AND EXTRACTING PARTS:


// var userEmail = prompt("Enter your email..");

// for ( var i = 0 ; i < userEmail.length ; i++ ) {
//     if ( userEmail.slice( i , i + 10 ) === "@gmail.com" ) {
//         alert("Account found!");
//     }
// }


// var word = prompt("Enter a word..");
// var firstChar = word.slice(0,1);
// var otherChars = word.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var finalWord = firstChar + otherChars;
// console.log(finalWord);


// var str = prompt("Enter some text");

// for ( var i = 0 ; i < str.length ; i++ ) {
//     if ( str.slice( i , i + 2 ) === "  " ) {
//         alert("Double space found!");
//     }
//     else if ( str.slice( i , i + 1 ) === "!" ) {
//         alert("! found");
//     }
//     else if ( str.slice( i , i + 1 ) === "#" ) {
//         alert("# found");
//     }
// }




// Chap # 22 STRINGS: FINDING SEGMENTS;


// var text = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be";

// for ( var i = 0 ; i < text.length ; i++ ) {
//     if ( text.slice(i,i+12) === "World War II" ) {
//         text = text.slice (0,i) + "The Second World War" + text.slice (i+12); 
//     }
// }

// console.log(text);


// var text = "Khan achieved the all-rounder's triple (securing 3000 runs and 300 wickets) in 75 Tests, the second-fastest record";

// for ( var i = 0 ; i < text.length ; i++ ) {
//     if ( text.slice ( i , i + 6 ) === "second" ) {
//         text = text.slice (0,i) + "first" + text.slice (i+6);
//     } 
// }

// console.log(text);


// var text = "In February 2024, Khan was mentioned as a possible candidate to be Chancellor of the University of Oxford, following the announcement of the retirement of the incumbent, Chris Patten.[114] On 18 August 2024, Khan's advisor Zulfi Bukhari confirmed that the nomination papers were submitted on behalf of Khan.[115][116]";

// for ( var i = 0 ; i < text.length ; i++ ) {
//     if ( text.slice ( i , i + 4 ) === "Khan" ) {
//         text = text.slice ( 0 , i ) + "Imran khan" + text.slice ( i + 4 );
//     }
// }

// console.log(text);


// IndexOff Method:

// var str = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be";

// var indexNum = str.indexOf("World War II");

// var start = str.slice ( 0 , 49 );

// var replace = "The Second World War";

// var remaining = str.slice(indexNum + 12);

// console.log(start + replace + remaining);


// var str = "Wikipedia was launched on January 15, 2001 as a single English-language edition at www.wikipedia.com, and was announced by Sanger on the Nupedia mailing list. The name originated from a blend of the words wiki and encyclopedia. Its integral policy of neutral point-of-view was codified in its first few months.";

// var indexNum = str.indexOf("January");

// var start = str.slice ( 0 , 26 );

// var replace = "December";

// var remaining = str.slice ( indexNum + 7 );

// console.log(start + replace + remaining);


// Replace Method:

// var text = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be World War II";

// console.log( text.replace("World War II","The Second World War") );


// ReplaceAll Method:

// var text = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be World War II";

// console.log( text.replaceAll("World War II","The Second World War") );


// var text = "This 2022 photograph shows the temple of Isis from the Philae temple complex in its current location.";

// console.log(text.replaceAll("Isis","Asia"));


// STARTS WITH:

// var str = `hello world`;

// var getChar = str.startsWith(`h`);

// console.log(getChar);


// ENDS WITH:

// var str = `hello world`;

// var getChar = str.endsWith(`d`);

// console.log(getChar);    


// INCLUDES:

// var str = `hello world`;

// var getChar = str.includes(`llo`);

// console.log(getChar);


// SPLIT:

// var str = "hello world";

// var getChar = str.split();
// var getChar = str.split("");
// var getChar = str.split(" ");

// console.log(getChar);


// JOIN METHOD:

// var arr = [10,20,30,40,50];

// var data = arr.join(" ");
// var data = arr.join("      ");
// var data = arr.join("+");
// var data = arr.join("_");

// console.log(data);




// Chap # 26 Rounding numbers:


// var number = +prompt("Enter a decimal number:");

// console.log(Math.round(number));

// console.log(Math.ceil(number));

// console.log(Math.floor(number));



// Chap # 27 Generating random numbers:


// var randomNum = Math.random();

// var randomNum = Math.random() * 6;

// console.log(randomNum);

// console.log(Math.round(randomNum));



// Chap # 28 Converting strings to integers and decimals:


// var age = prompt("Enter your age:");

// console.log(age);
// console.log(Number(age));



// Chap # 29 Converting strings to numbers, numbers to strings:


// var numAsNum = 1234;

// var numAsStr = numAsNum.toString();

// console.log(numAsNum);

// console.log(numAsStr);



// Chap # 30 Controlling the length of decimals:


// var randomNum = Math.random() * 10;

// console.log(randomNum.toFixed());



// Chap 31 Getting the current date and time:


// var date = new Date();

// console.log(date);

// console.log(typeof date);

// console.log(date.slice(0,10));

// console.log(date.toString().slice(0,15));



// var date = new Date();

// var daysArr = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
// ];

// console.log(daysArr[date.getDay()]);


// var date = new Date();

// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());


// var date = new Date();

// console.log(date.getTime());


// AGE CALCULATOR PROGRAM:

// var userBirthYear = +prompt("Enter your birth year");
// var currentYear = new Date();
// var userAge = currentYear.getFullYear() - userBirthYear

// console.log(`Your age is ${userAge}`);


// var date = new Date("25 Feb 2014 15:35:40");

// console.log(date);


// var firstRamadan = new Date("March 1, 2025").getTime();

// var current = new Date().getTime();

// var diff = firstRamadan - current;

// var month = diff / (1000 * 60 * 60 * 24 * 30);

// console.log(Math.round(month));

// console.log(`First Ramadan:  ${firstRamadan}`);

// console.log(`Current:  ${current}`);

// console.log(`Left: ${timeLeft}`);




// ------------------------------------------------------------------------------------------------------>