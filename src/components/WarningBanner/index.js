import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const WarningBanner = ({ visibility, onClick }) => {
  const BannerClassnames = classnames(
    `${styles.warningBannerContainer}`,
    'flex',
    visibility ? 'visible' : 'invisible'
  );

  return (
    <div className={BannerClassnames} id="warning">
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
};

WarningBanner.propTypes = {
  visibility: PropTypes.bool,
  onClick: PropTypes.func,
};

export default WarningBanner;
