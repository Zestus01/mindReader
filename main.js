const resetBtn = document.getElementById('resetBtn');
const nextBtn = document.getElementById('nextBtn');
const headerText = document.getElementById('headerText');
const fillerText = document.getElementById('fillerText');

let pageSet = [];

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

let currPage = 0;

nextBtn.addEventListener('click', () => {
    currPage++;
    updatePage();
})

resetBtn.addEventListener('click', () => {
    if(currPage != 0){
        currPage = 0;
        resetBtn.textContent = 'GO';
    }
    else{
        currPage = 1;
        resetBtn.textContent = 'RESET';
    }
    updatePage();
})

function updatePage(){
    headerText.innerHTML = pageSet[currPage].headText;
    fillerText.innerHTML = pageSet[currPage].fillText;
    resetBtn.textContent = pageSet[currPage].resetText;
    nextBtn.textContent = pageSet[currPage].nextText;
    
    if(pageSet[currPage].nextBool)
        nextBtn.style.display = 'block';
    else
        nextBtn.style.display = 'none';

    if(pageSet[currPage].headBool)
        headerText.style.display = 'block';
    else
        headerText.style.display = 'none';

    if(pageSet[currPage].fillBool)
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
    'generateSyblmols', 
    true,
    'Scroll to find your number <br> Once you found your number hit NEXT',
    true,
    'NEXT',
    true,
    'Reset'
)
let page4 = new page (
    'IS THIS YOUR SYMBOL <br> &', 
    true,
    'Haha bet your mind is blown',
    true,
    'NEXT',
    false,
    'Reset'
)

pageSet.push(page0);
pageSet.push(page1);
pageSet.push(page2);
pageSet.push(page3);
pageSet.push(page4);
updatePage();