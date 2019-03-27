import React, {Component} from 'react';

class center extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className={'center'}>
                {children}
            </div>
        );
    }
}

export default center;