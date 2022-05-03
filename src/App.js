import React,{Fragment} from 'react';
import AppRouter from './routers/AppRouter';
import './style.css'

function App() {
  return (
    // <Fragment>
    //   <header className='header'>
    //     <img className='logo' src='https://imgs.search.brave.com/9vwBHMSDYvbn5B4vNjHd_GvQ3nQekupA2kF1dlJts7g/rs:fit:512:512:1/g:ce/aHR0cDovL2ljb24t/aWNvbnMuY29tL2lj/b25zMi81MTYvUE5H/LzUxMi9jb2luX21v/bmV5X2ljb24taWNv/bnMuY29tXzUxMDkx/LnBuZw'></img>
    //     <h2 className='titulo'>Mi Ahorro</h2>
    //      </header>
    // <Login/>
    //      </Fragment>  
    <AppRouter/>
);
}

export default App;
