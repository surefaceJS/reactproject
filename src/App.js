
import "./sass/main.scss";
import NavigationBar from "./companets/NavigationBar"
import Lifecikle from "./companets/lifecikle"

import Server from "./companets/Server"
import Emploer from "./companets/emploer"
import ClassToday from "./companets/classtoday"
import React, {useState} from "react";


function App() {

    const  [counter, setCounter] = useState(999999999999)


    function plus() {
        setCounter(counter + 1)
    }
    function minus() {
        setCounter(counter - 1)
    }

  return (
    <div>

        <h1>yourAgr: {counter}</h1>

        <button onClick={plus} className="btn btn-success">+</button>
        <button onClick={minus} className="btn btn-danger">-</button>



    </div>
  );
}

export default App;
