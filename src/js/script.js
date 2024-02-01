let advice = document.getElementById('advice')
let titleAdvice = document.getElementById('titulo-advice')
let btnAdvice = document.getElementById('button-advice')

async function apiAdviceGenerator(){
    response = await fetch('https://api.adviceslip.com/advice')
    result = await response.json()
    id = result.slip.id
    hint = result.slip.advice
    try{
        titleAdvice.innerHTML = `ADIVCE #${id}`
        advice.innerHTML = `${hint}`
    }catch(error){
        console.log(error)
    }
}

btnAdvice.addEventListener('click', () =>{
    apiAdviceGenerator()
})

apiAdviceGenerator()