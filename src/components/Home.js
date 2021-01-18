import React,{Component} from 'react';
import Contact from './Contact'
import Team from './Team'
import Counter from './Counter'
import About from "./About";
import Banner from "./Banner";
import Call from './Call'
import Header from "./Header";
import Footer from "./Footer";



class Home extends Component {
    constructor() {
        super();
        this.state={
            items:'',
            isloaded:false
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/test')
            .then(res => res.json())
            .then(json=>{
                this.setState({
                        isloaded:true,
                        items:json
                    }
                )
            })

    }

    render(){
        return(
            <div>
                {/*Header Section*/}
                <Banner />

                {/*Main Section*/}
                <main id="main">
                    <About />
                    <Counter />
                    <Call />
                    <Team />
                    <Contact />

                </main>
                <Footer />
            </div>

        )
    }

}

export default Home;