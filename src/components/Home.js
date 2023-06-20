
export default function Home(props) {
    return (
        <div className="App">
        <h1>Quizzer</h1>
       <button className='start-btn btn-6' onClick={props.handleClick}>Start</button>
        </div>
    )
        
}