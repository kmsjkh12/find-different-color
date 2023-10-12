import { useEffect, useState } from "react";
import Timer from "./Timer";
import { styled } from "styled-components";
function Header(props){

    const {stage, time, score ,timerBar} = props;

   
    useEffect(()=>{
        
    },[])
    return(
        <HeaderWrapper>
            <StageWrapper>
                STAGE 
                <span>{stage}</span>
            </StageWrapper>
           <Timer timerBar={timerBar} time={time}/>
        </HeaderWrapper>
    )

}


const HeaderWrapper= styled.div`
    margin-bottom : 40px;
    display : block;
`
const StageWrapper = styled.div`
    font-weight : bold;
    font-size : 50px;
    margin : 20px auto 20px auto;
    text-align : center;
`
const ScoreWrapper = styled.div`
    font-weight : bold;
    font-size: 50px;
    text-align : center;
    margin : 20px auto 20px auto;


`
export default Header;