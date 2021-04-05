import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import './i18n';
import Sidebar from './Component/Sidebar';
import Content from './Component/Content';
import flagVn from './img/flag_vn.jpg';
import flagUk from './img/flag_uk.jpg';

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const animateProgress = _.throttle(() => {
      const progressBars: any = document.querySelectorAll('.progress span');
      for (let bar of progressBars) {
        if (!bar.classList.contains('active') && bar.getBoundingClientRect().bottom < window.innerHeight) {
          bar.classList.add('active');
        }
      }
    }, 200);
    setTimeout(animateProgress, 500);
    window.addEventListener('scroll', animateProgress);
    return () => window.removeEventListener('scroll', animateProgress);
  }, []);

  return (
    <div className="page-wrapper">
      <div className="language-panel">
        <img onClick={() => i18n.changeLanguage('vi')} src={flagVn} alt="flag vn" />
        <img onClick={() => i18n.changeLanguage('en')} src={flagUk} alt="flag uk" />
      </div>
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
