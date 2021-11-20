import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Routes, Route } from 'react-router-dom'


import Home from './components/Home';
import CreateAluno from './components/aluno/CreateAluno';
import ListAluno from './components/aluno/ListAluno';
//import DeleteAluno from './components/DeleteAluno';
//import EditAluno from './components/EditAluno';

function App() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to={'/'} className='navbar-brand'>CRUD</Link>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={'/'} className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/createAluno'} className='nav-link'>Create Aluno</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/listAluno'} className='nav-link'> List Aluno</Link>
            </li>
          </ul>
        </div>


      </nav>

      <h2>Project CRUD</h2>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createAluno' element={<CreateAluno />} />
        <Route path='/listAluno' element={<ListAluno />} />
      </Routes>


    </div>
  );
}

export default App;
