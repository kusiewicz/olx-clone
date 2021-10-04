import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles.module.scss';

import { Container, Category, SubCategories } from '../../Components';

import categoriesData from '../../Fixtures/categories.json';

import {
  dom,
  dzieci,
  elektronika,
  fixly,
  moda,
  motoryzacja,
  muzyka,
  nieruchomosci,
  noclegi,
  oddam,
  pracaDodatkowa,
  praca,
  przesylka1zl,
  rolnictwo,
  sport,
  usługi,
  zamienie,
  zwierzeta,
} from '../../Assets/Images';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState({});
  const [visibility, setVisibility] = useState(false);

  const images = {
    dom,
    dzieci,
    elektronika,
    fixly,
    moda,
    motoryzacja,
    muzyka,
    nieruchomosci,
    noclegi,
    oddam,
    pracaDodatkowa,
    praca,
    przesylka1zl,
    rolnictwo,
    sport,
    usługi,
    zamienie,
    zwierzeta,
  };

  /* Shows a list of Subcategories for the currently selected category.
    If the list is already open - closes it */
  const categoryHandler = (category) => {
    setActiveCategory(category);
    if (category.subCategories) {
      if (activeCategory.name === category.name) {
        setVisibility((e) => !e);
      } else {
        setVisibility(true);
      }
    }
  };

  return (
    <Container id="mainCategories" className={`${styles.categoriesContainer}`}>
      <h1 className={styles.title}>Kategorie główne</h1>
      <Container className={`${styles.categoryWrapper} flex indent`}>
        {categoriesData.map((category) => (
          <React.Fragment key={uuidv4()}>
            <Category
              category={category.name}
              className={styles[category.className]}
              src={images[category.img]}
              onClick={() => {
                categoryHandler(category);
              }}
            />
            {/* 'Dla dzieci' category component is placed in the middle of the categories, so
            rendering SubCategories after it will allow
            to place SubCategories component between the two rows Categories components */}
            {category.name === 'Dla Dzieci' && visibility && (
              <SubCategories
                category={activeCategory.name}
                subCategory={activeCategory.subCategories}
              />
            )}
          </React.Fragment>
        ))}
      </Container>
    </Container>
  );
};

export default Categories;
