import React from "react"
import { styled } from "styled-components"

function Timer (props){
    const { timerBar ,time } =props;
    return(
        <TimerWrapper>
            <TimeTitle>{time}</TimeTitle>
            <TimerBar timerBar={timerBar}/>
        </TimerWrapper>
    )
}
export default Timer;

const TimerWrapper = styled.div`
    width:50%;
    height:30px;
    background:rgba(150,150,150,.5);
    margin:auto;
`
const TimeTitle= styled.div`
    position:absolute;
    top:13.6%;
    left:25%;
    font-size:20px;
    width:50%;
    height:30px;
    text-align:center;
    z-index:999;
    font-weight:bold;
    margin-top:5px;
`
const TimerBar = styled.div`
    width:100%;
    height:100%;
    background:rgb(15, 253, 154);
    box-shadow:0 2px 4px rgba(0,0,0,.1);
    transform-origin:left center;
    transition: all 500ms ease-out;
    transform: ${(props)=> `scaleX(${props.timerBar}%)`
    }
`
