import React from "react"
import { styled } from "styled-components"
function AnswerBlock(props){
    const {BlockSize,onClickAnswer,color} =props;
    return(
        <Block blockSize={BlockSize} onClick={onClickAnswer} color={color}>
        </Block>
    )

}

const Block = styled.div`
    width: ${(props) => props.blockSize  }px;
    height: ${(props) => props.blockSize }px;
   background-color: ${(props) => props.color };
    margin:2px;
    border-radius:5px;
`
export default AnswerBlock;