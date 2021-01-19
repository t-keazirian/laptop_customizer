import React from 'react';
import slugify from 'slugify';

class VideoCard extends React.Component {
  render() {
    const feature = 'Video Card';

    const options = this.props.features.map(item => {
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
          <h3>Video Card</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default VideoCard;