import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

module.exports = React.createClass({
  render() {
    const category = (this.props.category) ? `/${this.props.category}` : '';
    return (
      <ul className="app-nav">
        <li>
          <Link to={`/trending${category}`} onlyActiveOnIndex activeClassName="active">
            <i className="icon icon-md material-icons">show_chart</i>{' '}
            <span className="hidden-xs"><FormattedMessage id="Trending" /></span>
          </Link>
        </li>
        <li>
          <Link to={`/hot${category}`} activeClassName="active">
            <i className="icon icon-md material-icons">whatshot</i>{' '}
            <span className="hidden-xs"><FormattedMessage id="Hot" /></span>
          </Link>
        </li>
        <li>
          <Link to={`/cashout${category}`} activeClassName="active">
            <i className="icon icon-md material-icons">schedule</i>{' '}
            <span className="hidden-xs"><FormattedMessage id="Payout Time" /></span>
          </Link>
        </li>
        <li>
          <Link to={`/created${category}`} activeClassName="active">
            <i className="icon icon-md material-icons">fiber_new</i>{' '}
            <span className="hidden-xs"><FormattedMessage id="New" /></span></Link>
        </li>
        <li>
          <Link to={`/active${category}`} activeClassName="active">
            <i className="icon icon-md material-icons">track_changes</i>{' '}
            <span className="hidden-xs"><FormattedMessage id="Active" /></span>
          </Link>
        </li>
      </ul>
    );
  }
});