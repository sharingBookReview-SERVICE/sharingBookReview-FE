import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";


//actions
const GET_ONE_BOOK = "book/GET_ONE_BOOK";
const GET_BESTSELLER = "book/GET_BESTSELLER";
const GET_SEARCH_BOOKS = "book/GET_SEARCH_BOOKS";
const GET_SEARCH_BOOKS_TITLE = "book/GET_SEARCH_BOOKS_TITLE";
const GET_SEARCH_BOOKS_AUTHOR = "book/GET_SEARCH_BOOKS_AUTHOR";
const GET_SEARCH_BOOKS_PUBLI = "book/GET_SEARCH_BOOKS_PUBLI";
const RESET_SELECTED_BOOK = "book/RESET_SELECTED_BOOK";


//actioncreator
const getOneBook = createAction(GET_ONE_BOOK, (book)=>({book}));
const getBestSeller = createAction(GET_BESTSELLER, (book_list) =>({book_list}));
const getSearchBooks = createAction(GET_SEARCH_BOOKS, (book_list)=>({book_list}));
const getSearchBooksTitle = createAction(GET_SEARCH_BOOKS_TITLE, (book_list)=>({book_list}));
const resetSelectedBook = createAction(RESET_SELECTED_BOOK, (book)=> ({book}));

//initial
const initialState = {
    book :[],
    best_seller : [],
    search_book_list : [],
    search_book_title : [],
    search_book_author : [],
    search_book_publisher : [],

};



//검색한 책 불러오기
const getSearchBooksSV = (query)=>{
    return function(dispatch, getState, {history}){
        instance.get(`/books?target=제목&query=${query}`)
        .then((res)=>{
            
            dispatch(getSearchBooksTitle(res.data.searchList));
            dispatch(getSearchBooks(res.data.searchList))
        })
        .catch((err)=>{
            console.log("검색 책 로드 실패", err);
            dispatch(resetSelectedBook())
        })   
    }
}

//책 하나만 불러오기
const getOneBookSV = (id)=>{
    return function(dispatch,{history}){
        instance.get(`/books/${id}`)
        .then((res)=>{
            dispatch(getOneBook(res.data));
        })
        .catch((err)=>{
            // history.push("*")
            console.log("책로드 하나 실패", err)
        })
    }
}


//베스트 셀러 불러오기
const getBestSellerSV = ()=>{
    return function(dispatch,{history}){
        instance.get('/book/bestseller')
        .then((res)=>{
            dispatch(getBestSeller(res.data));
        })
        .catch((err)=>{
            // history.push("*")
            console.log("베스트셀러 로드 실패", err)
        })
    }
}

//reducer
export default handleActions(
    {
        [GET_ONE_BOOK]: (state, action)=>
        produce(state, (draft)=>{
            draft.book = action.payload.book;
        }),
        [GET_BESTSELLER]:(state, action) =>
        produce(state, (draft)=>{
            draft.best_seller = action.payload.book_list;
        }),
        [GET_SEARCH_BOOKS]: (state, action) =>
        produce(state, (draft)=>{
            
            if(draft.search_book_list.length===0){
                draft.search_book_list = action.payload.book_list;
            }
            else{
                draft.search_book_list.push(...action.payload.book_list);
            }
            // draft.search_book_list = action.payload.book_list;
        }),
        [GET_SEARCH_BOOKS_TITLE]: (state, action) =>
        produce(state, (draft)=>{
            draft.search_book_title = action.payload.book_list;
        }),
        [GET_SEARCH_BOOKS_AUTHOR]: (state, action) =>
        produce(state, (draft)=>{
            draft.search_book_author = action.payload.book_list;
        }),
        [GET_SEARCH_BOOKS_PUBLI]: (state, action) =>
        produce(state, (draft)=>{
            draft.search_book_publisher = action.payload.book_list;
        }),
        [RESET_SELECTED_BOOK]: (state, action) =>
        produce(state,(draft)=>{
            draft.book = [];
            draft.search_book_list = [];
            draft.search_book_title = [];
        })
 
    },
    initialState
  );
  

const actionCreators = {
    getOneBookSV,
    getBestSellerSV,
    getSearchBooksSV,
    resetSelectedBook
};
  
export { actionCreators };