## Pseudocode

#### &emsp; Each number after steps should be a multiple of 9
#### &emsp; IE 34 = 3 + 4 = 7   34-7 = 27, 27 is a multip1le of 9

### Intialize 

#### resetButton
##### &emsp; Fixed on the bottom right
##### &emsp; Brings the user back to the first page
##### &emsp; Turns from GO to reset after first push
##### &emsp; Changes page number to 0, acts as reset
##### &emsp; Boolean state for pushed to change the text on the button from Go to reset

#### pageState
##### &emsp; Will be an object holding the fillerText, headerText, nextButton, resetButton
##### &emsp; Will keep track of what page the user is on
##### &emsp; Maybe a number so that page 0 will have a different state than page 1
##### &emsp; An array each holding a page that has the content filled out 

#### pageNumber
##### &emsp; An integer that selects the correct page from pageState
##### &emsp; Content on page 0 should be start 

#### synbolArray
##### &emsp; An object holding an integer and it's character pair
##### &emsp; Will be randomize but each multiple of 9 must have the same symbol
##### &emsp; A loop will assign the symbolArray a character pair
##### &emsp; When generating the numbers use % the remainder and use a switch case to assign the symbol to the number
##### &emsp; Will need a scrollable function when displaying the 

#### fillerText 
##### &emsp; Will change the text depending on the page state
##### &emsp; Minor clarification for extra information
##### &emsp; Array holding the string of text and page number will correspond to the index
##### &emsp; IE Page 0 will have when you have your number click next

#### headerText
##### &emsp; Will be a string array and change the content 
##### &emsp; IE First page will be "Think of a number between 01 and 99"

#### nextButton
##### &emsp; Will prompt the user to click and progress through the pages
##### &emsp; an addEventListener to keep track of user input
##### &emsp; Changes the page number by ++;
###### &emsp;

### HTML Elements
#### A P element that will have text change to provide sample math, tied in with fillerText
#### A Header element that prompts the steps for the user, tied in with headerText
#### nextButton element that is shown depending on pageNumber, not shown on page 0 and last page
#### Reset button will be fixed to the bottom right or left of the image. 

###### &emsp; 

### Functions: 
#### changePage
##### &emsp; the nextButton has an eventListener to it that increases the page number by +1


#### updatePage
##### &emsp; Changes the element.textContent of the various HTML elements to match the current page's value
##### &emsp; Changes the buttonText to fit the correct string
##### &emsp; Changes the helper text in the P element
##### &emsp; Show the button if it's the correct page, not shown on page 0 and page 5?


#### generateSymbols
##### &emsp; Symbols will be in a array 10 different symbols, 0 - 9
##### &emsp; if the number is %9 === 0 then assign it the specific character
##### &emsp; Loop to 100 to create the pairs and add it the number pair 
##### &emsp; Will be called at the intialized at the start of the page
##### &emsp; Symbols will be hard coded but the starting index will be randomized


#### reset()
##### &emsp; will reset the page number back to 0

