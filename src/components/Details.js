import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

export class Details extends Component {

    renderDish(dish) {
        if (dish != null)
            return (
                <Card >
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

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

    }
    
    render() {
        const renderComment = (comment) => {
            return (

                <div key={comment.id} className="col-12 my-2">
                    <p>
                        <span> {comment.comment}</span><br />
                        <span>--{comment.author} ,{comment.date}</span>
                    </p>
                </div>


            );
        }
        var c="Comments"
        return (
            <div className="row">
                <div className="col-lg-6 col-md-5">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-lg-6 col-md-5">
                    <span > <h2>{this.props.selectedDish? c:null}</h2></span>
                    { this.props.selectedDish.comments? this.props.selectedDish.comments.map((comment) => renderComment(comment)): null }
                </div>
            </div>
        )
    }
}

export default Details
