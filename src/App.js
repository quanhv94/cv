import React, { Component } from 'react';
import Sidebar from './Component/Sidebar';
import Content from './Component/Content';
import { translate } from 'react-i18next';
import flagVn from './img/flag_vn.jpg';
import flagUk from './img/flag_uk.jpg';

class App extends Component {
  animateProgress() {
    const progressBars = document.querySelectorAll('.progress span')
    for (let bar of progressBars) {
      if (!bar.classList.contains('active') && bar.getBoundingClientRect().bottom < window.innerHeight) {
        bar.classList.add('active')
      }
    }
  }
  componentDidMount() {
    setTimeout(this.animateProgress, 500)
    window.addEventListener('scroll', this.animateProgress)
  }
  render() {
    const i18n = this.props.i18n
    return (
      <div className="page-wrapper">
        <div className="language-panel">
          <img onClick={() => i18n.changeLanguage('vn')} src={flagVn} alt="flag vn" />
          <img onClick={() => i18n.changeLanguage('en')} src={flagUk} alt="flag uk" />
        </div>
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default translate()(App);
