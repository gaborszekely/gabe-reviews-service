import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './css/tabSwitcher.css';

class TabSwitcher extends Component {
  state = {
    selected: 'reviews',
  };

  constructor(props) {
    super(props);
    this.selectTab = this.selectTab.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  selectTab(e, tab) {
    const { update } = this.props;
    update(tab);
    this.setState({ selected: tab });
  }

  handleKeyPress(e) {
    this.setState(e);
  }

  render() {
    const { selected } = this.state;
    return (
      <div className={styles.tabswitch__wrapper}>
        <div
          className={`${styles.tabswitch__tab} ${
            selected === 'reviews' ? styles.active : ''
          }`}
          role="button"
          tabIndex={0}
          onClick={e => this.selectTab(e, 'reviews')}
          onKeyPress={this.handleKeyPress}
        >
          <FontAwesomeIcon icon="edit" size="lg" />
          <span className={styles.tabNumbers}>1,200</span>
          <span className={styles.tabCategory}>Reviews</span>
        </div>
        <div
          className={`${styles.tabswitch__tab} ${
            this.state.selected === 'photos' ? styles.active : ''
          }`}
          role="button"
          tabIndex={0}
          onClick={e => this.selectTab(e, 'photos')}
        >
          <FontAwesomeIcon icon="camera" size="lg" />
          <span className={styles.tabNumbers}>1,455</span>
          <span className={styles.tabCategory}>Photos</span>
        </div>
        <div
          className={`${styles.tabswitch__tab} ${
            this.state.selected === 'qa' ? styles.active : ''
          }`}
          onClick={e => this.selectTab(e, 'qa')}
        >
          <FontAwesomeIcon icon="comments" size="lg" />
          <span className={styles.tabNumbers}>745</span>
          <span className={styles.tabCategory}>Q {'&'} A</span>
        </div>
        <div
          className={`${styles.tabswitch__tab} ${
            this.state.selected === 'room_tips' ? styles.active : ''
          }`}
          onClick={e => this.selectTab(e, 'room_tips')}
        >
          <FontAwesomeIcon icon="lightbulb" size="lg" />
          <span className={styles.tabNumbers}>1,334</span>
          <span className={styles.tabCategory}>Room Tips</span>
        </div>
      </div>
    );
  }
}

TabSwitcher.propTypes = {
  update: PropTypes.func.isRequired,
};

export default TabSwitcher;
