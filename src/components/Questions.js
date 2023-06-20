import React, { useState } from "react";
import he from "he"

function Questions(props) {
  const [formData, setFormData] = useState([])

      function checkAnswer() {
        
      }
      

      const mapedQuestions = props.question.map((ques)=> {

            const incAnswers = ques.incorrect_answers
            const Answers = [...incAnswers, ques.correct_answer]
            
            let shuffled = Answers
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)

            function handleChange(event) {
        const {name, value, checked} = event.target
        setFormData(prevData => {
          return{
            ...prevData,
            [name] : value

          }
        })
      }

            return(
                
                  <>
                  <div className="ques">
                    <p className="question">Q. {he.decode(ques.question)}</p>
              
                    <div className="button">
                      <input 
                        type="radio" 
                        id="a25" 
                        name="check-substitution-2"
                        value={shuffled[0]}
                        onChange={handleChange}
                        

                         />
                      <label className="btn btn-default" htmlFor="a25">
                        {shuffled[0]}
                      </label>
                    </div>
                    <div className="button">
                      <input 
                        type="radio" 
                        id="a50" 
                        name="check-substitution-2"
                        value={shuffled[1]}
                        onChange={handleChange}
                        

                         />
                      <label className="btn btn-default" htmlFor="a50">
                        {shuffled[1]}
                      </label>
                    </div>
                    <div className="button">
                      <input 
                        type="radio" 
                        id="a75" 
                        name="check-substitution-2"
                        value={shuffled[2]}
                        onChange={handleChange}
                        

                         />
                      <label className="btn btn-default" htmlFor="a75">
                        {shuffled[2]}
                      </label>
                    </div>
                    <div className="button">
                      <input 
                        type="radio" 
                        id="a75" 
                        name="check-substitution-2"
                        value={shuffled[3]}
                        onChange={handleChange}
                        

                         />
                      <label className="btn btn-default" htmlFor="a75">
                      {shuffled[3]}
                      </label>
                    </div>
                    <br />
                    </div>
                    <hr style={{width : "80%",color:"gray",marginLeft: "50px"}}/>
                    </>

                  )
    })
  

  return (
    <div className="container">
      
      <form>

      {mapedQuestions}

      </form>

      <button className="start-btn btn-6 check" onClick={checkAnswer}>Check Answers</button>

    </div>
   
  );
}

export default Questions;
