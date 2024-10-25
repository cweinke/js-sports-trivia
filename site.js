Access-Control-Allow-Origin: *
// import the utility functions "decodeHtml" and "shuffle"
import { resolve } from 'path';
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
		
	console.log(await getNextQuestion())

	// todo: create your "renderQuestion" function

	// todo: add the event listener to the "nextQuestion" button

})()

// mimic a click on the "nextQuestion" button to show the first question
nextQuestionElement.click()
