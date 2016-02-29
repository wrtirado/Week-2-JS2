var userWord = prompt("Please, enter a word. Any word will do!")

alert ("You entered " + userWord + ", which contains " + userWord['length']
+ " letters." + "\nThe third character is " + userWord.charAt(2)
+ ". \nThe word in lowercase is " + userWord.toLowerCase()
+ ", and the word in uppercase is " + userWord.toUpperCase() + ". \nExample: I have wanted a "
+ userWord + " since I was a little boy. \nSubword: " + userWord.charAt(1) + userWord.charAt(2) + userWord.charAt(3) + "\nCOMPLETE" )
