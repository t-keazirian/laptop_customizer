import React from 'react';
import Item from './Item';
// import Item from t'i.

const FEATURES = {
  Processor: [
    {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
    {
      name: 'Professor X AMD Fire Breather with sidewinder technology',
      cost: 1200
    }
  ],
  "Operating System": [
    {
      name: 'Ubuntu Linux 16.04',
      cost: 200
    },
    {
      name: 'Bodhi Linux',
      cost: 300
    }
  ],
  "Video Card": [
    {
      name: 'Toyota Corolla 1.5v',
      cost: 1150.98
    },
    {
      name: 'Mind mild breeze 2000',
      cost: 1345
    }
  ],
  Display: [
    {
      name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      cost: 1500
    },
    {
      name: '15.3" HGTV (3840 x 2160) Home makeover edition',
      cost: 1400
    },
  ]
};

class Features extends React.Component {
  render() {
    return (
      <div>
        {Object.keys(FEATURES).map((feature, idx) => {
          return (
            <Item
              key={idx}
              selected={this.props.selected}
              features={FEATURES}
              feature={feature}
              updateFeature={this.props.updateFeature}
              currFormat={this.props.currFormat}
            />
          )
        })}
      </div>
    )
  }
}

export default Features;