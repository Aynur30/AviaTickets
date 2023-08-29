import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import classes from './TabsPanel.module.scss';
import Tab from '../Tab/Tab';
import { tabsNames, toggleTab } from '../../store/actions';

const { cheaper, faster } = tabsNames;

function TabsPanel({ currentTab, showCheaper, showFaster }) {
  return (
    <ul className={classes.tabs}>
      <li>
        <Tab
          checked={currentTab === 'cheaper'}
          id="cheap"
          text="Самый дешевый"
          onChange={showCheaper}
        />
      </li>
      <li>
        <Tab
          checked={currentTab === 'faster'}
          id="fast"
          text="Самый быстрый"
          onChange={showFaster}
        />
      </li>
    </ul>
  );
}

TabsPanel.propTypes = {
  currentTab: PropTypes.string.isRequired,
  showCheaper: PropTypes.func.isRequired,
  showFaster: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentTab: state.currentTab,
});

const mapDispatchToProps = (dispatch) => {
  const toggleHandler = bindActionCreators(toggleTab, dispatch);
  return {
    showCheaper: () => toggleHandler(cheaper),
    showFaster: () => toggleHandler(faster),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabsPanel);

