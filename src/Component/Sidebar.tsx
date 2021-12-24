import React from 'react';
import avatar from './../img/avatar.jpg';
//@ts-ignore
import SimpleLineIcon from 'react-simple-line-icons';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
  const { t } = useTranslation();
  return (
    <div className="sidebar">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="phone">
        <SimpleLineIcon name="phone" />
        0335131075
      </div>
      <div className="email">
        <SimpleLineIcon name="envelope" />
        quanhv94@gmail.com
      </div>
      <div className="website">
        <SimpleLineIcon name="globe" />
        <a href="https://github.com/quanhv94" target="_blank" rel="noopener noreferrer">
          github.com/quanhv94
        </a>
      </div>
      <div className="module">
        <h3>{t('personal')}</h3>
        <label>{t('birthdate')}:</label>
        <label>{t('birthdate_c')}</label>
        <label>{t('sex')}:</label>
        <label>{t('male')}</label>
        <label>{t('address')}:</label>
        <label>{t('address_c')}</label>
      </div>
      <div className="module">
        <h3>{t('language')}</h3>
        <label>{t('vietnamese')}</label>
        <label className="progress">
          <span style={{ width: '100%' }}></span>
        </label>
        <label>{t('english')}</label>
        <label className="progress">
          <span style={{ width: '40%' }}></span>
        </label>
      </div>
      <div className="module">
        <h3>{t('skill')}</h3>
        <label>Node.js</label>
        <label className="progress">
          <span style={{ width: '80%' }}></span>
        </label>
        <label>Javascript</label>
        <label className="progress">
          <span style={{ width: '80%' }}></span>
        </label>
        <label>HTML5, CSS3</label>
        <label className="progress">
          <span style={{ width: '80%' }}></span>
        </label>
        <label>ReactJS</label>
        <label className="progress">
          <span style={{ width: '80%' }}></span>
        </label>
        <label>jQuery</label>
        <label className="progress">
          <span style={{ width: '70%' }}></span>
        </label>
        <label>Bootstrap</label>
        <label className="progress">
          <span style={{ width: '70%' }}></span>
        </label>
        <label>MySQL</label>
        <label className="progress">
          <span style={{ width: '80%' }}></span>
        </label>
        <label>MongoDB</label>
        <label className="progress">
          <span style={{ width: '70%' }}></span>
        </label>
      </div>
      <div className="module">
        <h3>{t('software')}</h3>
        <label>VS Code</label>
        <label className="progress">
          <span style={{ width: '80%' }}></span>
        </label>
        <label>Sublime Text</label>
        <label className="progress">
          <span style={{ width: '80%' }}></span>
        </label>
        <label>Photoshop</label>
        <label className="progress">
          <span style={{ width: '50%' }}></span>
        </label>
      </div>
    </div>
  );
}
