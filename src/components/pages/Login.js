import React, {Component} from 'react';
import Footer from '../Footer';
import Header from '../Header';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            touched: {
                email:false,
                password:false,
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleSubmit(event){
        const {email,password} = this.state
        event.preventDefault()

        console.log(this.state)
        fetch('http://127.0.0.1:8000/api/login',{
            method:'post',
            body:JSON.stringify(
                this.state
            ),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then(function(response){
            response.json().then(function (resp) {
                console.log(resp);
            })
        })
    }

    handleChange(event){
        this.setState({
            // Computed property names
            // keys of the objects are computed dynamically
            [event.target.name] : event.target.value
        })
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(email,password) {
        const errors = {
           email:'',password:''
        };

        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(this.state.touched.email && !email)
            errors.email = 'Email is required';
        else if(this.state.touched.email && !pattern.test(email))
            errors.email = 'Please enter valid email address';

        if(this.state.touched.password && !password)
            errors.password = 'Password is required';
        else if(this.state.touched.password && password.length < 8)
            errors.password = 'Password must be 8 characters long';

        return errors;
    }
    render() {
        const errors = this.validate(this.state.email,this.state.password);
        return (
            <div>
                <Header />
                <section id="login" className="d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4" data-aos="fade-right">
                                <div className="section-title">
                                    <h2>Login</h2>
                                </div>
                            </div>

                            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                                <form role="form"
                                      className="php-email-form mt-4">
                                    <div className="form-row">
                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">E-Mail Address</label>
                                        <div className="col-md-6 form-group">
                                            <input type="email" name="email" className="form-control" id="email"
                                                   placeholder="Email"
                                                   value = {this.state.email}
                                                   valid={errors.email === ''}
                                                   invalid={errors.email !== ''}
                                                   onBlur={this.handleBlur('email')}
                                                   onChange={this.handleChange}
                                            />
                                            <p
                                                style={{
                                                    color:"red","padding-top":"10px"
                                                }}>
                                                {errors.email} </p>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <label htmlFor="staticPassword" className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-md-6 form-group">
                                            <input type="password" name="password" className="form-control" id="password"
                                                   placeholder="Password"
                                                   value = {this.state.password}
                                                   valid={errors.password === ''}
                                                   invalid={errors.password !== ''}
                                                   onBlur={this.handleBlur('password')}
                                                   onChange={this.handleChange}
                                            />
                                            <p
                                                style={{
                                                    color:"red","padding-top":"10px"
                                                }}>
                                                {errors.password} </p>
                                        </div>
                                    </div>
                                    {errors.email || errors.password

                                        ?
                                        <div className="text-center">
                                            <button className="btn" style={{
                                                "background-color": "#00805d",
                                                "color": "white",
                                                "opacity": "60%"
                                            }} disabled={true}>Submit
                                            </button>
                                        </div>
                                        :

                                        <div className="text-center">
                                            <button onClick={this.handleSubmit} className="btn"
                                                    style={{"background-color": "#00805d", "color": "white"}}
                                                    type="submit">Login
                                            </button>
                                        </div>
                                    }
                                </form>
                            </div>
                        </div>

                    </div>

                </section>
                <Footer />
            </div>
        );
    }
}

export default Login;