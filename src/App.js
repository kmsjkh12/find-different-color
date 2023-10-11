import React,{ useCallback, useState,useEffect } from 'react';
import AnswerBlock from './components/AnswerBlock';
import Board from './components/Board';
import Header from './components/Header';
function App() {
  const [stage, setStage] = useState(1);
  const [time, setTime ] = useState(15);
  const [score, setScore] = useState(0);
  
  const onClickAnswer = useCallback(()=>{
    setStage(stage+1);
    setTime(15);
    setScore(Math.pow(stage,3) * time);
  },[stage,time,score])


  const onClickWrong = useCallback(()=>{
    if(time>3){
      setTime(time-3);
    }
    else{
      setTime(0)
    }
  },[time])

  return (
      <div>
        <Header stage={stage} score={score} time={time}> </Header>
        <Board onClickAnswer={onClickAnswer} onClickWrong={onClickWrong} stage={stage} />
      </div>
    
  );
}

export default App;
