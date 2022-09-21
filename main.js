const resetBtn = document.getElementById('resetBtn');
const nextBtn = document.getElementById('nextBtn');
const headerText = document.getElementById('headerText');
const fillerText = document.getElementById('fillerText');

class pageLayout {
    constructor(){
        this.pageSet = [];
        this.symbols = [
            //   0     1    2    3   4    5    6    7    8    9  
                '@', '!', '#', '^', '<', '<', '$',  '}', '{',  '&'
            ];
        this.currPage = 0;
    }
    
} 

let pageLayouts = new pageLayout;

class page {
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
    pageLayouts.currPage++;
    updatePage();
})

resetBtn.addEventListener('click', () => {
    if(pageLayouts.currPage != 0)
        pageLayouts.currPage = 0;
    else
        pageLayouts.currPage = 1;

    updatePage();
})

function updatePage(){
    headerText.innerHTML = pageLayouts.pageSet[pageLayouts.currPage].headText;
    fillerText.innerHTML = pageLayouts.pageSet[pageLayouts.currPage].fillText;
    resetBtn.textContent = pageLayouts.pageSet[pageLayouts.currPage].resetText;
    nextBtn.textContent = pageLayouts.pageSet[pageLayouts.currPage].nextText;
    
    if(pageLayouts.pageSet[pageLayouts.currPage].nextBool)
        nextBtn.style.display = 'block';
    else
        nextBtn.style.display = 'none';

    if(pageLayouts.pageSet[pageLayouts.currPage].headBool)
        headerText.style.display = 'block';
    else
        headerText.style.display = 'none';

    if(pageLayouts.pageSet[pageLayouts.currPage].fillBool)
        fillerText.style.display = 'block';
    else
        fillerText.style.display = 'none';
}

let page0 = new page (
    'Choose a number from 1 to 99, hit GO to continue', 
    true,
    'Your mind is about to be blown',
    true,
    '',
    false,
    'GO'
)

let page1 = new page (
    'ADD the two digits together', 
    true,
    'EX: 16 is 1 + 6 = 7',
    true,
    'NEXT',
    true,
    'Reset'
)

let page2 = new page (
    'SUBTRACT your new number from your original number', 
    true,
    'EX: 16 - 7 = 9',
    true,
    'NEXT',
    true,
    'Reset'
)

let page3 = new page (
    generateSymbols(),   
    true,
    'Scroll to find your number <br> Once you found your number hit NEXT',
    true,
    'NEXT',
    true,
    'Reset'
)
let page4 = new page (
    'IS THIS YOUR SYMBOL <br> <br> <br> &', 
    true,
    'Haha bet your mind is blown',
    true,
    'NEXT',
    false,
    'Reset'
)

pageLayouts.pageSet.push(page0);
pageLayouts.pageSet.push(page1);
pageLayouts.pageSet.push(page2);
pageLayouts.pageSet.push(page3);
pageLayouts.pageSet.push(page4);
updatePage();


function generateSymbols(){
    let symbolStr = '';
    let symIndex = 0;
    for(let index = 0; index < 100; index++){
        symbolStr += index+': '+pageLayouts.symbols[symIndex]+'<br>';
        symIndex++;
        if(symIndex >= 10)
            symIndex = 0;
    }
    return symbolStr;
}