import React from 'react';
import './App.css';
import Pet from './Pet';

function App() {
  return (
    <div>
      <div className='pet-container'>
        <Pet name='Jorge' owner='Martin' age='3 years' specie='dog' weight='27 kg'/>
        <Pet name='Raul' owner='Sofia' age='16 years' specie='cat' weight='15 kg'/>
        <Pet name='Carlos' owner='Ramiro' age='1 years' specie='tortoise' weight='3 kg'/>
        <Pet name='Horacio' owner='Pedro' age='0.5 years' specie='hamster' weight='80 g'/>
        <Pet name='Horacio' owner='Pedro' age='0.5 years' specie='hamster' weight='80 g'/>
        <Pet name='Horacio' owner='Pedro' age='0.5 years' specie='hamster' weight='80 g'/>
        <Pet name='Horacio' owner='Pedro' age='0.5 years' specie='hamster' weight='80 g'/>
        <Pet name='Horacio' owner='Pedro' age='0.5 years' specie='hamster' weight='80 g'/>
      </div>
    </div>
  );
}

export default App;

