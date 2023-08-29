const applySort = (ticketPrev, ticketCurr, currentTab) => {
    const prev = ticketPrev.props.children.props;
    const curr = ticketCurr.props.children.props;
    switch (currentTab) {
      case 'faster':
        return prev.segments[0].duration - curr.segments[0].duration;
      case 'cheaper':
        return prev.price - curr.price;
      default:
        return 0;
    }
  };

export default applySort;