import React from 'react';
import Features from './Features';

class MainForm extends React.Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Features
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
          currFormat={this.props.currFormat}
        />
      </form>
    )
  }
}

export default MainForm;