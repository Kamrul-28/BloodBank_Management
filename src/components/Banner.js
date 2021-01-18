import React, {Component} from 'react';

class Banner extends Component {
    render() {
        return (
            <div>
                <section id="hero" className="d-flex align-items-center">
                    <div className="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
                        <h1>BloodBank Management System</h1>
                        <h2>Donate Blood  |  Make a difference  |  Save life</h2>
                        <a href="#about" className="btn-get-started scrollto">Manage Blood</a>
                    </div>
                </section>
            </div>
        );
    }
}

export default Banner;