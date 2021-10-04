import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.module.scss';

const SubCategories = ({ category, subCategory }) => (
  <div className={styles.subCategoriesContainer} role="list">
    <div role="listitem" className={styles.subCategoriesHeader}>
      <i className={`icon-right-open-big ${styles.icon}`} />
      <a href="placeholder" className="inblock">
        Zobacz wszystkie ogłoszenia
      </a>
      <h3 className={`inblock ${styles.category}`}>&nbsp;{`w ${category}`}</h3>
    </div>
    <div className={styles.subCategories}>
      <div className={styles.subCategoriesList}>
        {subCategory.map((item) => (
          <li key={item} className={`inblock ${styles.subCategoriesPoint}`}>
            <a href="placeholder">
              <i className={`icon-right-open-big ${styles.icon}`} />
              <h3 className={`inblock ${styles.subCategory}`}>{item}</h3>
            </a>
          </li>
        ))}
      </div>
    </div>
  </div>
);

SubCategories.propTypes = {
  category: propTypes.string,
  subCategory: propTypes.arrayOf(propTypes.string),
};

export default SubCategories;
