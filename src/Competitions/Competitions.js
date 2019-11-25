import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import './Competitions.css';
import NavbarCustom from '../NavbarCustom/NavbarCustom';

const VALUES = [
  '11/14/2019',
  '11/16/2019',
  '3/22/2020',
  '3/23/2020',
  '8/15/2020',
  '11/16/2020'
];

class Competitions extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0, previous: 0
    };
  }

  render () {
    let event = '';
    switch (this.state.value) {
      case 0:
        event = 'CyberForce 2019';
        break;
      case 1:
        event = 'NCL Fall Season';
        break;
      case 2:
        event = 'PRCCDC 2020';
        break;
      case 3:
        event = 'NCL Spring Season';
        break;
      case 4:
        event = 'Panopoly';
        break;
      default:
        event = '';
        break;
    }
    return (
      <div className='Competitions'>
        <NavbarCustom activeTab='/competitions' />
        <br />
        <br />
        <div className='timeline'>
          <HorizontalTimeline
            labelWidth={150}
            index={this.state.value}
            styles={{ background: 'white', outline: '#c0c0c0', foreground: '#2E57A1' }}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={VALUES}
          />
        </div>
        <div className='text-center'>
          <h1>{event}</h1>
          <br />
          {this.state.value}
        </div>
      </div>
    );
  }
}

export default Competitions;
