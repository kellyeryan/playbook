import React from 'react';
import PropTypes from "prop-types";

const propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
};

class TimelineVertical extends React.Component {
  render() {
    return (
      <div className="pb_timeline_vertical">
        <span>TIMELINE VERTICAL CONTENT</span>
      </div>
    )
  }
}

TimelineVertical.propTypes = propTypes;

export default TimelineVertical;
