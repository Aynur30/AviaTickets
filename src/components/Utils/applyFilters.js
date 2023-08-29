const applyFilters = (ticket, filters) => {
    const { all, zero, one, two, three } = filters;
    const stops = ticket.props.children.props.segments[0].stops.length;
    return (
      all ||
      (zero && stops === 0) ||
      (one && stops === 1) ||
      (two && stops === 2) ||
      (three && stops === 3)
    );
  };

export default applyFilters;