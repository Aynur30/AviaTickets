import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import classes from './TicketsList.module.scss';
import Ticket from '../Ticket/Ticket';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import applyFilters from '../Utils/applyFilters';
import applySort from '../Utils/applySort';

const NoTicketsMessage = (
  <div className={classes['ticketsList__no-tickets']}>
    Рейсов, подходящих под заданные фильтры, не найдено
  </div>
);

function TicketsList({ tickets, showedCount, filters, currentTab, loading }) {
  const ticketsList = tickets
    .map(({ carrier, price, segments }, index) => (
      <li key={index}>
        <Ticket carrier={carrier} price={price} segments={segments} />
      </li>
    ))
    .filter((ticket) => applyFilters(ticket, filters))
    .sort((ticketPrev, ticketCurrent) =>
      applySort(ticketPrev, ticketCurrent, currentTab)
    )
    .slice(0, showedCount);

  const showMoreButtonDisplay =
    showedCount > ticketsList.length ? null : <ShowMoreButton />;

  const noTicketsMessageDisplay =
    ticketsList.length === 0 &&  !loading ? NoTicketsMessage : null;

  return (
    <ul className={classes.ticketsList}>
      {ticketsList}
      {noTicketsMessageDisplay}
      {showMoreButtonDisplay}
    </ul>
  );
}

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      carrier: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      segments: PropTypes.arrayOf(
        PropTypes.shape({
          origin: PropTypes.string.isRequired,
          destination: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          stops: PropTypes.arrayOf(PropTypes.string).isRequired,
          duration: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  showedCount: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired, // You should replace this with the actual shape of the filters object
  currentTab: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  tickets: state.tickets,
  showedCount: state.showedCount,
  filters: state.filters,
  currentTab: state.currentTab,
  loading: state.loading,
});

export default connect(mapStateToProps)(TicketsList);
