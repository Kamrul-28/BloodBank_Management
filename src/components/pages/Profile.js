import React, {Component} from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state={
            items:[]
        }
        console.log(this.props.location.id);
    }
   componentDidMount() {
       fetch('http://127.0.0.1:8000/api/donors')
           .then(res => res.json())
           .then(json=>{
               this.setState({
                       items:json,
                       filtered:[],
                   }
               )
           })
    }

    render() {
        const keyword =this.props.location.id
        let filtered = this.state.items.filter((item)=>{
            return item.id == keyword;
        });
        const profile= filtered.map((item, index) => (
            <div key={index} className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title" data-aos="fade-right">
                                <h2 style={{"float":"left"}}>{item.name}</h2>
                                <button className="btn"
                                        style={{"background-color":"#00805d",
                                            "color":"white" ,
                                            "float":"right",
                                            "margin-top":"20px"
                                        }}
                                        type="submit">Edit Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <table className="table align-middle">
                                <thead>
                                <tr className="text-danger">
                                    <th scope="col">Blood Group</th>
                                    <td>{item.blood}</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="col">Address</th>
                                    <td>{item.address}</td>

                                </tr>
                                <tr>
                                    <th scope="col">Contact No</th>
                                    <td>{item.contact}</td>

                                </tr>
                                <tr>
                                    <th scope="col">Weight</th>
                                    <td>{item.weight}</td>

                                </tr>
                                <tr>
                                    <th scope="col">Height</th>
                                    <td>{item.height}</td>

                                </tr>
                                <tr>
                                    <th scope="col">Gender</th>
                                    <td>{item.gender}</td>

                                </tr>
                                <tr>
                                    <th scope="col">Date_of_birth</th>
                                    <td>{item.date_of_birth}</td>

                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

            </div>
        ))

        return (
            <div>
                {console.log(filtered)}
                <section id="services" className="services section-bg">
                    {profile}
                </section>

            </div>
        );
    }
}

export default Profile;