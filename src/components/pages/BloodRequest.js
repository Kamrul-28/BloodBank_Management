import React, {Component} from 'react';

class BloodRequest extends Component {

    constructor(props){
        super(props)
        this.state = {
            blood:'',
            contact:'',
            location:'',
            patient:'',
            diseases:'',
            touched: {
                blood:false,
                location:false,
                contact:false,
                patient:false,
                diseases:false,

            }}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleSubmit(event){
        const {blood,contact,location,patient,diseases} = this.state
        event.preventDefault()
        alert(` 
      --- Success ---\n
      ____Your Details____\n  
      contact : ${contact} 
      Address : ${location} 
      blood : ${blood} 
      Patient:${patient}
      diseases:${diseases}
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

    validate(contact,blood,location,patient,diseases) {
        const errors = {
            contact:'',blood:'', location:'', patient:'', diseases:'',
        };

        const reg = /^\d+$/;
        if (this.state.touched.contact && !reg.test(contact))
            errors.contact = 'Contact Number should contain only numbers';

        if(this.state.touched.blood && !blood)
            errors.blood = 'Blood group is required';

        if(this.state.touched.location && !location)
            errors.location = 'location is required';

        if(this.state.touched.patient && !patient)
            errors.patient = 'Patient Description is required';

        if(this.state.touched.diseases && !diseases)
            errors.diseases = 'Diseases Description is required';

        console.log(errors);
        return errors;
    }


    render() {
        const errors = this.validate(this.state.contact,this.state.blood,this.state.location,this.state.patient,this.state.diseases);
        return (
            <div>
                <section id="bloodRequest" className="d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4" data-aos="fade-right">
                                <div className="section-title">
                                    <h2>Blood Request</h2>
                                </div>
                            </div>

                            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                                <form  role="form"
                                      className="php-email-form mt-4">
                                    <div className="form-row">
                                        <label htmlFor="staticBlood" className="col-sm-2 col-form-label">Blood Group</label>
                                        <div className="col-md-6 form-group">
                                            <select className="form-control" name="blood"
                                                    value = {this.state.blood}
                                                    onChange={this.handleChange}
                                                    valid={errors.blood === ''}
                                                    invalid={errors.blood !== ''}
                                                    onBlur={this.handleBlur('blood')}
                                            >
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
                                            <p
                                                style={{
                                                    color:"red","padding-top":"10px"
                                                }}>
                                                {errors.blood} </p>
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
                                                   onChange={this.handleChange}
                                            />
                                            <p
                                                style={{
                                                    color:"red","padding-top":"10px"
                                                }}>
                                                {errors.contact} </p>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="staticContact" className="col-sm-2 col-form-label">Location</label>
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="location" className="form-control" id="location"
                                                   placeholder="Location"
                                                   value = {this.state.location}
                                                   valid={errors.location === ''}
                                                   invalid={errors.location !== ''}
                                                   onBlur={this.handleBlur('location')}
                                                   onChange={this.handleChange}
                                            />
                                            <p
                                                style={{
                                                    color:"red","padding-top":"10px"
                                                }}>
                                                {errors.location} </p>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="staticPatient" className="col-sm-2 col-form-label">Patient Description</label>
                                        <div className="col-md-6 form-group">
                                            <textarea className="form-control" name="patient" rows="3" data-rule="required" data-msg="Please write something for us" placeholder="Patient Description"
                                                      value = {this.state.patient}
                                                      valid={errors.patient === ''}
                                                      invalid={errors.patient !== ''}
                                                      onBlur={this.handleBlur('patient')}
                                                      onChange={this.handleChange}
                                            ></textarea>
                                            <p
                                                style={{
                                                    color:"red","padding-top":"10px"
                                                }}>
                                                {errors.patient} </p>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="staticDiseases" className="col-sm-2 col-form-label">Diseases Description</label>
                                        <div className="col-md-6 form-group">
                                            <textarea className="form-control" name="diseases" rows="3" data-rule="required" data-msg="Please write something for us" placeholder="Diseases Description"
                                                      value = {this.state.diseases}
                                                      valid={errors.diseases === ''}
                                                      invalid={errors.diseases !== ''}
                                                      onBlur={this.handleBlur('diseases')}
                                                      onChange={this.handleChange}
                                            ></textarea>
                                            <p
                                                style={{
                                                    color:"red","padding-top":"10px"
                                                }}>
                                                {errors.diseases} </p>
                                        </div>
                                    </div>
                                    { errors.location || errors.blood || errors.contact ||
                                    errors.patient || errors.diseases
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
            </div>
        );
    }
}

export default BloodRequest;