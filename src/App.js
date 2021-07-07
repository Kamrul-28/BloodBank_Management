import React,{Component} from 'react'
import { BrowserRouter } from 'react-router-dom';
import Main from "./components/Main";


class App extends Component {
   constructor() {
       super();
       this.state={}
   }

    render() {
    return (
        <BrowserRouter>
            <div>
                <Main />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
