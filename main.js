const resetBtn = document.getElementById('resetBtn');
const nextBtn = document.getElementById('nextBtn');
const headerText = document.getElementById('headerText');
const fillerText = document.getElementById('fillerText');
const backBtn = document.getElementById('backBtn');
// Back button text is never going to change
backBtn.textContent = 'Back';

const pageLayout = {
        pageSet : [],
        symbols : [
                    '@',  //0
                    '!',  //1
                    '#',  //2
                    '^',  //3
                    '>',  //4
                    '<',  //5
                    '$',  //6
                    '}',  //7
                    '{',  //8
            ],
        currPage : 0,
        divisible: '',
}

// Page will hold the values for what is displayed on the screen
class Page {
    constructor(head, fill, nextText, nextBool = true, resetText = 'Reset', backBool = true,){
        this.headText = head;
        this.fillText = fill;
        this.nextText = nextText;
        this.resetText = resetText;
        this.nextBool = nextBool;
        this.backBool = backBool;
    }
}

// If the next button is clicked and increases the page count by 1
nextBtn.addEventListener('click', () => {
    pageLayout.currPage += 1;
    localStorage.setItem(pageLayout.currPage, )
    updatePage();
});

backBtn.addEventListener('click', () => {
    pageLayout.currPage -= 1;
    updatePage();
});


resetBtn.addEventListener('click', () => {
    pageLayout.currPage = (pageLayout.currPage != 0) ? 0 : 1;
    // Resets the number without refreshing the page
    if(pageLayout.currPage === 0){
        pageLayout.pageSet[3].headText = generateSymbols();
        pageLayout.pageSet[4].headText = 'IS THIS YOUR SYMBOL <br> <br> <br>' + pageLayout.divisible;
    }
    updatePage();
});

// Sets the page layout text and hides the next button.
function updatePage(){
    headerText.innerHTML = pageLayout.pageSet[pageLayout.currPage].headText;
    fillerText.innerHTML = pageLayout.pageSet[pageLayout.currPage].fillText;
    resetBtn.textContent = pageLayout.pageSet[pageLayout.currPage].resetText;
    nextBtn.textContent = pageLayout.pageSet[pageLayout.currPage].nextText;
    // Checks if the buttons should be displayed
    if(pageLayout.pageSet[pageLayout.currPage].nextBool)
        nextBtn.style.display = 'block';
    else
        nextBtn.style.display = 'none';

    if(pageLayout.pageSet[pageLayout.currPage].backBool)
        backBtn.style.display = 'block';
    else
        backBtn.style.display = 'none';

}


// Creating the pages and pushing it the page[]
let page0 = new Page (
    'Choose a number from 1 to 99, hit GO to continue',
    'Your mind is about to be blown',
    '',
    false,
    'GO',
    false
)
pageLayout.pageSet.push(page0);

let page1 = new Page (
    'ADD the two digits together',
    'EX: 16 is 1 + 6 = 7',
    'NEXT',
)
pageLayout.pageSet.push(page1);

let page2 = new Page (
    'SUBTRACT your new number from your original number',
    'EX: 16 - 7 = 9',
    'NEXT',
)
pageLayout.pageSet.push(page2);

let page3 = new Page (
    generateSymbols(),   
    'Scroll to find your number <br> Once you found your number hit NEXT',
    'NEXT',
)
pageLayout.pageSet.push(page3);

let page4 = new Page (
    'IS THIS YOUR SYMBOL <br> <br> <br>' + pageLayout.divisible,
    'Haha bet your mind is blown',
    'NEXT',
    false,
)
pageLayout.pageSet.push(page4);
// End of page Creation


updatePage();

// Generates the symbol array and returns the scrambles string
// Sets the divisible symbol to "read" the mind of the user
function generateSymbols(){
    let symbolStr = '';
    // The first symbol symIndex starts at is the divisible symbol
    let symIndex = Math.floor(Math.random() * 9);
    pageLayout.divisible = pageLayout.symbols[symIndex];
    // Populates the array of strings and gives a symbol to it
    for(let index = 0; index < 100; index++){
        symbolStr += index + ' : ' + pageLayout.symbols[symIndex] + '<br>';
        symIndex++;
        if(symIndex >= 9)
            symIndex = 0;
    }
    return symbolStr;
}