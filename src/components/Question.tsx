import {useState} from 'react'
import {questions as questionsData} from '../data/question'
import {Options} from './Options'
import {Option} from '../declarations/types'

export const Question = () => {
  
  const TOTAL_QUESTIONS = questionsData.length
  const MAX_INDEX = TOTAL_QUESTIONS - 1 
  const [questions, setQuestions] = useState(questionsData[0])
  const [currentQuestion, setcurrentQuestion] = useState(1)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const [correctResponse, setCorrectResponse] = useState(0)
  console.log(questionsData.length)

  const responseChoose = (option:Option) => {
    setSelectedOption(option)
    console.log(selectedOption)
    
  }

  const sendResponse = () => {
    const index = questionsData.findIndex(
      (currentQuestion) => currentQuestion.id === questions.id
    )

    if (selectedOption?.correct) {
      setCorrectResponse((prevCorrectResponse) => prevCorrectResponse + 1)
    }

    if (index === MAX_INDEX) {
      setcurrentQuestion(currentQuestion + 1) 
      alert(`Correctas: ${correctResponse + (selectedOption?.correct ? 1 : 0)} Incorrectas: ${TOTAL_QUESTIONS - (correctResponse + (selectedOption?.correct ? 1 : 0))}`)
    } else {
      setQuestions(questionsData[index + 1])
      setcurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
    }
  }

  return(
    <>
      <h2>Question {currentQuestion} of {TOTAL_QUESTIONS}</h2>
      <h1>Question</h1>
      <p>{questions.question}</p>
      <Options options = {questions.options} chooseValue = {responseChoose} selectedOption={selectedOption}/>
      <button onClick={sendResponse}>Accept</button>
    </>
  )
}
