import React,{Component} from 'react'
import Home from './components/Home'
import BrowserRouter from 'react'

class App extends Component {

  render() {
    return (
        <div>
          <BrowserRouter>
              <Home />
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
