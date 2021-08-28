//import 부분
import React,{useState, useEffect} from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import Color from "../shared/Color";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../img/Header-Main-Logo@3x.png";

//소켓
import io from "socket.io-client"

import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";
import { actionCreators as permitAction } from "../redux/modules/permit";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Badge from '@material-ui/core/Badge';
import ReactGA from "react-ga";

const socket = io.connect("https://ohbin.shop")

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "25px",
    height: "25px",
    color: Color.fontBlack,
    cursor:"pointer",
  },
}));

const Header = (props) => {
  const dispatch = useDispatch()
  const classes = useStyles();
  //알림
  const [badgeVisible, setVisible] = useState(false);

  const gotoSearch = () => {
    history.push("/search")
  }

  const openNotSupportModal = () => {
    dispatch(permitAction.showNotSupport(true))
  }

  const gotoNoti = ()=>{
    history.push('/notification')
  }

  //알림 클릭시 읽었다는 데이터를 서버에 보내기 
  const setReaded = () => {
    socket.emit("alert", false)
  }

  useEffect(() => {
    socket.on("alert", (is_alarm) => {
      setVisible(is_alarm)
      console.log(is_alarm)
    })

    socket.on("comment", (payload) => {
      console.log("------잘연결되어서 값이 오는가",payload)
    })
  })



  return (
    <React.Fragment>
      <Wrapper>
      <HeaderBox>
        <LogoBox><Logo src={logo}/></LogoBox>

        <SearchBarBox >
          <IconBox>
            <SearchIcon
            onClick={()=>{
              gotoSearch()
              ReactGA.event({
                category: "Button",
                action: "search books",
                label: "search",
              });
            }} 
            className={classes.icon} />
          </IconBox>

          <IconBox>
          <Badge color="secondary" variant="dot" invisible={!badgeVisible}>
            <NotificationsNoneIcon
            onClick={()=>{gotoNoti()}}
            className={classes.icon}/>
            
        </Badge>
          </IconBox>

        </SearchBarBox>
      </HeaderBox>
      </Wrapper>
    </React.Fragment>
  );
};

const IconBox = styled.div`
width:40px;
height:40px;
display:flex;
justify-content:center;
align-items:center;
transition:0.5s ease-in-out;
margin-left:5px;
:hover{
  border-radius:40px;
  background:${Color.line};
}

`

const Wrapper = styled.div`
background-color: ${Color.mainColor};
height:auto;
width:100%;
position:fixed;
top:0px;
z-index:1;
@media ${(props) => props.theme.tablet} {
  width:420px;
}
@media ${(props) => props.theme.desktop} {
  width:420px;
}
`

const HeaderBox = styled.div`
  height: 56px;
  width: 100%;
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;

  @media ${(props) => props.theme.tablet} {
    width:420px;
    height:56px;
  }

  @media ${(props) => props.theme.desktop} {
    width:420px;
    height:56px;
  }

`;

const LogoBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0px 0px 25px;
`;

const Logo = styled.img`
width:auto;
height:auto;
max-width:90px;
max-height:90px;

@media ${(props) => props.theme.tablet} {
  max-width:90px;
  max-height:90px;
}

@media ${(props) => props.theme.desktop} {
  max-width:90px;
  max-height:90px;
}
`;

const SearchBarBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 20px 12px 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export default Header;
