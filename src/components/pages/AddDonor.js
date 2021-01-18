import React, {Component} from 'react';

class AddDonor extends Component {
    render() {
        return (
            <div>
                <section id="addDonor" className="d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4" data-aos="fade-right">
                                    <div className="section-title">
                                        <h2 style={{"color":"#00805d"}}>Become a Donor</h2>
                                    </div>
                                </div>

                                <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                                    <form action="forms/contact.php" method="post" role="form"
                                          className="php-email-form mt-4">
                                        <div className="form-row">
                                            <label htmlFor="staticName" className="col-sm-2 col-form-label">Name</label>
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="name" className="form-control" id="name"
                                                       placeholder="Name" data-rule="minlen:2"
                                                       data-msg="Please enter at least 2 chars"/>
                                                <div className="validate"></div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">E-Mail Address</label>
                                            <div className="col-md-6 form-group">
                                                <input type="email" name="email" className="form-control" id="email"
                                                       placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="staticPassword" className="col-sm-2 col-form-label">Password</label>
                                            <div className="col-md-6 form-group">
                                                <input type="password" name="password" className="form-control" id="password"
                                                       placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="staticPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                                            <div className="col-md-6 form-group">
                                                <input type="password" name="password" className="form-control" id="password"
                                                       placeholder="Confirm Password" />
                                            </div>
                                        </div>


                                        <div className="text-center">
                                            <button className="btn" style={{"background-color":"#00805d","color":"white"}} type="submit">Submit</button>
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