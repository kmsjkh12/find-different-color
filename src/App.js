import React,{ useCallback, useState,useEffect } from 'react';
import AnswerBlock from './components/AnswerBlock';
import Board from './components/Board';
import Timer from './components/Timer';
import Header from './components/Header';
import { styled } from 'styled-components';
function App() {
  const [stage, setStage] = useState(1);
  const [time, setTime ] = useState(15);
  const [score, setScore] = useState(0);
  const [start , setStart] = useState(false);
  const [timerBar, setTimerBar ] = useState(100);
  const defaultTimerBar = 100/15;   //6.66

  const onClickAnswer = useCallback(()=>{
    setStage(stage+1);
    setTime(15);
    setScore(Math.pow(stage,3) * time);
    setTimerBar(100);

  },[stage,time,score])

  const onClickWrong = useCallback(()=>{
    if(time>3){
      setTime(time-3);
      setTimerBar(timerBar-(defaultTimerBar*3));

    }
    else{
      setTime(0)
      setTimerBar(0);
    }
  },[time])

  useEffect(()=>{
    setStart(true);

    if(time ===0) {
      setStart(false);
    	alert("Time OVER!");
      setStage(1)
      setTime(15);
      setScore(0);
      setTimerBar(100)
    }
      const timer = setInterval(()=>{
      if(time>0){
      setTime((prev)=> prev-1)
      }
      setTimerBar(timerBar-defaultTimerBar);

    },1000)
    return ()=> clearInterval(timer);
  },[time])

  if(start){
  return (
      <div>
        <Header stage={stage} score={score} time={time} timerBar={timerBar}>
        </Header>
        <Board onClickAnswer={onClickAnswer} onClickWrong={onClickWrong} stage={stage} start={start}/>
        <Score>
          {score}
        </Score>
      </div>
  );
  }
}

const Score = styled.div`
  font-weight : bold; 
  font-size: 50px;
  text-align : center;
  margin : 20px auto 20px auto;
`
export default App;
