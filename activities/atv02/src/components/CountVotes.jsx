
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
        if (fortaleza === quixada && fortaleza === limoeiroDoNorte && fortaleza === juazeiro) {
            setMaior(`Fortaleza, Quixadá, Limoeiro, Juazeiro`);
        } 
        else if(fortaleza === quixada && fortaleza === juazeiro){
            if(fortaleza > limoeiroDoNorte){
                setMaior('Fortaleza, Quixadá, Juazeiro');
            }else {
                setMaior('Limoeiro');
            }
        }else if(fortaleza === quixada && fortaleza === limoeiroDoNorte){
            if(fortaleza > juazeiro){
                setMaior('Fortaleza, Quixadá, Limoeiro');
            }else{
                setMaior('Juazeiro');
            }
        }
        else if(quixada === juazeiro && quixada === limoeiroDoNorte){
            if(quixada > fortaleza){
                setMaior('Quixadá, Limoeiro, Juazeiro');
            }else{
                setMaior('Fortaleza');
            }
        }
        else if(fortaleza === juazeiro && fortaleza === limoeiroDoNorte){
            if(fortaleza > quixada){
                setMaior('Fortaleza, Limoeiro, Juazeiro');
            }else{
                setMaior('Quixada');
            }
        }

        else if(fortaleza === quixada){
            if(fortaleza > juazeiro && fortaleza > limoeiroDoNorte){
                setMaior('Fortaleza, Quixadá');
            }else if(juazeiro > limoeiroDoNorte){
                setMaior('Juazeiro');
            }else {
                setMaior('Limoeiro');
            }
        }
        else if(fortaleza === juazeiro){
            if(fortaleza > quixada && fortaleza > limoeiroDoNorte){
                setMaior('Fortaleza, Juazeiro');
            }else if(quixada > limoeiroDoNorte){
                setMaior('Quixadá');
            }else {
                setMaior('Limoeiro');
            }
        }
        else if(fortaleza === limoeiroDoNorte){
            if(fortaleza > quixada && fortaleza > juazeiro){
                setMaior('Fortaleza, Limoeiro');
            }else if(quixada > juazeiro){
                setMaior('Quixadá');
            }else {
                setMaior('Juazeiro');
            }
        }
        else if(quixada === limoeiroDoNorte){
            if(quixada > fortaleza && quixada > juazeiro){
                setMaior('Quixadá, Limoeiro');
            }else if(fortaleza > juazeiro){
                setMaior('Fortaleza');
            }else {
                setMaior('Juazeiro');
            }
        }
        else if(quixada === juazeiro){
            if(quixada > fortaleza && quixada > limoeiroDoNorte){
                setMaior('Quixadá, Juazeiro');
            }else if(fortaleza > limoeiroDoNorte){
                setMaior('Fortaleza');
            }else {
                setMaior('Limoeiro');
            }
        }
        else if( juazeiro === limoeiroDoNorte){
            if(juazeiro > fortaleza && juazeiro > quixada){
                setMaior('Juazeiro, Limoeiro');
            }else if(fortaleza > quixada){
                setMaior('Fortaleza');
            }else {
                setMaior('Quixadá');
            }
        }
        else if (fortaleza >quixada && fortaleza > limoeiroDoNorte && fortaleza > juazeiro) {
            setMaior(`Fortaleza`);

        } else if (limoeiroDoNorte > fortaleza && limoeiroDoNorte > quixada && limoeiroDoNorte > juazeiro) {
            setMaior(`Limoeiro`);

        } else if (juazeiro > fortaleza && juazeiro > quixada && juazeiro > limoeiroDoNorte) {
            setMaior('Juazeiro');
        } else {
            setMaior('Quixadá');
        }
    }

    function menosVotada() {
        if (fortaleza === quixada && fortaleza === limoeiroDoNorte && fortaleza === juazeiro) {
            setMaior(`Fortaleza, Quixadá, Limoeiro, Juazeiro`);
        } 
        else if(fortaleza === quixada && fortaleza === juazeiro){
            if(fortaleza > limoeiroDoNorte){
                setMenor('Fortaleza, Quixadá, Juazeiro');
            }else {
                setMenor('Limoeiro');
            }
        }else if(fortaleza === quixada && fortaleza === limoeiroDoNorte){
            if(fortaleza < juazeiro){
                setMenor('Fortaleza, Quixadá, Limoeiro');
            }else{
                setMenor('Juazeiro');
            }
        }
        else if(quixada === juazeiro && quixada === limoeiroDoNorte){
            if(quixada < fortaleza){
                setMenor('Quixadá, Limoeiro, Juazeiro');
            }else{
                setMenor('Fortaleza');
            }
        }
        else if(fortaleza === juazeiro && fortaleza === limoeiroDoNorte){
            if(fortaleza < quixada){
                setMenor('Fortaleza, Limoeiro, Juazeiro');
            }else{
                setMenor('Quixada');
            }
        }

        else if(fortaleza === quixada){
            if(fortaleza < juazeiro && fortaleza < limoeiroDoNorte){
                setMenor('Fortaleza, Quixadá');
            }else if(juazeiro < limoeiroDoNorte){
                setMenor('Juazeiro');
            }else {
                setMenor('Limoeiro');
            }
        }
        else if(fortaleza === juazeiro){
            if(fortaleza < quixada && fortaleza < limoeiroDoNorte){
                setMenor('Fortaleza, Juazeiro');
            }else if(quixada < limoeiroDoNorte){
                setMenor('Quixadá');
            }else {
                setMenor('Limoeiro');
            }
        }
        else if(fortaleza === limoeiroDoNorte){
            if(fortaleza < quixada && fortaleza < juazeiro){
                setMenor('Fortaleza, Limoeiro');
            }else if(quixada < juazeiro){
                setMenor('Quixadá');
            }else {
                setMenor('Juazeiro');
            }
        }
        else if(quixada === limoeiroDoNorte){
            if(quixada < fortaleza && quixada < juazeiro){
                setMenor('Quixadá, Limoeiro');
            }else if(fortaleza < juazeiro){
                setMenor('Fortaleza');
            }else {
                setMenor('Juazeiro');
            }
        }
        else if(quixada === juazeiro){
            if(quixada < fortaleza && quixada < limoeiroDoNorte){
                setMenor('Quixadá, Juazeiro');
            }else if(fortaleza < limoeiroDoNorte){
                setMenor('Fortaleza');
            }else {
                setMenor('Limoeiro');
            }
        }
        else if( juazeiro === limoeiroDoNorte){
            if(juazeiro < fortaleza && juazeiro < quixada){
                setMenor('Juazeiro, Limoeiro');
            }else if(fortaleza < quixada){
                setMenor('Fortaleza');
            }else {
                setMenor('Quixadá');
            }
        }



        else if (fortaleza <quixada && fortaleza < limoeiroDoNorte && fortaleza < juazeiro) {
            setMenor(`Fortaleza`);

        } else if (limoeiroDoNorte < fortaleza && limoeiroDoNorte < quixada && limoeiroDoNorte < juazeiro) {
            setMenor(`Limoeiro`);

        } else if (juazeiro < fortaleza && juazeiro < quixada && juazeiro < limoeiroDoNorte) {
            setMenor('Juazeiro');
        } else {
            setMenor('Quixadá');
        }
    }

    useEffect(() => {
        maisVotada();
        menosVotada();

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
                <li>MENOS VOTADA(s): {menor}</li>
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