import React, {Component} from 'react';

class AddDonor extends Component {
    constructor(props){
        super(props)
        this.state = { name:'',email:'', blood:'', address:'',contact:'',password:'',cpassword:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(event){
        const {name,email,contact,blood,address,password,cpassword } = this.state
        event.preventDefault()
        alert(` 
      --- Success ---\n
      ____Your Details____\n 
      Email : ${email} 
      Name : ${name} 
      contact : ${contact} 
      Address : ${address} 
      blood : ${blood} 
      password:${password}
      password:${cpassword}
    `)
    }

    handleChange(event){
        this.setState({
            // Computed property names
            // keys of the objects are computed dynamically
            [event.target.name] : event.target.value
        })
    }


    render() {
        return (
            <div>
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
                                                       onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">E-Mail Address</label>
                                            <div className="col-md-6 form-group">
                                                <input type="email" name="email" className="form-control" id="email"
                                                       placeholder="Email" value = {this.state.email}
                                                       onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="staticContact" className="col-sm-2 col-form-label">Contact No</label>
                                            <div className="col-md-6 form-group">
                                                <input type="number" name="contact" className="form-control" id="email"
                                                       placeholder="Contact No"
                                                       value = {this.state.contact}
                                                       onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="staticBlood" className="col-sm-2 col-form-label">Blood Group</label>
                                            <div className="col-md-6 form-group">
                                                <select className="form-control" name="blood"
                                                        value = {this.state.blood}
                                                        onChange={this.handleChange} >
                                                    <option>-----------  Select Blood Group -------------</option>
                                                    <option>A+</option>
                                                    <option>A-</option>
                                                    <option>B+</option>
                                                    <option>A-</option>
                                                    <option>O+</option>
                                                    <option>O-</option>
                                                    <option>AB+</option>
                                                    <option>AB-</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="staticAddress" className="col-sm-2 col-form-label">Address</label>
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="address" className="form-control" id="address"
                                                       placeholder="Address"
                                                       value = {this.state.address}
                                                       onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="staticPassword" className="col-sm-2 col-form-label">Password</label>
                                            <div className="col-md-6 form-group">
                                                <input type="password" name="password" className="form-control" id="password"
                                                       placeholder="Password"
                                                       value = {this.state.password}
                                                       onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="staticPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                                            <div className="col-md-6 form-group">
                                                <input type="password" name="cpassword" className="form-control" id="cpassword"
                                                       placeholder="Confirm Password"
                                                       value = {this.state.cpassword}
                                                       onChange={this.handleChange}/>
                                            </div>
                                        </div>


                                        <div className="text-center">
                                            <button onClick={this.handleSubmit} className="btn" style={{"background-color":"#00805d","color":"white"}} type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>

                </section>
            </div>
        );
    }
}

export default AddDonor;