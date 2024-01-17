import styled from 'styled-components';

const DivCheck = styled.div`
width: 100%;
height: 40px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const DivCheck2 = styled.div`
z-index: 1;
width: 350px;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
border-radius: 10px;
color: black;
font-weight: bolder;
`;

const Price = styled.h4`
z-index: 1;
justify-content: center;
align-items: center;
`; 

const Interior = styled.div`
z-index: 1;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const InfoPagDiv = styled.div`
z-index: 0;
width: 1000px;
height: 100px;
background-color: #6464649d;
`;


export {DivCheck, Price,DivCheck2, Interior, InfoPagDiv};


