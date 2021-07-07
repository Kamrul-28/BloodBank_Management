import React, { Component } from 'react';
import Kamrul from '../images/kamrul.jpg'
import Footer from './Footer';
import Header from './Header';

class Team extends Component {
    
  render() {
    return(
        <div>
            <Header />
            <section id="team" className="team">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="section-title" data-aos="fade-right">
                                <h2>Team</h2>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="member" data-aos="zoom-in" data-aos-delay="100">
                                        <div className="pic"><img src={Kamrul} className="img-fluid"/></div>
                                        <div className="member-info">
                                            <h4>Md.Kamrul Hasan</h4>
                                            <span>Student</span>
                                            <p>Computer Science and Engineering Discipline  Khulna University</p>
                                            <div className="social">
                                                <a className="btn btn-social-icon btn-facebook" href=""><i className="fa fa-facebook"></i></a>
                                                <a className="btn btn-social-icon btn-linkedin" href=""><i className="fa fa-linkedin"></i></a>
                                                <a className="btn btn-social-icon btn-twitter" href=""><i className="fa fa-twitter"></i></a>
                                                <a className="btn btn-social-icon" href=""><i className="fa fa-envelope-o"></i></a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="member" data-aos="zoom-in" data-aos-delay="100">
                                            <div className="pic"><img src={Kamrul} className="img-fluid"/></div>
                                            <div className="member-info">
                                                <h4>Md.Kamrul Hasan</h4>
                                                <span>Student</span>
                                                <p>Computer Science and Engineering Discipline  Khulna University</p>
                                                <div className="social">
                                                    <a className="btn btn-social-icon btn-facebook" href=""><i className="fa fa-facebook"></i></a>
                                                    <a className="btn btn-social-icon btn-linkedin" href=""><i className="fa fa-linkedin"></i></a>
                                                    <a className="btn btn-social-icon btn-twitter" href=""><i className="fa fa-twitter"></i></a>
                                                    <a className="btn btn-social-icon" href=""><i className="fa fa-envelope-o"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            <Footer />
        </div>
    );
  }
}

export default Team;