import { useState } from 'react'
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  //Initialize the boolean state
  const [dark, setDark] = useState(false);
  //Toggle the state
  const toggleMode = () => {
    setDark(!dark);
  };

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh",
        width: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
      <Button variant={dark ? "light" : "dark"} onClick={toggleMode}>
        Toggle to {dark ? "Light" : "Dark"} Mode

      </Button>
    </div >
  );


}

export default App;