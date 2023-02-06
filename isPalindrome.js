document.querySelector('#bttn-send').addEventListener('click', () => {
    submitForm()
})


document.querySelector('#input-word').addEventListener('keypress', (event) =>{
    if(event.key ==='Enter') {
        submitForm()
    }
})


function submitForm() {
    let word = document.querySelector('#input-word').value
    isPalindrome(word)
    document.querySelector('#input-word').value = ''
}

function isPalindrome(word){
    
    word = word.toUpperCase()
    let wordSeparate = word.split('')
    let invertWord = wordSeparate.reverse()
    invertWord = invertWord.join('')

    let msg = document.querySelector('#msg')
    if( word == invertWord){
        msg.innerHTML = `A palavra <span>${word}</span> é um palíndromo!`
    } else {
        msg.innerHTML = `A palavra <span>${word}</span> não é um palíndromo!`
    }
}