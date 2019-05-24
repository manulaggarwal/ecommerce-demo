import React from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/backtotop.css';

const cx = classNames.bind(styles);

class BackToTop extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return <button title='Back to top' className={cx('backToTop-scroll')} 
               onClick={ () => { this.scrollToTop(); }}>
                <span className={cx('backToTop-arrow-up', 'fas fa-chevron-up')}></span>
              </button>;
   }
} 


export default BackToTop;