import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap'
import Details from './Details';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: {
        comments: []
      }
    };
  }

  onDishSelect(dish) {
    this.setState({ 
      selectedDish: dish,
    });
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-lg-6 col-md-5 my-2">
        <Card 
          onClick={() => this.onDishSelect(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>


      );
    });

    return (
      <div className="container">
      <div className="row">
          {menu}
      </div>

      <Details selectedDish={this.state.selectedDish}  />
      
  </div>
    );
  }
}

export default Menu;