/*Author: Arnau Fàbregas Figueras*/

import { useState } from 'react';
import ChangeingHello from './components/ChangeingHello';
import InputForm from './components/InputForm';
import './styles/App.css'


function App() {
  const [text, setText] = useState('React'); // Shared state
  /*  text: Holds the value of the current text to display. Initially set to 'React'.
      setText: Is a funciton to update the name state */

  return (
    <div className="App">
      {/*Renders the ChangeingHello component, which is responsible for displaying a message.
        The text prop receives the current value of the name state from the App component.
        When the name state changes, this component re-renders with the new value. */}
      <ChangeingHello text={text} />
      {/* Renders the InputForm component, which provides a way for the user to input a new value.
          The onNameChange prop is passed the setName function from the App component.
          This allows InputForm to update the shared name state in App.*/}
      <InputForm onNameChange={setText} />
    </div>
  );
}

export default App;
