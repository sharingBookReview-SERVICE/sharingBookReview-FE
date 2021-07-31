//import 부분
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import add_button from "../img/add_button.png"
import left_arrow from "../img/left_arrow.png"
import {useDispatch, useSelector} from "react-redux";
import { history } from "../redux/configStore";
import SelectBookModal from "../modals/SelectBookModal";
import SelectBookCard from "../components/SelectBookCard";
import {actionCreators as reviewActions} from "../redux/modules/review";
import { actionCreators as modalActions } from "../redux/modules/modal";


const ReviewWrite = () => {
    const dispatch = useDispatch();
    const is_modal = useSelector(state=> state.modal.is_modal);

    const quote = React.useRef();
    const content = React.useRef();
    const hashtags = React.useRef();

    const addReview = () => {
      if(book.length===0){
        window.alert("책을 선택해주세요!");
      }
      else{
        let review = {
          quote: quote.current.value,
          content: content.current.value,
          hashtags: hashtags.current.value,
        };
      dispatch(reviewActions.addReviewSV(review, book.isbn));
      console.log(review, book.isbn);
      }
       
    }

    const book = useSelector(state=> state.book.book);



    return (
        <React.Fragment>
          {/* 책 선택 모달 열기 */}
            {
                is_modal && <SelectBookModal/>
              }
            <PostWriteBox>
                <StartPost></StartPost>
                <PostHeader>
                    <LeftArrow 
                      src={left_arrow} 
                      onClick={()=>{history.goBack()}}/>
                    <ReviewHeaderText 
                      onClick={()=>{addReview()}}>
                        게시하기</ReviewHeaderText>
                </PostHeader>
                {/* 책을 선택했으면 선택한 책 표시하기 */}
                {
                  book.length===0 ? 
                  <BookChoice 
                    onClick={()=>{ 
                      dispatch(modalActions.showModal())}} >
                  <img src={add_button} alt="add btn"/>
                  <Text>리뷰할 책 선택하기</Text>
                 </BookChoice>
                 :
                 <SelectBookCard isSelected/>

                }
              
                <BookChoice style={{height: "35vh"}}>
                    <img src={add_button} alt="add btn"/>
                    <Text>책 사진 업로드</Text>
                    <Text style={{color:"#9e9e9e", fontWeight: "normal", fontSize:"1em"}}>인상깊었던 사진을 올려보세요</Text>
                </BookChoice>
                <InputQuotes>
                    <Text>인용구 작성하기</Text>
                    <QuotesTextarea ref={quote} placeholder="책에서 읽었던 인상깊은 구절을 작성해보세요">
                    </QuotesTextarea>
                </InputQuotes>
                <AddReview>
                    <Text>리뷰작성</Text>
                    <QuotesTextarea ref={content} placeholder="자유로운 리뷰를 작성해보세요.(최대 100자)">
                    </QuotesTextarea>
                </AddReview>
                <HashTag>
                    <Text>해시태그작성</Text><br/>
                    <HashInput ref={hashtags} placeholder="예) #자기계발"></HashInput>
                </HashTag>
            </PostWriteBox>
        </React.Fragment>
        
    )
}

export default ReviewWrite;
const PostWriteBox = styled.div`
  width: 100vw;
  height: auto;
  flex-grow: 0;
  padding: 20px 0 0;
  background-color: #FFFFFF;
  //border: 1px solid black;
  margin: auto;
  box-sizing: border-box;
  position: relative;
`;

const Text = styled.text`
  font-size: 1em;
  text-align: left;
  letter-spacing: -0.28px;
  font-weight: bolder;
`;

const StartPost = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  height: 3vh;
  margin-top: -3vh;
`;

const PostHeader = styled.div`
  width: 100vw;
  height: 4vh;
  background-color: #ffffff;
  //border: 1px solid black;
`;
const LeftArrow = styled.img`
  width: 10vw;
  height: 3vh;
  flex-grow: 0;
  object-fit: contain;
  float: left;

`;
const ReviewHeaderText = styled.button`
  width: 20vw;
  height: 5vh;
  flex-grow: 0;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  float: right;
  display: inline-block;
  margin: 0.2em 0.2em 0 0;
  color: #9e9e9e;
  box-sizing: border-box;
  border:none;
  //border: 1px solid black;
`;

const BookChoice = styled.div`
  width: 80vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3vh;
  margin: auto auto 4% auto;
  border-radius: 12px;
  //border: solid 1px var(--system-temp-30);
  border: 1px solid #EFEEEE;
  background-color: #ffffff;
  font-weight: bolder;
  color: #1168d7;
  font-size: 0.9em;
  box-sizing: border-box;
`;
const InputQuotes = styled.div`
  width: 100vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.3vh;
  margin: 3vh 0 0;
  padding: 16px;
  background-color: #ffffff;
  //border: 1px solid black;
  box-sizing: border-box;
`;

const QuotesTextarea = styled.textarea`
  width: 90vw;
  height: 20vh;
  flex-grow: 0;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  padding: 0.7em 0 0 0.5em;
  border-radius: 5px;
  border: none;
  background-color: #f5f5f5;

  &::placeholder {
    color: #A8A8A8;
  }
`;

const AddReview = styled.div`
  width: 100vh;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 1em;
  background-color: #ffffff;
  //border: 1px solid blue;
  box-sizing: border-box;
`;

const HashTag = styled.div`
  width: 80vw;
  height: 20vh;
  padding: 1em;
  background-color: #ffffff;
  box-sizing: border-box;
  // border: 1px solid red;
`;

const HashInput = styled.input`
  width: 90vw;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-top: 1vh;
  padding: 1vh 1vw 1vh 1vw;
  border-radius: 10px;
  background-color: #f5f5f5;
  border: none;
  box-sizing: border-box;

  &::placeholder {
    color: #A8A8A8;
  }
`;