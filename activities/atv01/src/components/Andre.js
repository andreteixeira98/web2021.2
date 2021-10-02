import styled from 'styled-components';

const Container = styled.div`
    
    width:400px;
    height: 600px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly; 
    
    
    img.image_profile{
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        
    }
    
    span.name_and_years{
        font-size: 1.5rem;
        font-weight: 700;
        
    }
    span:nth-child(n+3){
        font-size: 1.2rem;
       
    }
    
   




`;

function Andre() {
    return (
        <Container>
            <img className='image_profile' src="https://www.github.com/andreteixeira98.png" alt="imKJSLKSD" />
            <span className='name_and_years'>Andre Teixeira Vaz, 23 years old</span>
            <span className='course'>Ciência da Computação</span>
            <span className='city'>Pindoretama-CE</span>
            <span className='email'>andreteixeira@alu.ufc.br</span>
        </Container>
    );
}

export default Andre;