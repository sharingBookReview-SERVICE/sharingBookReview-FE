//import 부분
import React from "react";
import styled from "styled-components"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const Comment = (props) =>{
  //dispatch와 변수들

    return(
        <React.Fragment>
            <CommentBox>
                <CommentTitleBox>
                    <UserName>닉네임닉네임</UserName>
                    <CreatedAt>2021.07.24.21:04</CreatedAt>
                </CommentTitleBox>
                <Content>저도 이 책 재밌게 읽었어요!</Content>
                <LikeBox>
                    <FavoriteBorderIcon style={{fontSize:"18px"}}/>
                    <LikeText>좋아요 0개</LikeText>
                </LikeBox>
            </CommentBox>
        </React.Fragment>
    )
}

const CommentBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;
  margin-left:24px;
`

const CommentTitleBox = styled.div`
display:flex;
align-items:center;
`

const UserName = styled.p`
font-size:14px;
font-weight:bold;
margin-right:8px;
`

const CreatedAt = styled.p`
font-size:10px;
color:#9e9e9e;
opacity:0.5;
`

const Content = styled.p`
font-size:14px;
`

const LikeBox = styled.div`
display:flex;
align-items:center;
`

const LikeText = styled.p`
font-size:14px;
margin-left:8px;
`



export default Comment;
