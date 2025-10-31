import { jokes } from "./jokes.js"

const generate = document.getElementById('generate')
const joke = document.getElementById('joke')

generate.onclick = generateJoke

function generateJoke(){
    const selectedJoke = jokes[Math.floor(Math.random() * jokes.length)]
    joke.textContent = selectedJoke
}