import React,{Component} from 'react'
import { BrowserRouter } from 'react-router-dom';
import Router from "./components/Router";
import Header from "./components/Header";
import Footer from "./components/Footer"


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
                <Footer />

            </div>
        </BrowserRouter>
    );
  }
}

export default App;
