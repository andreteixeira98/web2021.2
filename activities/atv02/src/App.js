
import styled from 'styled-components';
import CountVotes from './components/CountVotes'

const Container = styled.div`
  
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;


`;

function App() {
  return (
    <Container>
      <CountVotes />
    </Container>
  );
}

export default App;
