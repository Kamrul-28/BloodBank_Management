import React, {Component} from 'react';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state={
            items:[],
            isloaded:false,
        }
    }
    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/profile')
            .then(res => res.json())
            .then(json=>{
                this.setState({
                        isloaded:true,
                        items:json
                    }
                )
            })

    }

    render() {
        return (
            <div>
                {
                    this.state.items.map((item, index) => (
                    <p kay={index}>{item.address} from {item.id}!</p>
                ))
                }
                
            </div>
        );
    }
}

export default EditProfile;