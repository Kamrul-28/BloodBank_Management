import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Donors extends Component {
    constructor(props) {
        super(props);
        this.state={
            items:[],
            filtered:[],
        }
    }
    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/donors')
            .then(res => res.json())
            .then(json=>{
                this.setState({
                        items:json
                    }
                )
            })

    }
    getKeyword = (event) => {
        //console.log(event.target.value)
        let keyword = event.target.value;
        let upKeyword=keyword.toUpperCase();
        console.log('')
         let filtered = this.state.items.filter((item)=>{
             return item.blood.indexOf(upKeyword) > -1
         });
        this.setState({
            filtered
        })
        // console.log(filtered)
    }

  render() {
      let itemsFiltered = this.state.filtered;
      let itemsWhole = this.state.items;
      const newItems = itemsFiltered.length === 0 ? itemsWhole : itemsFiltered;

      const card= newItems.map((item, index) => (
          <div key={index} className="col-md-4 d-flex align-items-stretch">
              <div  className="card mb-4">
                  <div className="card-header"
                       style={{"background-color":"#fff"}}>
                      <h3><a>Blood Group :<span style={{"color":"red"}}> {item.blood}</span></a></h3>
                  </div>
                  <div className="card-body">
                      <h5>Name : {item.name}</h5>
                      <h5>Address : {item.address}</h5>
                      <h5>Contact : {item.contact}</h5>
                      <h5>Weight : {item.weight}</h5>
                      <h5>Status : <span className="text-success">Available</span></h5>
                      <div className="text-center">
                          <Link to={{
                              pathname: '/profile',
                              id:item.id
                          }}

                          ><button className="btn"
                                     style={{"background-color":"#00805d",
                                         "color":"white" ,
                                         "float":"right",
                                         "margin-top":"20px"
                                     }}
                                     type="submit">View Profile</button>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
          ))

    return(
        <div>
                <section id="services" className="services section-bg">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-3">
                                <div className="section-title" data-aos="fade-right">
                                     <h2>Donors</h2>
                                </div>
                            </div>
                            <div className="col-lg-3">

                            </div>
                            <div className="col-lg-4 mr-auto">
                                <div className="section-title" data-aos="fade-right">
                                    <input name="blood" onChange={this.getKeyword} className="form-control" type="text" placeholder="Enter Blood Group"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {card}
                        </div>
                    </div>
                </section>
        </div>
    );
  }
}

export default Donors;