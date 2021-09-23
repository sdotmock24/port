import styled, {createGlobalStyle} from "styled-components";

const Globalstyle = createGlobalStyle `
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Soure Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;



@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}
`;

export const Button = styled.button`
border: 4px;
background: ${({primary}) => (primary ? '#7395AE' : '#557A95') };
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;

&:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary ? '#557A95' : '#7395AE') };
}

@media screen and (max-width: 960px) {
    width: 100%;
}
`;



export default Globalstyle;