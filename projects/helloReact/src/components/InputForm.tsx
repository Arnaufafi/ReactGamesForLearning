/*Author: Arnau Fàbregas Figueras*/

import { useState } from 'react'; 
import '../styles/InputForm.css';


/*What are props in react? 
    Props (short for "properties") are inputs to a React component.
    They allow components to be reusable and customizable by passing data or functions from a parent component to a child component
*/

// Define the props type for InputForm, which expects a function to handle name changes
type InputFormProps = {
  onNameChange: (name: string) => void; // Property that receives a function to change the name
};

// Define the InputForm functional component
function InputForm({ onNameChange }: InputFormProps) {
  const [inputValue, setInputValue] = useState(''); // Initialize the state for the input field with an empty string

  // Function to handle form submission
  const handleSubmit = () => {
    if (inputValue.trim() !== '') { // Check if the input is not just empty spaces
      onNameChange(inputValue); // Call the onNameChange function passed via props to update the name
      setInputValue(''); // Reset the input field to an empty string after submission
    }
  };

  // Function to handle the keydown event for the input field
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Check if the pressed key is 'Enter' (key code 13)
    if (e.key === 'Enter') {
      handleSubmit(); // Call handleSubmit function if Enter key is pressed
    }
  };

  return (
    <div className="input-form-container">
      <input
        type="text" // Specify the input type as text
        className="input-form-input" 
        placeholder="Introduce tu texto" 
        value={inputValue} // Bind the value of the input to the state (inputValue)
        onChange={(e) => setInputValue(e.target.value)} // Update inputValue state whenever the user types in the input field
        onKeyDown={handleKeyDown} // Attach the handleKeyDown function to detect the key press event
      />
      <button
        onClick={handleSubmit} // Attach handleSubmit to the button click event
        className="input-form-button" 
        disabled={inputValue.trim() === ''} /* Disable the button if the input field is empty or contains only spaces,
                                                trim funcion removes withe spaces from the begining and the end of the String"*/
      >
        Change text {/* Button text */}
      </button>
    </div>
  );
}

export default InputForm; // Export the InputForm component so it can be used in other parts of the app
