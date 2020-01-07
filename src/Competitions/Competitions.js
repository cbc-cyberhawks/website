import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import './Competitions.css';
import NavbarCustom from '../NavbarCustom/NavbarCustom';
import EVENTS from './events';

class Competitions extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0, previous: 0
    };
  }

  render () {
    const dates = [];
    EVENTS.forEach(event => {
      dates.push(event.date);
    });
    const currentEvent = EVENTS[this.state.value];
    return (
      <div className='Competitions'>
        <NavbarCustom activeTab='/competitions' />
        <h1>Competitions</h1>
        <div className='timeline'>
          <HorizontalTimeline
            labelWidth={150}
            index={this.state.value}
            styles={{ background: 'white', outline: '#c0c0c0', foreground: '#2E57A1' }}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={dates}
          />
        </div>
        <div className='event'>
          <h2>{currentEvent.title}</h2>
          <p>{currentEvent.description}</p>
          <img className='logo' alt='event' src={currentEvent.image} />
        </div>
      </div>
    );
  }
}

export default Competitions;
