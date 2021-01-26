import React, { Component } from 'react';

class Contact extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            contact:'',
            message:'',
            touched: {
                name:false,
                message:false,
                contact:false,

            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleSubmit(event){
        const {name,contact,message} = this.state
        event.preventDefault()
        alert(` 
      --- Success ---\n
      ____Your Details____\n  
      Name : ${name} 
      contact : ${contact} 
      Address : ${message} 

    `)
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

    validate(contact,name,message) {
        const errors = {
            contact:'',name:'', message:''
        };

        const reg = /^\d+$/;
        if (this.state.touched.contact && !reg.test(contact))
            errors.contact = 'Contact Number should contain only numbers';

        if(this.state.touched.message && !message)
            errors.message = 'Message is required';

        if(this.state.touched.name && !name)
            errors.name = 'Name is required';


        console.log(errors);
        return errors;
    }

  render() {
      const errors = this.validate(this.state.contact,this.state.name,this.state.message);
    return(
        <div>
            <section id="contact" className="contact">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <div className="section-title">
                            <h2>Contact</h2>
                            </div>
                        </div>

                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                            <iframe style={{border:0 , width: "100%",height: "270"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.0070168755124!2d89.53173441491512!3d22.80220388506517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff85490c50d28f%3A0xadae6f7b93b7069a!2sKhulna%20University!5e0!3m2!1sen!2sbd!4v1610955053204!5m2!1sen!2sbd"
                                    frameborder="0" allowfullscreen></iframe>
                            <div className="info mt-4">
                            <i className="fa fa-map-marker"></i>
                            <h4>Location:</h4>
                            <p>Khulna University , Sher-E-Bangla Rd, Khulna 9208</p>
                            </div>
                            <div className="row">
                            <div className="col-lg-6 mt-4">
                                <div className="info">
                                    <i className="fa fa-envelope-o"></i>
                                <h4>Email:</h4>
                                <p>kamrul1728@cseku.ac.bd</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="info w-100 mt-4">
                                <i className="fa fa-phone"></i>
                                <h4>Call:</h4>
                                <p>+88 01516705104</p>
                                </div>
                            </div>
                            </div>

                            <form  role="form" className="php-email-form mt-4">
                            <div className="form-row">
                                <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name"
                                       placeholder="Your Name"
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
                                <div className="validate"></div>
                                </div>
                                <div className="col-md-6 form-group">
                                <input type="number" className="form-control" name="contact" id="email" placeholder="Your Contact No"
                                       value = {this.state.contact}
                                       valid={errors.contact === ''}
                                       invalid={errors.contact !== ''}
                                       onBlur={this.handleBlur('contact')}
                                       onChange={this.handleChange}
                                />
                                    <p
                                        style={{
                                            color:"red","padding-top":"10px"
                                        }}>
                                        {errors.contact} </p>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"
                                          value = {this.state.message}
                                          valid={errors.message === ''}
                                          invalid={errors.message !== ''}
                                          onBlur={this.handleBlur('message')}
                                          onChange={this.handleChange}
                                ></textarea>
                                <p
                                    style={{
                                        color:"red","padding-top":"10px"
                                    }}>
                                    {errors.message} </p>
                                <div className="validate"></div>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                                {errors.contact || errors.message || errors.name
                                    ?
                                    <div className="text-center">
                                        <button style={{"opacity":"60%"}} type="submit" disabled={true}>Send Message</button>
                                    </div>
                                    :
                                    <div className="text-center">
                                        <button type="submit" onClick={this.handleSubmit}>Send Message</button>
                                    </div>
                                }
                            </form>
                        </div>
                        </div>

                    </div>
                </section>
        </div>
    );
  }
}

export default Contact;