const resetBtn = document.getElementById('resetBtn');
const nextBtn = document.getElementById('nextBtn');
const headerText = document.getElementById('headerText');
const fillerText = document.getElementById('fillerText');

const pageLayout = {
        pageSet : [],
        symbols : [
            //   0     1    2    3   4    5    6    7    8    9  
                '@', '!', '#', '^', '<', '<', '$',  '}', '{',  '&'
            ],
        currPage : 0,
}

class Page {
    constructor(head, headBool, fill, fillBool, nextText, nextBool, resetText){
        this.headText = head;
        this.fillText = fill;
        this.nextText = nextText;
        this.resetText = resetText;
        this.nextBool = nextBool;
        this.headBool = headBool;
        this.fillBool = fillBool;
    }
}

nextBtn.addEventListener('click', () => {
    pageLayout.currPage++;
    updatePage();
})

resetBtn.addEventListener('click', () => {
    if(pageLayout.currPage != 0)
        pageLayout.currPage = 0;
    else
        pageLayout.currPage = 1;

    updatePage();
})

function updatePage(){
    headerText.innerHTML = pageLayout.pageSet[pageLayout.currPage].headText;
    fillerText.innerHTML = pageLayout.pageSet[pageLayout.currPage].fillText;
    resetBtn.textContent = pageLayout.pageSet[pageLayout.currPage].resetText;
    nextBtn.textContent = pageLayout.pageSet[pageLayout.currPage].nextText;
    
    if(pageLayout.pageSet[pageLayout.currPage].nextBool)
        nextBtn.style.display = 'block';
    else
        nextBtn.style.display = 'none';

    if(pageLayout.pageSet[pageLayout.currPage].headBool)
        headerText.style.display = 'block';
    else
        headerText.style.display = 'none';

    if(pageLayout.pageSet[pageLayout.currPage].fillBool)
        fillerText.style.display = 'block';
    else
        fillerText.style.display = 'none';
}

let page0 = new Page (
    'Choose a number from 1 to 99, hit GO to continue', 
    true,
    'Your mind is about to be blown',
    true,
    '',
    false,
    'GO'
)

let page1 = new Page (
    'ADD the two digits together', 
    true,
    'EX: 16 is 1 + 6 = 7',
    true,
    'NEXT',
    true,
    'Reset'
)

let page2 = new Page (
    'SUBTRACT your new number from your original number', 
    true,
    'EX: 16 - 7 = 9',
    true,
    'NEXT',
    true,
    'Reset'
)

let page3 = new Page (
    generateSymbols(),   
    true,
    'Scroll to find your number <br> Once you found your number hit NEXT',
    true,
    'NEXT',
    true,
    'Reset'
)
let page4 = new Page (
    'IS THIS YOUR SYMBOL <br> <br> <br> &', 
    true,
    'Haha bet your mind is blown',
    true,
    'NEXT',
    false,
    'Reset'
)

pageLayout.pageSet.push(page0);
pageLayout.pageSet.push(page1);
pageLayout.pageSet.push(page2);
pageLayout.pageSet.push(page3);
pageLayout.pageSet.push(page4);
updatePage();


function generateSymbols(){
    let symbolStr = '';
    let symIndex = 0;
    for(let index = 0; index < 100; index++){
        symbolStr += index+': '+pageLayout.symbols[symIndex]+'<br>';
        symIndex++;
        if(symIndex >= 10)
            symIndex = 0;
    }
    return symbolStr;
}