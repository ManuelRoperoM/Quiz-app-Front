import {useState} from 'react'
import {questions as questionsData} from '../data/question'
import {Options} from './Options'
import {Option} from '../declarations/types'
import Icon from '@mdi/react'
import {mdiCheckBold} from '@mdi/js'
import {mdiCloseBox} from '@mdi/js'

export const Question = () => {
  
  const TOTAL_QUESTIONS = questionsData.length
  const MAX_INDEX = TOTAL_QUESTIONS - 1 
  const [questions, setQuestions] = useState(questionsData[0])
  const [currentQuestion, setcurrentQuestion] = useState(1)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const [correctResponse, setCorrectResponse] = useState(0)
  const [showResponse,setshowResponse] = useState(false)
  const [userResponses, setUserResponses] = useState<{id: number, question: string, response: Option | null, correctOption: Option[]}[]>([])

  const responseChoose = (option:Option) => {
    setSelectedOption(option)
  }

  const sendResponse = () => {
    const index = questionsData.findIndex(
      (currentQuestion) => currentQuestion.id === questions.id
    )

    if (selectedOption?.correct) {
      setCorrectResponse((prevCorrectResponse) => prevCorrectResponse + 1)
    }

    if (index === MAX_INDEX) {
      setshowResponse(true)
      return
    } else {
      const correctOption =  questions.options.filter((option) => option.correct)
      const userResponses = {
        id: questions.id,
        question: questions.question,
        response: selectedOption,
        correctOption: correctOption
      }
      setUserResponses((allResponses) => [...allResponses, userResponses])
      console.log(userResponses)
      setQuestions(questionsData[index + 1])
      setcurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
    }
  }

  return(
    <div className='question'>
      {showResponse 
        ?
        <div className='body_answers'>
          <h2>You Answered</h2>
          <h3>{correctResponse}/{TOTAL_QUESTIONS}</h3>
          <div className='answers'>
            <h3>You answers</h3>
            {
              userResponses.map((answer, index) => {
                return(
                  <div key={answer.id}>
                    {
                      answer.response?.correct
                        ?
                        <div className='container__response'>
                          <div className='response_question'>
                            <div className='user_response'>
                              <h3>{index +1} {answer.question}</h3>
                              <div className='box__icon'>
                                <Icon className='check__icon' path={mdiCheckBold} size={0.6} />
                              </div>
                            </div>
                          </div>
                          <div className='container__result'>
                            <div className='result'>
                              <p className='correct'>{answer.response.value}</p>
                            </div>
                          </div>
                        </div>
                        :
                        <div className='container__response'>
                          <div className='response_question'>
                            <div className='user_response'>
                              <h3>{index +1} {answer.question}</h3>
                              <Icon className='close__icon' path={mdiCloseBox} size={1} />
                            </div>
                          </div>
                          <div className='container__result'>
                            <div className='result'>
                              <p className='inCorrect'>{answer.response?.value}</p>
                              <p className='correct'>{answer.correctOption[0].value}</p>
                            </div>
                          </div>
                        </div>
                    }
                  </div>
                )
              })
            }
          </div>
          <button>back to home page</button>
          <button>Start new Quiz</button>
        </div>
        :
        <div>
          <h1>Question</h1>
          <p>{questions.question}</p>
          <Options options = {questions.options} chooseValue = {responseChoose} selectedOption={selectedOption}/>
          <button onClick={sendResponse}>Accept</button>
          <p>Question {currentQuestion} of {TOTAL_QUESTIONS}</p>
        </div>
      }

    </div>
  )
}
