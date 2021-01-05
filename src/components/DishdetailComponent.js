import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments) {

        if (comments != null) {

            const co = comments.map((c) => {
                return (
                    <li key={c.id}>
                        <p> {c.comment}</p>
                        <p> -- {c.author}, {c.date}</p>
                    </li>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1" >
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {co}
                    </ul>
                </div>
            );

        }
        else
            return (
                <div></div>
            );
    }


    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        const dish = this.props.dish;
        if (dish == null)
            return (<div></div>);
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                {this.renderComments(dish.comments)}
            </div>
        );
    }
}

export default DishDetail;