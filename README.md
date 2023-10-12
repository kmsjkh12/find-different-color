# 넘블 챌린지(다른 색깔 찾기 게임)

넘블 프로젝트 클론하기 챌린지 \
예시 사이트 : https://numble-react.vercel.app/  \
구현기간 : 2일

## 구현영상
![color](https://github.com/kmsjkh12/find-different-color/assets/121033327/bf193bb9-c482-43c2-bd2e-c1c87c48b516)

## 규칙
![image](https://github.com/kmsjkh12/find-different-color/assets/121033327/6e35d21a-01e2-4ca6-9826-a0a56433f2ee)
![image](https://github.com/kmsjkh12/find-different-color/assets/121033327/36641f97-75d3-4811-8ef9-dc2920b24dff)
![image](https://github.com/kmsjkh12/find-different-color/assets/121033327/be66f565-3a70-406d-a9e9-85a5f019ba96)



## 기술 
- JavaScript
- React (CRA)
- styled-components

## 기능
- 색 랜덤 뽑기 기능
- 게임 보드 기능
- 제한 시간 기능
- 보드 클릭 기능

## 📌어려웠던점
게임 보드를 어떻게 보여줄지 고민을 많이 했다. 
````
게임 보드판 
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
````

그리고 색깔을 스테이지가 올라갈수록 정답 보드가 오답보드와 차이가 많이 안나야하는데 어떻게 구현할지 고민을 많이 했다. 
````
 const ramdomColor  = useCallback(()=>{
        let Red = Math.round((Math.random() * 255));   //red 0 to 255
        let Green= Math.round((Math.random() * 255));  //green 0 to 255
        let Blue = Math.round((Math.random() * 255));  //blue 0 to 255
        
        let AnswerRed = Red> 122 ? Red-(24-stage) : Red-(24-stage)
        let AnswerGreen =Green> 122 ? Green-(24-stage) : Green-(24-stage)
        let AnswerBlue =Blue> 122 ? Blue-(24-stage) : Blue-(24-stage)

        return [`rgb(${Red}, ${Green}, ${Blue})`, `rgb(${AnswerRed}, ${AnswerGreen}, ${AnswerBlue})`]
    },[])

````


## 추후 개선점 
백엔드를 연결해서 진짜 게임처럼 닉네임을 입력해서 유저들끼리 랭킹 시스템을 도입하면 재밌을거 같다. 
숫자에 애니메이션을 입히면 더 완성도있는 프로젝트가 될 것 같다.


## 실행
클론 후 npm start
