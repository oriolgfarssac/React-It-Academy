import { Container, DivStyle, ButtonStyle, DivGeneral, DivInital, FirstButton, FirstTitle, FirstText,} from './style';
import { TextTest, } from './Escena/Escena';
import arrayFrases from './Frases';
import { useState } from 'react';

export let index2: number = 0;

function App() {

  const [condition, setCondition] = useState(false);

  const [condition2, setCondition2] = useState(true);

  const [index, setIndex] = useState(0);

  

  const changeCondition = () =>{
    setCondition(true);
    setCondition2(false);
  };

  const previousItem = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    index2 = index;
  };

  const nextItem = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, arrayFrases.length - 1));
    index2= index;
  };

  return (
    <>
    {condition2 &&
      <DivInital>
      <FirstTitle>SPRINT 6</FirstTitle>
      <FirstText> En aquest Srint, podrem observar una historia que es podra anar passant amb uns botons fent us de useState.</FirstText>
      <FirstButton onClick={changeCondition}>Veure Historia</FirstButton>
      </DivInital>
    }
    {condition && (
      <Container>
        <DivGeneral>
          <div>
            <img src={arrayFrases[index].foto} id='fondo'/>
            <ButtonStyle onClick={previousItem}> ← Anterior </ButtonStyle>
            <ButtonStyle onClick={nextItem}> Seguent → </ButtonStyle>
            {arrayFrases.map((frase, i) => (
              <DivStyle key={i} style={{backgroundColor: index === i ? 'rgb(249, 108, 108)' : 'rgb(233, 244, 255)',}}>
                <TextTest content={frase.frase}/>
              </DivStyle> 
            ))}
          </div>
        </DivGeneral>
      </Container>
    )}
    </>
    );
}

export default App;
