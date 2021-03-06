//import 부분
import React from "react";
import {history} from "../redux/configStore"
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { makeStyles } from "@material-ui/core/styles";
import { CommonContainer, CommonOverlay } from "../shared/styles/modal/CommonModal";


import { actionCreators as permitActions } from "../redux/modules/permit";
import { actionCreators as reviewActions } from "../redux/modules/review";
import { actionCreators as collectionActions } from "../redux/modules/collection";


const useStyles = makeStyles((theme) => ({
  icon: {
    margin: "0px 5px 0px 0px"
  },
}));



const EditModal = (props) =>{
    const dispatch = useDispatch();
    const classes = useStyles();
    const bookId = useSelector(state => state.review.feed_id.bookId)
    const reviewId = useSelector(state => state.review.feed_id.reviewId)
    const collectionId = useSelector(state=> state.collection.collection_id)

    const showLoading = () => {
      dispatch(permitActions.isLoading(true))
    }

    if(props.is_collection){
      return(
        <React.Fragment>

            <Container is_show={props.is_edit_modal || props.is_modal}>
              <Btn
               onClick={()=>{
                history.push(`/editCollection/${collectionId}`)
              }}
              ><CreateOutlinedIcon className={classes.icon}/>컬렉션 수정</Btn>
          
              <Btn
                onClick={()=>{
                  dispatch(collectionActions.deleteCollectionSV())
                  dispatch(permitActions.showModal(false))
                }}
              
              ><DeleteOutlineOutlinedIcon className={classes.icon} />컬렉션 삭제</Btn>
            </Container>

            <Overlay 
            is_show={props.is_edit_modal || props.is_modal}
            onClick={()=>{
            dispatch(permitActions.showModal(false))
            }}>
            </Overlay>
        </React.Fragment>
    )
    }
    else{
      return(
        <React.Fragment>

            <Container is_show={props.is_edit_modal}>
              <Btn onClick={() => {
                showLoading()
                history.push(`/postwrite/${bookId}/${reviewId}`)
              }}><CreateOutlinedIcon style={{margin: "0px 5px 0px 0px"}}/>게시물 수정</Btn>
              {/* <Btn><BookmarkBorderOutlinedIcon style={{margin: "0px 5px 0px 0px"}}/>게시물 저장</Btn>
              <Btn><LockOutlinedIcon style={{margin: "0px 5px 0px 0px"}}/>게시물 비공개로 전환</Btn> */}
              <Btn onClick={() => { 
                dispatch(reviewActions.deleteReviewSV())
                dispatch(permitActions.showEditModal(false))
                history.push('/')
              }
              }><DeleteOutlineOutlinedIcon style={{margin: "0px 5px 0px 0px"}} />게시물 삭제</Btn>
            </Container>

            <Overlay
            is_show={props.is_edit_modal} 
            onClick={()=>{
            dispatch(permitActions.showEditModal(false))
            }}>
            </Overlay>

        </React.Fragment>
    )
    }
}


const Overlay = styled(CommonOverlay)`
`;


const Container = styled(CommonContainer)`

`;


const Btn = styled.div`
width: 288px;
height: 56px;
display: flex;
line-height: 56px;
align-items: center;
font-weight: 500;
font-size: 14px;
cursor:pointer;
&:hover {
    color: red;
}
`;

export default React.memo(EditModal);