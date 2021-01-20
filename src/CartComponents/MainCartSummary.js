import React from 'react';
import CartTotal from './CartTotal';
import Summary from './Summary';

class MainCartSummary extends React.Component {
  render() {
    return (

      <section className="main__summary">
        <h2>Your cart</h2>
        <Summary 
          currFormat={this.props.currFormat}
          selected={this.props.selected}
        />
        <CartTotal 
          selected={this.props.selected}
          currFormat={this.props.currFormat}
        />
      </section>
      
    )
  }
}

export default MainCartSummary;