
import Andre from './components/Andre';
import styled from 'styled-components';

const Container = styled.div`

    width:100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items:center;


`;

function App() {
  return (
    <Container className="App">
      <Andre />
    </Container>
  );
}

export default App;
