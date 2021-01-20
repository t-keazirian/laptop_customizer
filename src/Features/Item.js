import React from 'react';
import slugify from 'slugify';

class Item extends React.Component {
  render() {
    const feature = this.props.feature;

    const options = this.props.features[feature].map(item => {
      console.log(item);
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === this.props.selected.name}
            onChange={() => this.props.updateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({this.props.currFormat.format(item.cost)})
          </label>
        </div>
      );
    });
    
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default Item;