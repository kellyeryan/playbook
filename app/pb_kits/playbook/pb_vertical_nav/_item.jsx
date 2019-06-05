import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  active: PropTypes.bool
};

const defaultProps = {
  text: "Hello Item",
  link: "#",
  active: false
};

class VerticalNavItem extends Component {
  render() {
    const { text, link, active } = this.props;
    return (
      <li className={"vertical_nav_list_border_item" + active}>
        <a className="vertical_nav_list_item_link"
            href={link}
        >
          <span className="vertical_nav_list_item_link-text">{text}</span>
        </a>
      </li>
    );
  }
}

VerticalNavItem.propTypes = propTypes;
VerticalNavItem.defaultProps = defaultProps;

export default VerticalNavItem;