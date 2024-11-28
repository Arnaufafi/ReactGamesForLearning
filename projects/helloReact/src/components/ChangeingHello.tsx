/*Author: Arnau Fàbregas Figueras*/

/*What are props in react? 
    Props (short for "properties") are inputs to a React component.
    They allow components to be reusable and customizable by passing data or functions from a parent component to a child component
*/

// Define the type for the props that the ChangeingHello component expects
type ChangeingHelloProps = {
    text: string; 
  };
  
  // Define the functional component named ChangeingHello and the value of the props
  function ChangeingHello({ text }: ChangeingHelloProps) {
    return <h1>Hello {text}</h1>; // Render an h1 element with the text "Hello " followed by the value of the "text" prop
  }
  
  // Export the ChangeingHello component so it can be used in other parts of the app
  export default ChangeingHello;
  