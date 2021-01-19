import React from 'react';
import Processor from './Processor';
import OperatingSystem from './OperatingSystem';
import VideoCard from './VideoCard';
import Display from './Display';

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
        <Processor
          selected={this.props.selected}
          features={FEATURES.Processor}
          updateFeature={this.props.updateFeature}
          currFormat={this.props.currFormat}
        />
        <OperatingSystem
          selected={this.props.selected}
          features={FEATURES['Operating System']}
          updateFeature={this.props.updateFeature}
          currFormat={this.props.currFormat}
        />
        <VideoCard
          selected={this.props.selected}
          features={FEATURES['Video Card']}
          updateFeature={this.props.updateFeature}
          currFormat={this.props.currFormat}
        />
        <Display
          selected={this.props.selected}
          features={FEATURES.Display}
          updateFeature={this.props.updateFeature}
          currFormat={this.props.currFormat}
        />
      </div>
    )
  }
}

export default Features;