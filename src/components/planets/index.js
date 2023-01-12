import React, {Fragment, useState, useEffect} from 'react';
import Planet from './planet';
import Form from './form';

// const clickOnPlanet = (name) => {
//   alert(`Planeta clicado ${name}`);
// }

async function getPlanets(){
  let response = await fetch('http://localhost:3000/api/planets.json');
  let data = await response.json();
  return data;
}

const Planets = () => {
  
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets']);
    })
  }, [])

  const addPlanet = (newPlanet) => {
    setPlanets([...planets, newPlanet]);
  }

  return (
    <Fragment>
      
      <h3>Listagem de Planetas</h3>

      <hr/>
      <Form addPlanet={addPlanet}/>
      <hr/>

      {planets.map((planet, index) => 
        <Planet
          id={planet.id}
          name={planet.name}
          description={planet.description}
          img_url={planet.img_url}
          link={planet.link}
          key={index}
        />
      )}
      {/* <Planet
        // name='Terra'
        // description='O planeta Terra é o planeta habitado por nós, seres vivos. Conhecido também como planeta água, é o maior dentre os quatro planetas rochosos que fazem parte do Sistema Solar.'
        // img_url='https://s2.static.brasilescola.uol.com.br/be/conteudo/images/planeta-terra.jpg'
        // // clickOnPlanet={clickOnPlanet}
      />
      <Planet
        // name='Marte'
        // description='Conforme a União Astronômica Internacional (AIU), órgão responsável pela classificação dos corpos celestes, o sistema solar é composto por oito planetas: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno. Esses planetas apresentam algumas características em comum, no entanto, cada um possui peculiaridades.'
        // img_url='https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/8465a67d00eda6b73b4485921e5fac7a.jpg'
        // link='https://mundoeducacao.uol.com.br/geografia/planeta-marte.htm'
        // titleWithUnderline = {true}
        // gray={true}
        // // clickOnPlanet={clickOnPlanet}
      /> */}
    </Fragment>
  )
}

/*
const Planets = () => {
  
}
*/
export default Planets;