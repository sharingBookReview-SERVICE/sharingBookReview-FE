//import 부분
import React from "react";
import styled from "styled-components"

const SelectBookCard = (props) =>{

    return(
        <BookInfoBox>
            <BookImg/>
            <BookDescBox>
                <BookTitle>나는 금리로 경제를 읽는다</BookTitle>
                <BookWriter>김의경 저</BookWriter>
            </BookDescBox>
        </BookInfoBox>
    )
}


const BookInfoBox = styled.div`
width: 100%;
height: 112px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: 12px;
padding: 16px;
border-radius: 12px;
border: solid 1px #eeeeee;
box-sizing: border-box;
`

const BookImg = styled.div`
width:60px;
height:80px;
border-radius:4px;
background-color: #c4c4c4;
`

const BookDescBox = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing:border-box;
`

const BookTitle = styled.p`
  color:#1168d7;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.28px;
  line-height: 1.43;
  margin:0px;
`

const BookWriter = styled.p`
font-size: 14px;
line-height: 1.43;
letter-spacing: -0.28px;
text-align: left;
color:#c7c7c7;
line-height: 1.43;
margin:0px;
`


export default SelectBookCard;