import React from 'react';
import './App.css';
import Myform from './Myform/MyForm';

const Greeting = ({name} : {name:string}) => <h1>Halo you {name} </h1>

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="helmi" />
        <Myform preview="tesii">
          asdasdasdsadasd
        </Myform>
      </header>
    </div>
  );
}

export default App;
