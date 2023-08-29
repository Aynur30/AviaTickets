import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import classes from './ShowMoreButton.module.scss';
import { showMoreTickets } from '../../store/actions';

function ShowMoreButton({ clickHandler }) {
  return (
    <button className={classes.showMoreButton} onClick={clickHandler}>
      Показать ещё 5 билетов!
    </button>
  );
}

ShowMoreButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};



const mapDispatchToProps = (dispatch) => ({
  clickHandler: () => dispatch(showMoreTickets()),
});

export default connect(null, mapDispatchToProps)(ShowMoreButton);
