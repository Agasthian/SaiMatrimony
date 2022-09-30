import styled from 'styled-components';

export const LoginContainer = styled.div`
    height: calc(100vh - 56px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginWrapper = styled.div`
    width: 60%;
    height: 75%;
    border-radius: 7px;
    -webkit-box-shadow: 0px 5px 11px 2px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 5px 11px 2px rgba(0,0,0,0.25);
    box-shadow: 0px 5px 11px 2px rgba(0,0,0,0.25);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`


export const LoginWrapperLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const LoginWrapperCenter = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const LoginWrapperCenterLine = styled.div`
    width: 0.5px;
    height: 70%;
    background-color: lightgray;
    position: absolute;
    top: 0;
    bottom:0;
    left:0;
    right:0;
    margin: auto;
    z-index: -2;
`
export const LoginWrapperCenterOr = styled.div`
    border: 2px solid lightgray;
    border-radius: 50%;
    padding: 10px;
    color: gray;
    background-color: #fff; 
`

export const LoginWrapperRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`
// .login{
//     height: calc(100vh - 56px);
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

// .login_wrapper{
    // width: 60%;
    // height: 75%;
    // border-radius: 7px;
    // -webkit-box-shadow: 0px 5px 11px 2px rgba(0,0,0,0.25);
    // -moz-box-shadow: 0px 5px 11px 2px rgba(0,0,0,0.25);
    // box-shadow: 0px 5px 11px 2px rgba(0,0,0,0.25);
    // display: flex;
    // flex-wrap: wrap;
    // align-items: center;
     
// }

// .left,.right{
    // flex: 1;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
// }

// .center{
    // height: 100%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // position: relative;

// }
// .line{
    // width: 0.5px;
    // height: 70%;
    // background-color: lightgray;
    // position: absolute;
    // top: 0;
    // bottom:0;
    // left:0;
    // right:0;
    // margin: auto;
    // z-index: -2;
// }
// .or{
    // border: 2px solid lightgray;
    // border-radius: 50%;
    // padding: 10px;
    // color: gray;
    // background-color: #fff; 
// }

