import React,{useState, useEffect, useCallback,useMemo} from 'react';
import AnswerBlock from './AnswerBlock';
import WrongBlock from './WrongBlock';
import { styled } from 'styled-components';
function Board(props){
    const {onClickAnswer, onClickWrong, stage ,start} =props;
    const [index, setIndex] =useState(2);

    //여기서 색상을 만들어줘야함
    const PAGE_SIZE = 360;
    //usememo를 통해 stage의 값이 변해도 다른 값들은 변하지 않게 조정
    const BlockNumber = useMemo(()=>Math.pow(Math.round((stage + 0.5)/ 2) + 1,2),[stage]);   //블럭 갯수 3 9 16 숫자 제곱
    const AnswerNumber = useMemo(()=>Math.floor(Math.random() * BlockNumber),[stage]);
    const BlockSize = useMemo(()=>parseInt(PAGE_SIZE) /(parseInt(index) )-4 ,[BlockNumber]); 

    const ramdomColor  = useCallback(()=>{
        let Red = Math.round((Math.random() * 255));   //red 0 to 255
        let Green= Math.round((Math.random() * 255));  //green 0 to 255
        let Blue = Math.round((Math.random() * 255));  //blue 0 to 255
        
        let AnswerRed = Red> 122 ? Red-(24-stage) : Red-(24-stage)
        let AnswerGreen =Green> 122 ? Green-(24-stage) : Green-(24-stage)
        let AnswerBlue =Blue> 122 ? Blue-(24-stage) : Blue-(24-stage)

        return [`rgb(${Red}, ${Green}, ${Blue})`, `rgb(${AnswerRed}, ${AnswerGreen}, ${AnswerBlue})`]
    },[])

    const [baseColors, answerColors] =useMemo(()=>
    ramdomColor(),
    [stage ,start])

    
  
    // 홀수마다 블럭 길이가 1자리씩 올라감 
    useEffect(()=>{
        setIndex(index+1);
}   ,[BlockNumber])
    return(
    <BoardWrapper>
        {[...Array(parseInt(BlockNumber))].map((n,index)=>{
            if(index === AnswerNumber){
                return(
                <AnswerBlock key={index} BlockSize={BlockSize} onClickAnswer={onClickAnswer} color={answerColors}/>
                )
            }
            else {
                return(
                    <WrongBlock key={index} BlockSize={BlockSize} onClickWrong={onClickWrong} color={baseColors}/>
                )
            }
        })}
    </BoardWrapper>
)}
const BoardWrapper = styled.div`
    width:360px;
    height:360px;
    display:flex;
    flex-wrap: wrap;
    margin:auto;
`

export default Board;

