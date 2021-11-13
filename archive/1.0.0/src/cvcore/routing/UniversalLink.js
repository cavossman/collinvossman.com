import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class UniversalLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInternalLink: false,
    };
  }

  componentDidMount() {
    if (this.props.to.startsWith('/')) this.setState({isInternalLink: true});
  }

  render() {
    let { children, to, className, target, ...rest} = this.props;
    if (this.state.isInternalLink) {
      return (
        <Link className={ className } to={ to } { ...rest }>{ children || ' ' }</Link>
      );
    } else {
      return (
        <a className={ className } href={ to } target={ target } { ...rest }>{ children || ' ' }</a>
      );
    }
  }
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string,
};

Link.defaultProps = {
  className: undefined,
};

export default UniversalLink;
