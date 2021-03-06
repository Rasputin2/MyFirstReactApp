import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

  constructor(props) {
      super(props);

      console.log("Menu Component Constructed.");

  }

  render() {
      console.log("Renders menue component.");
      const menu = this.props.dishes.map((dish) => {
          return (
            <div className="col-12 col-md-5 m-1">
              <Card key={dish.id} onClick={()=> this.props.onClick(dish.Id)}>
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
          </div>
      );
  }
}

export default Menu;