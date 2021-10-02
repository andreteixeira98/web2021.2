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

    span.name{
        color: red;
    }




`;

function Profile() {
    return (
        <Container>
            <img className='image_profile' src="https://www.github.com/andreteixeira98.png" alt="image" />
            <span className='name'>Andre Teixeira, 23 years old</span>
            <span>Ciência da Computação</span>
            <span>Pindoretama-CE</span>
            <span>andreteixeira@alu.ufc.br</span>

        </Container>
    );
}

export default Profile;