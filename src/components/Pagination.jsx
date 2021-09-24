/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import _ from 'lodash';

export default class Pagination extends Component {
  render() {
    const {
      itemsCount, pageSize, onPageChange, currPage,
    } = this.props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
      <div>
        <nav className="nav-pagination">
          <ul className="ul-list">
            {pages.map((page) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li
                key={page}
                className={page === currPage ? 'page-active' : ''}
                onClick={() => onPageChange(page)}
              >
                <a>{page}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
