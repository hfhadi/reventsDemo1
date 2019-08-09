import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { connect } from "react-redux";
import {createEvent, updateEvent, deleteEvent} from '../eventActions';

const mapState = state => ({
  events: state.events
});

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
}

class EventDashboard extends Component {

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
