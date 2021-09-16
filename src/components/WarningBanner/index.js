import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const WarningBanner = ({ visibility, onClick }) => {
  const BannerClassnames = classnames(
    `${styles.container}`,
    'flex',
    visibility ? 'visible' : 'invisible'
  );

  return (
    <div className={BannerClassnames}>
      <div className={`${styles.leftWrapper} flex cntr`}>
        <div className={styles.icon} />
        <p className={styles.text}>
          Nigdy nie podawaj danych karty bankowej, aby otrzymać pieniądze za przedmiot sprzedany z
          Przesyłką OLX!
        </p>
      </div>
      <div className={`${styles.rightWrapper} flex cntr`}>
        <a href="https://blog.olx.pl/2020/06/18/uwaga-na-phishing/" className={styles.subText}>
          Dowiedz się więcej na blogu OLX
        </a>
        <i
          role="presentation"
          className={`cancelSign ${styles.cancelIcon}`}
          onClick={() => onClick()}
        />
      </div>
    </div>
  );
};

WarningBanner.propTypes = {
  visibility: PropTypes.string,
  onClick: PropTypes.func,
};

export default WarningBanner;
