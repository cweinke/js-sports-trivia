
// import the utility functions "decodeHtml" and "shuffle"
//import { resolve } from 'path';
import { decodeHtml, shuffle } from './utils.js' 

// get the elements from the DOM
const questionElement = document.querySelector('#question')
const answersElement = document.querySelector('#answers')
const nextQuestionElement = document.querySelector('#nextQuestion')

// IIFE (so we can use async/await)
;(async () => {

	// todo: create your "getNextQuestion" function
	
	const getNextQuestion = async () => {
		const response = await fetch('https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple')
		const json = await response.json()
		const { question, correct_answer: correct, incorrect_answers: incorrect } = json.results[0]
		const answers = shuffle([ ...incorrect, correct ])
		return { question, answers, correct }
		
	}

	// todo: create your "renderQuestion" function
	const renderQuestion = ({ question, answers, correct }) => {
		questionElement.innerHTML = ''
		answersElement.innerHTML = ''
		questionElement.textContent = decodeHtml(question)
		answers.forEach((answers) => {
	
			const answerButton = document.createElement("button")
			answerButton.innerHTML = decodeHtml(answers)
			answersElement.appendChild(answerButton)
			
			answerButton.addEventListener("click", () => {
				if (answers === correct) {
				button.classList.add('correct')
				answersElement.querySelectorAll('button').forEach(b => b.disabled = true)
				alert('Correct!')
				return
			}

				button.disabled = true
				alert('Incorrect!')});
		})
		
	 }
	
		
	// todo: add the event listener to the "nextQuestion" button
	const next = async () => {
		
		renderQuestion(await getNextQuestion())
		nextQuestionElement.disabled = true
		setTimeout(() => nextQuestionElement.disabled = false, 10000)
	}
	 const button = document.querySelector('#nextQuestion')
	button.addEventListener("click", (next));

})()

// mimic a click on the "nextQuestion" button to show the first question
nextQuestionElement.click()
