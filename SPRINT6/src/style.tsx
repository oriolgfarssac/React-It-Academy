import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const DivStyle = styled.div`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  margin-top: 25px;
  width: 750px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; 
`;

const ButtonStyle = styled.button`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  font-size: 20px;
  margin-left: 30px;
  background-color: rgb(211, 233, 255);
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: rgb(219, 86, 86);
  }

  &:active {
    background-color: rgb(219, 86, 86);
  }
`;

const DivGeneral = styled.div`
  margin-top: 10%;
`;


const DivInital = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  background-color: #2b8eff;
  border-radius: 20px;
`;

const FirstButton = styled.button`
font-size: 15px;
text-align: center;
background-color: white;
border: none;
border-radius: 5px;
width: 175px;
height: 30px;

&:hover{
  background-color: rgb(249, 109, 109);
}

&:active{
  background-color:rgb(219, 86, 86);
;
}
`;

const FirstTitle = styled.h2`
font-family: 'Times New Roman', Times, serif;
font-weight: 500;
font-size: 25px;
justify-content: center;
align-items: center;
color: black;
height: 30px;
`;

const FirstText = styled.h5`
font-family: 'Times New Roman', Times, serif;
font-weight: 500;
margin-top: -10px;
margin-bottom: 40px;
text-align: center;
font-size: 15px;
justify-content: center;
align-items: center;
color: black;
height: 30px;
width: 300px;
word-wrap: normal;
`;

const FotoImg = styled.image`
width: 100%;
height: 100%;
`;


export { Container, DivStyle, ButtonStyle, DivGeneral, DivInital, FirstButton, FirstTitle, FirstText, FotoImg};

