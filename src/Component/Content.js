import React from 'react'
import { translate } from 'react-i18next';
import traveling from './../img/traveling.png';
import music from './../img/music.png';
import gaming from './../img/gaming.png';

const Content = ({ t, i18n }) => (
  <div className="content">
    <div>
      <h2 className="fullname">{t('fullname')}</h2>
      <h3 className="career">Fullstack Developer</h3>
      <div className="introduction">
        {t('introduction')}
      </div>
    </div>
    <div className="module">
      <h3>{t('education&experience')}</h3>
      <div className="section">
        <div className="left">
          <b>{t('uet')}</b>
          <div>2012-2016</div>
        </div>
        <div className="right">
          {t('education_c')}
        </div>
      </div>
      <div className="section">
        <div className="left">
          <b>SAOKHUE LTD</b>
          <div>2016-2017</div>
        </div>
        <div className="right">
          {t('saokhuee_c')}
        </div>
      </div>
      <div className="section">
        <div className="left">
          <b>HBLab JSC</b>
          <div>2017-2018</div>
        </div>
        <div className="right">
          {t('hblab_c')}
        </div>
      </div>
      <div className="section">
        <div className="left">
          <b>Rabita JSC</b>
          <div>2019-{t('now')}</div>
        </div>
        <div className="right">
          {t('rabita_c')}
        </div>
      </div>
    </div>
    <div className="module">
      <h3>{t('project')}</h3>
      <div className="section">
        <div className="left">
          <b>{t('sachmem')}</b>
          <div>2016-2017</div>
        </div>
        <div className="right">
          {t('sachmem_c')}
          <br />
          - Link: <a href="https://sachmem.vn" target="_blank" rel="noopener noreferrer">https://sachmem.vn</a>
        </div>
      </div>
      <div className="section">
        <div className="left">
          <b>Safe Cracker</b>
          <div>2017-2018</div>
        </div>
        <div className="right">
          {t('safecracker_c')}
        </div>
      </div>
      <div className="section">
        <div className="left">
          <b>TMS</b>
          <div>2018</div>
        </div>
        <div className="right">
          {t('tms_c')}
        </div>
      </div>
      <div className="section">
        <div className="left">
          <b>BDR</b>
          <div>2018</div>
        </div>
        <div className="right">
          {t('bdr_c')}
        </div>
      </div>
      <div className="section">
        <div className="left">
          <b>Online Examination</b>
          <div>2018</div>
        </div>
        <div className="right">
          {t('online-exam_c')}
          <br />
          - Link: <a href="https://dethionline-demo.herokuapp.com" target="_blank" rel="noopener noreferrer">https://dethionline-demo.herokuapp.com</a>
        </div>
      </div>
      <div className="section">
        <div className="left">
          <b>Talk to Stranger</b>
          <div>2018</div>
        </div>
        <div className="right">
          {t('talk-to-stranger_c')}
          <br />
          - Link: <a href="http://talk-to-stranger-demo.herokuapp.com/" target="_blank" rel="noopener noreferrer">http://talk-to-stranger-demo.herokuapp.com/</a>
        </div>
      </div>
      <div className="section">
        <div className="left">
          <b>RabiDO</b>
          <div>2019</div>
        </div>
        <div className="right">
          {t('rabido_c')}
        </div>
      </div>
      <div className="section">
        <div className="left">
          <b>E-School</b>
          <div>2019</div>
        </div>
        <div className="right">
          {t('eschool_c')}
        </div>
      </div>
    </div>
    <div className="module">
      <h3>{t('hobbies')}</h3>
      <div className="section">
        <div className="hobby">
          <img src={traveling} alt="traveling" />
          {t('traveling')}
        </div>
        <div className="hobby">
          <img src={music} alt="music" />
          {t('music')}
        </div>
        <div className="hobby">
          <img src={gaming} alt="gaming" />
          {t('gaming')}
        </div>
      </div>
    </div>
  </div>
)

export default translate()(Content)
