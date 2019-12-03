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

const EVENTS = [
  { title: 'CyberForce 2019', description: 'The CyberForce Competition is a cyber workforce development competition that focuses on the defensive/hardening nature of energy cyber infrastructure.' },
  { title: 'NCL Fall Season', description: 'The National Cyber League (NCL) is a biannual cybersecurity competition for high school and college students. The competition consists of a series of challenges that allows students to demonstrate their ability to identify hackers from forensic data, break into vulnerable websites, recover from ransomware attacks, and more. Students compete in the NCL to build their skills, obtain scouting reports of their performance for hiring purposes, and to represent their school. ' },
  { title: 'PRCCDC 2020', description: 'testing' },
  { title: 'NCL Spring Season', description: 'The National Cyber League (NCL) is a biannual cybersecurity competition for high school and college students. The competition consists of a series of challenges that allows students to demonstrate their ability to identify hackers from forensic data, break into vulnerable websites, recover from ransomware attacks, and more. Students compete in the NCL to build their skills, obtain scouting reports of their performance for hiring purposes, and to represent their school. ' },
  { title: 'Panopoly', description: 'testing' },
  { title: 'CyberForce 2020', description: 'The CyberForce Competition is a cyber workforce development competition that focuses on the defensive/hardening nature of energy cyber infrastructure.' }
];

class Competitions extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0, previous: 0
    };
  }

  render () {
    const currentEvent = EVENTS[this.state.value];
    return (
      <div className='Competitions'>
        <NavbarCustom activeTab='/competitions' />
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
        <div className='event'>
          <h1>{currentEvent.title}</h1>
          <p>{currentEvent.description}</p>
        </div>
      </div>
    );
  }
}

export default Competitions;
