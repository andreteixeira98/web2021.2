
import { useState, useEffect, memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h1.title{

    }

    ul.Cities{

    }

    ul.plus_and_less{

    }

    div.city_counter{

    }


   
`;

function CountVotes() {
    const [fortaleza, setFortaleza] = useState(0);
    const [quixada, setQuixada] = useState(0);
    const [limoeiroDoNorte, setLimoeiroDoNorte] = useState(0);
    const [juazeiro, setJuazeiro] = useState(0);

    const [maior, setMaior] = useState(null);
    const [menor, setMenor] = useState(null);

    function maisVotada() {
        if (fortaleza === quixada === limoeiroDoNorte === juazeiro) {
            return (`Fortaleza, Quixadá, Limoeiro, Juazeiro`);
        } else if (fortaleza === quixada && quixada > limoeiroDoNorte && quixada > juazeiro) {
            return (`Quixadá`);

        } else if (limoeiroDoNorte > fortaleza && limoeiroDoNorte > quixada && limoeiroDoNorte > juazeiro) {
            return (`Limoeiro`);

        } else if (juazeiro > fortaleza && juazeiro > quixada && juazeiro > limoeiroDoNorte) {
            return ('Juazeiro');
        } else {
            return ('empate');
        }
    }
    function menosVotada() {

    }

    useEffect(() => {

    }, [fortaleza, quixada, limoeiroDoNorte, juazeiro]);

    return (
        <Container>
            <h1 className='title'>Votação das Cidades</h1>
            <ul className='Cities'>
                <li>{`Fortaleza: ${fortaleza} votos`}</li>
                <li>{`Quixadá: ${quixada} votos`}</li>
                <li>{`Limoeiro do norte: ${limoeiroDoNorte} votos`}</li>
                <li>Juazeiro: {juazeiro} votos</li>
            </ul>

            <ul className='plus_and_less'>
                <li>MAIS VOTADA(s): {maior}</li>
                <li>MENOS VOTADA(s): juazeiro</li>
            </ul>

            <div className='city_counter'>
                <button onClick={e => setFortaleza(fortaleza + 1)}>Fortaleza</button>

                <button onClick={e => setQuixada(quixada + 1)}>Quixadá</button>

                <button onClick={e => setLimoeiroDoNorte(limoeiroDoNorte + 1)}>Limoeiro</button>

                <button onClick={e => setJuazeiro(juazeiro + 1)}>Juazeiro</button>
            </div>

        </Container>
    )
}

export default memo(CountVotes);