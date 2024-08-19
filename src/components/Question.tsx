import {useState} from 'react'
import {questions as questionsData} from '../data/question'
import {Options} from './Options'

export const Question = () => {

  const [questions] = useState(questionsData)
  console.log(questions)
  return(
    <>
      <h1>Question</h1>
      {
        questions.map((question) => {
          return(
            <div>
              <p>{question.question}</p>
              <Options options = {question.options}/>
            </div>
          )
        })
      }
    </>
  )
}
