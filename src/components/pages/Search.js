import React, {Component} from 'react';

class Search extends Component {
    constructor(){
        super();
        this.state={
            blood:'',
            location:'',
            showBlood:false,
            showLocation:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        const {blood,location} = this.state
        event.preventDefault()
        alert(` 
      --- Success ---\n
      ____Your Details____\n  
      Blood : ${blood} 
      Location : ${location} 

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
                <section id="login" className="d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2" data-aos="fade-right">
                                <div className="section-title">
                                    <h2>Search</h2>
                                </div>
                            </div>

                            <div className="col-lg-5 form-check" data-aos="fade-up" data-aos-delay="100">
                                <div className="section-title" style={{"padding-top":"10%"}}>
                                    <h4>Select for Search</h4>
                                </div>
                                <div className="form-row justify-content-center pt-4">
                                    <div className="col-md-6 form-group">
                                        <input type="checkbox" name="location" className="form-check-input" id="flexCheckDefault"
                                               value="" onClick={()=>{this.setState({showBlood:!this.state.showBlood})}}/>
                                        <h5 className="form-check-label" htmlFor="flexCheckDefault">
                                            Search blood group
                                        </h5>
                                    </div>
                                </div>
                                <div className="form-row justify-content-center">
                                    <div className="col-md-6 form-group">
                                        <input type="checkbox" name="location" className="form-check-input" id="flexCheckDefault"
                                               value="" onClick={()=>{this.setState({showLocation:!this.state.showLocation})}}  />
                                        <h5 className="form-check-label" htmlFor="flexCheckDefault">
                                            Search with Location
                                        </h5>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
                                <form role="form"
                                      className="php-email-form" style={{"padding-top":"20%"}}>

                                    {
                                        this.state.showBlood ?
                                        <div className="form-row">
                                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Blood Group</label>
                                            <div className="col-md-6 form-group">
                                                <select className="form-control" name="blood"
                                                        value = {this.state.blood}
                                                        onChange={this.handleChange}
                                                >
                                                    <option>----------Select----------</option>
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
                                        : null
                                    }
                                    {
                                        this.state.showLocation ?
                                    <div className="form-row mt-4">
                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Location</label>
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="location" className="form-control" id="location"
                                                   placeholder="location"
                                                   value = {this.state.location}
                                                   onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                        :null
                                    }
                                    {
                                        this.state.showBlood || this.state.showLocation ?
                                    <div className="text-center">
                                        <button onClick={this.handleSubmit} className="btn" style={{"background-color":"#00805d","color":"white"}} type="submit">Search</button>
                                    </div>
                                            :null
                                    }
                                </form>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-2" data-aos="fade-right">
                                <div className="section-title">
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </div>
        );
    }
}

export default Search;