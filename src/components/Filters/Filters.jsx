import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import classes from './Filters.module.scss';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { filtersNames, switchFilter } from '../../store/actions';
const { all, zero, one, two, three } = filtersNames;

function Filters({
  all,
  zero,
  one,
  two,
  three,
  switchAll,
  switchZero,
  switchOne,
  switchTwo,
  switchThree,
}) {
  return (
    <div className={classes.filters}>
      <h5 className={classes.filters__title}>Количество пересадок</h5>
      <ul className={classes.filters__list}>
        <li>
          <FilterCheckbox
            text="Все"
            id="all"
            checked={all}
            onChange={switchAll}
          />
        </li>
        <li>
          <FilterCheckbox
            text="Без пересадок"
            id="none"
            checked={zero}
            onChange={switchZero}
          />
        </li>
        <li>
          <FilterCheckbox
            text="1 пересадка"
            id="one"
            checked={one}
            onChange={switchOne}
          />
        </li>
        <li>
          <FilterCheckbox
            text="2 пересадки"
            id="two"
            checked={two}
            onChange={switchTwo}
          />
        </li>
        <li>
          <FilterCheckbox
            text="3 пересадки"
            id="three"
            checked={three}
            onChange={switchThree}
          />
        </li>
      </ul>
    </div>
  );
}



Filters.propTypes = {
  all: PropTypes.bool.isRequired,
  zero: PropTypes.bool.isRequired,
  one: PropTypes.bool.isRequired,
  two: PropTypes.bool.isRequired,
  three: PropTypes.bool.isRequired,
  switchAll: PropTypes.func.isRequired,
  switchZero: PropTypes.func.isRequired,
  switchOne: PropTypes.func.isRequired,
  switchTwo: PropTypes.func.isRequired,
  switchThree: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  all: state.filters.all,
  zero: state.filters.zero,
  one: state.filters.one,
  two: state.filters.two,
  three: state.filters.three,
});
const mapDispatchToProps = (dispatch) => {
  const switchHandler = bindActionCreators(switchFilter, dispatch);
  return {
    switchAll: () => switchHandler(all),
    switchZero: () => switchHandler(zero),
    switchOne: () => switchHandler(one),
    switchTwo: () => switchHandler(two),
    switchThree: () => switchHandler(three),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);












