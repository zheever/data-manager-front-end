import React, { Component } from 'react';
import './index.less';
import Card from '../../components/card';

class notFoundPage extends Component {
  render() {
    return (
      <div className={'not-found'}>
        <Card className={'not-found-card'}>
          <div className={'tip-text-wrapper'}>
            <div className={'not-found-container'}>
              <div className={'left-container'}>
                <h1>404</h1>
                <h4 className={'tip-text'}>Sorry, page not found</h4>
                <p>
                  It will be as simple as Occidental in fact, it will be
                  Occidental to an English person
                </p>
                <div className={'to-home-btn'}> Back to Dashboard</div>
              </div>
              <div className={'error-img-wrapper'}>
                <div className={'error-img'} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default notFoundPage;
