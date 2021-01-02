const sentences=[
    'I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cannot handle me at my worst, then you sure as hell do not deserve me at my best',
    'Be yourself, everyone else is already taken',
    'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.',
    'A room without books is like a body without a soul.',
    'Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.',
    'You gotta dance like there is nobody watching,Love like you will never be hurt,Sing like there is nobody listening,And live like it is heaven on earth',
    'No one can make you feel inferior without your consent.',
    'If you tell the truth, you do not have to remember anything.',
    'A friend is someone who knows all about you and still loves you.'
];

let words = [];
let wordIndex = 0;
let startTime = Date.now();
const sentenceElement = document.getElementById('sentence');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

document.getElementById('start').addEventListener('click',()=>{
    const sentenceIndex =Math.floor(Math.random()* sentences.length);
    const sentence = sentences[sentenceIndex];
    words= sentence.split(' ');
    wordIndex=0;

    const spanWords = words.map(function(word){
        return `<span>${word}</span>`
    });
    sentenceElement.innerHTML = spanWords.join('');
    sentenceElement.childNodes[0].className = 'highlight';
    messageElement.innerHTML='';

    typedValueElement.value = '';
    typedValueElement.focus();
    startTime = new Date().getTime();
});

typedValueElement.addEventListener('input',()=>{
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;
    if(typedValue === currentWord && wordIndex === words.length-1){
        // end of sentence
        // show success message
        const elapsedTime = new Date().getTime() - startTime;
        const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
        messageElement.innerText = message;
    }else if(typedValue.endsWith(' ') && typedValue.trim() === currentWord){
        // end of a word
        typedValueElement.value = '';
        sentenceElement.childNodes[wordIndex].className='';
        wordIndex+=1;
    
        // for( const wordElement of sentenceElement.childNodes){
        //     wordElement.className = '';
        // }
        console.log(wordIndex);
        sentenceElement.childNodes[wordIndex].className = 'highlight';
        console.log(sentenceElement.childNodes[wordIndex].className);
        console.log(sentenceElement.childNodes[wordIndex]);
    }else if(currentWord.startsWith(typedValue)){
        // currently correct
        typedValueElement.className = '';
    }else{
        // wrong word
        typedValueElement.className = "error";
    }
});

