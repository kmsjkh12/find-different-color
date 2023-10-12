import React from "react"
import { styled } from "styled-components"
function WrongBlock(props){
    const {onClickWrong, BlockSize,color} = props;
    return(
            <Block blockSize={BlockSize} onClick={onClickWrong} color={color}>
    
            </Block>
        )
    
    }
    
    const Block = styled.div`
        width: ${(props) => props.blockSize}px;
        height: ${(props) => props.blockSize  }px;
        background-color: ${(props)=>props.color};
        margin:2px;
        border-radius:5px;

    `
    


export default WrongBlock;