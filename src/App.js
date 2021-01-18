import React,{Component} from 'react'
import { BrowserRouter } from 'react-router-dom';
import Router from "./components/Router";
import Header from "./components/Header";
import Banner from "./components/Banner";


class App extends Component {
   constructor() {
       super();
       this.state={}
   }

    render() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Router />

            </div>
        </BrowserRouter>
    );
  }
}

export default App;
