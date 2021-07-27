//import 부분
import React, { useState } from "react";
import styled from "styled-components";
import {history} from "../redux/configStore";

//마이 페이지
const MyProfile = (props) =>{

    return(
        <React.Fragment>
            <Container>
                <Background>
                    <ProfileBox>
                        <ImageBox>
                            <ProfileImg></ProfileImg>
                            <Name>닉네임</Name>
                            <Activity>작성한 리뷰 12개  |  작성한 댓글 9개</Activity>
                        </ImageBox>
                        <UserBtn onClick={()=>{history.push('/changename')}}>닉네임 변경</UserBtn>
                        <UserBtn onClick={()=>{window.alert("로그아웃 하시겠습니까?")}}>로그 아웃</UserBtn>
                        <UserBtn onClick={()=>{window.alert("회원탈퇴 하시겠습니까?")}}>회원 탈퇴</UserBtn>
                    </ProfileBox>
                </Background>
         </Container>
        </React.Fragment>
    )
}

//styled components
const Container = styled.div`
    
    width: 360px;
    height: 640px;
    background-color: #f5f5f5;
    
`;
const Background = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background: white;

`;

const ProfileBox = styled.div`
width: 360px;
height: 360px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;
const ImageBox = styled.div`
width: 216px;
height: 192px;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`;

const ProfileImg = styled.div`
width: 72px;
height: 72px;
border-radius: 72px;
background: tomato;
`;
const Name = styled.p`
    font-weight: bold;
    margin: 5px;
`;
const Activity = styled.p`
    color: #9e9e9e;
    margin: 5px;
    font-size: 13px;
`;


const UserBtn = styled.div`
width: 360px;
height: 56px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-weight: bold;
&:hover{
    color: #1168d7;
}
`;



export default MyProfile;