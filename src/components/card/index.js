import React, { Component } from 'react';
import cx from 'classnames';
import './index.less';

class Card extends Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={cx('card', className)}>
        <div className={'card-body'}>{children}</div>
      </div>
    );
  }
}

export default Card;
