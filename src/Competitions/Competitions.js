import React from 'react';
import { ActivityTimeline, TimelineMarker } from 'react-rainbow-components';
import HorizontalTimeline from 'react-horizontal-timeline';
import './Competitions.css';
import NavbarCustom from '../NavbarCustom/NavbarCustom';

const VALUES = [new Date('November 8, 2019'), new Date('November 16, 2019')];

class Competitions extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0, previous: 0
    };
  }

  render () {
    return (
      <div className='Competitions'>
        <NavbarCustom activeTab='/competitions' />
        <br />
        <br />
        <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
          <HorizontalTimeline

            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={VALUES}
          />
        </div>
        <div className='text-center'>
          {this.state.value}
        </div>
        <div id='timeline'>
          <ActivityTimeline>
            <TimelineMarker
              label='User Sign Up.'
              icon=' '
              datetime='Yesterday'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            />
          </ActivityTimeline>
        </div>
      </div>
    );
  }
}

export default Competitions;
