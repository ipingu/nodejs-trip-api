import React from 'react';

class TripActions extends React.Component {

  handleClickWriteSummary() {
    const messages = this.state.messages.concat(<TripMessage title="Message xx" />);
    this.setState( {
      messages: messages
    })
  }

   render() {
      return (
        <section>
          <ul class="actions">
            <li>
              <button id="showStoryForm">Write story</button>
            </li>
          </ul>
        </section>
      );
   }
}
export default TripActions;
