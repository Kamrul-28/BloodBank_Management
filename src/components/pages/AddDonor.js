import React, {Component} from 'react';
import Footer from '../Footer';
import Header from '../Header';
class AddDonor extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            blood:'',
            weight:'',
            address:'',
            contact:'',
            password:'',
            cpassword:'',
            touched: {
                name: false,
                email:false,
                blood:false,
                weight:false,
                address:false,
                contact:false,
                password:false,
                cpassword:false,
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBlur = this.handleBlur.bind(this);
    }


    handleSubmit(event){
        const {name,email,contact,blood,weight,address,password,cpassword } = this.state
        event.preventDefault()
        console.log(this.state)
        fetch('http://127.0.0.1:8000/api/addDonor',{
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
                alert("Successfully Registered !!");
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

    validate(name,email,contact,blood,weight,address,password,cpassword) {
        const errors = {
            name: '',email:'',contact:'',blood:'',weight:'',address:'',password:'',cpassword:''
        };

        if (this.state.touched.name && name.length < 3)
            errors.name = 'First Name should be >= 3 characters';
        else if (this.state.touched.name && name.length > 50)
            errors.name = 'First Name should be <= 50 characters';

        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(this.state.touched.email && !pattern.test(email))
            errors.email = 'Please enter valid email address';

        const reg = /^\d+$/;
        if (this.state.touched.contact && !reg.test(contact))
            errors.contact = 'Contact Number should contain only numbers';

        if(this.state.touched.blood && !blood)
            errors.blood = 'Blood group is required';
        if(this.state.touched.weight && !weight)
            errors.weight = 'Weight is required';
        if(this.state.touched.address && !address)
            errors.address = 'Address is required';
        if(this.state.touched.password && !password)
            errors.password = 'Password is required';
        else if(this.state.touched.password && password.length < 8)
            errors.password = 'Password must be 8 characters long';

        if(this.state.touched.cpassword && !cpassword)
            errors.cpassword = 'Confirm Password is required';
        else if(this.state.touched.cpassword && cpassword.length < 8)
            errors.cpassword = 'Confirm Password must be 8 characters long';
        else if(this.state.touched.cpassword && password !== cpassword)
            errors.cpassword = 'Confirm Password should be same as password';

        console.log(errors);
        return errors;
    }

    render() {
        const errors = this.validate(this.state.name,this.state.email,this.state.contact,this.state.blood,
            this.state.weight,this.state.address,this.state.password,this.state.cpassword);

        return (
            <div>
                <Header />
                <section id="addDonor" className="d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4" data-aos="fade-right">
                                    <div className="section-title">
                                        <h2>Become a Donor</h2>
                                    </div>
                                </div>

                                <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                                    <form role="form"
                                          className="php-email-form mt-4">
                                        <div className="form-row">
                                            <label htmlFor="staticName" className="col-sm-2 col-form-label">Name</label>
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="name" className="form-control" id="name"
                                                       placeholder="Name" data-rule="minlen:2"
                                                       data-msg="Please enter at least 2 chars"
                                                       value = {this.state.name}
                                                       valid={errors.name === ''}
                                                       invalid={errors.name !== ''}
                                                       onBlur={this.handleBlur('name')}
                                                       onChange={this.handleChange}
                                                />
                                                       <p
                                                       style={{
                                                           color:"red","padding-top":"10px"
                                                       }}>
                                                       {errors.name} </p>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">E-Mail Address</label>
                                            <div className="col-md-6 form-group">
                                                <input type="email" name="email" className="form-control" id="email"
                                                       placeholder="Email" value = {this.state.email}
                                                       valid={errors.email === ''}
                                                       invalid={errors.email !== ''}
                                                       onBlur={this.handleBlur('email')}
                                                       onChange={this.handleChange}/>
                                                <p
                                                    style={{
                                                        color:"red","padding-top":"10px"
                                                    }}>
                                                    {errors.email} </p>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="staticContact" className="col-sm-2 col-form-label">Contact No</label>
                                            <div className="col-md-6 form-group">
                                                <input type="number" name="contact" className="form-control" id="email"
                                                       placeholder="Contact No"
                                                       value = {this.state.contact}
                                                       valid={errors.contact === ''}
                                                       invalid={errors.contact !== ''}
                                                       onBlur={this.handleBlur('contact')}
                                                       onChange={this.handleChange}/>
                                                <p
                                                    style={{
                                                        color:"red","padding-top":"10px"
                                                    }}>
                                                    {errors.contact} </p>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="staticBlood" className="col-sm-2 col-form-label">Blood Group</label>
                                            <div className="col-md-6 form-group">
                                                <select className="form-control" name="blood"
                                                        value = {this.state.blood}
                                                        valid={errors.blood === ''}
                                                        invalid={errors.blood !== ''}
                                                        onBlur={this.handleBlur('blood')}
                                                        onChange={this.handleChange} >
                                                    <option disabled>blood</option>
                                                    <option>A+</option>
                                                    <option>A-</option>
                                                    <option>B+</option>
                                                    <option>A-</option>
                                                    <option>O+</option>
                                                    <option>O-</option>
                                                    <option>AB+</option>
                                                    <option>AB-</option>
                                                </select>
                                                <p
                                                    style={{
                                                        color:"red","padding-top":"10px"
                                                    }}>
                                                    {errors.blood} </p>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="staticWeight" className="col-sm-2 col-form-label">Weight</label>
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="weight" className="form-control" id="weight"
                                                       placeholder="Weight"
                                                       value = {this.state.weight}
                                                       valid={errors.weight === ''}
                                                       invalid={errors.weight !== ''}
                                                       onBlur={this.handleBlur('weight')}
                                                       onChange={this.handleChange}/>
                                                <p
                                                    style={{
                                                        color:"red","padding-top":"10px"
                                                    }}>
                                                    {errors.weight} </p>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="staticAddress" className="col-sm-2 col-form-label">Address</label>
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="address" className="form-control" id="address"
                                                       placeholder="Address"
                                                       value = {this.state.address}
                                                       valid={errors.address === ''}
                                                       invalid={errors.address !== ''}
                                                       onBlur={this.handleBlur('address')}
                                                       onChange={this.handleChange}/>
                                                <p
                                                    style={{
                                                        color:"red","padding-top":"10px"
                                                    }}>
                                                    {errors.address} </p>
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
                                                       onChange={this.handleChange}/>
                                                <p
                                                    style={{
                                                        color:"red","padding-top":"10px"
                                                    }}>
                                                    {errors.password} </p>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="staticPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                                            <div className="col-md-6 form-group">
                                                <input type="password" name="cpassword" className="form-control" id="cpassword"
                                                       placeholder="Confirm Password"
                                                       value = {this.state.cpassword}
                                                       valid={errors.cpassword === ''}
                                                       invalid={errors.cpassword !== ''}
                                                       onBlur={this.handleBlur('cpassword')}
                                                       onChange={this.handleChange}
                                                />
                                                <p
                                                    style={{
                                                        color:"red","padding-top":"10px"
                                                    }}>
                                                    {errors.cpassword} </p>
                                            </div>
                                        </div>
                                        {errors.name || errors.email || errors.address || errors.password || errors.cpassword ||
                                            errors.contact || errors.weight || errors.blood
                                            ?
                                            <div className="text-center">
                                                <button  className="btn" style={{"background-color":"#00805d","color":"white" , "opacity":"60%"}} disabled={true}>Submit</button>
                                            </div>
                                            :
                                            <div className="text-center">
                                                <button onClick={this.handleSubmit} className="btn" style={{"background-color":"#00805d","color":"white"}} type="submit">Submit</button>
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

export default AddDonor;