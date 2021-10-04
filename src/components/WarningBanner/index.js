import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const WarningBanner = ({ onClick }) => (
  <div className={`flex ${styles.warningBannerContainer}`} id="warning">
    <div className="flex cntr">
      <div className={`inblock ${styles.icon}`} />
      <p className={`inblock ${styles.text}`}>
        Nigdy nie podawaj danych karty bankowej, aby otrzymać pieniądze za przedmiot sprzedany z
        Przesyłką OLX!
      </p>
    </div>
    <div className="flex cntr">
      <a
        href="https://blog.olx.pl/2020/06/18/uwaga-na-phishing/"
        className={`inblock ${styles.subText}`}
      >
        Dowiedz się więcej na blogu OLX
      </a>
      <i className={`cancelSign ${styles.cancelIcon}`} onClick={() => onClick()} />
    </div>
  </div>
);

WarningBanner.propTypes = {
  onClick: PropTypes.func,
};

export default WarningBanner;
