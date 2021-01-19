import React, { Component } from 'react';

class Donors extends Component {  
  render() {
    return(
        <div>
             <footer id="footer">
                <div class="container d-md-flex py-4">

                    <div class="mr-md-auto text-center text-md-left">
                        <div class="copyright">
                        &copy; Copyright <strong><span>BloodBank</span></strong>. All Rights Reserved
                        </div>
                        <div class="credits">
                        
                        Designed by <a href="">Md.Kamrul Hasan</a>
                        </div>
                    </div>
                    <div class="social-links text-center text-md-right pt-3 pt-md-0">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                    </div>
                </footer>
        </div>
    );
  }
}

export default Donors;