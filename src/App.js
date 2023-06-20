import React, { useState } from 'react'
import Questions from './components/Questions'
import Home from './components/Home'

function App() {
  const[start, setStart] = useState(false)
  const [score, setScore] = React.useState(0)
  const [showAnswers, setShowAnswers] = React.useState(false)
  const [questions, setQuestions] = React.useState([])
  const [allComplete, setAllComplete] = React.useState(false)

  function playAgain()
    {
        setShowStart(true)
        setShowAnswers(false)
        setAllComplete(false)
    }
    
    function checkAnswers()
    {
        setShowAnswers(true)
    }
    
    function selectAnswer(event,quest_id,option_id)
    {
        setQuestions(function(prev) {
            return(questions.map(function(quest,qid) {
                if(quest_id===qid){
                    return({...quest, selected_answer:option_id})
                }else{
                    return(quest)
                }
                
            }))
        })
    }


  React.useEffect(() => {
        
    if(showStart ===false) {
        
    fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(data => setQuestions(data.results.map(function(question) {
            return({question:question.question,
                    options:question.incorrect_answers.concat([question.correct_answer]).map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value),
                    selected_answer:undefined,
                    correct_answer:question.correct_answer})
        })))
        }
}, [start])

  React.useEffect(() => { 
    setAllComplete(questions.every((quest) => typeof quest.selected_answer !== 'undefined'))
}, [questions])

  const quests = questions.map((question,index) => {
    return(<Questions
                key={index}
                question={question}
                showAnswers={showAnswers}
                selectAnswer={selectAnswer}
                id={index}
            />)
})

  return (
    <>
    {start ? <Questions question={question.results}/> : <Home handleClick = {() => setStart(true)}/>}
    
    </>
    
  );
}

export default App;
