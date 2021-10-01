/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';

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
  const [hidden, setHidden] = useState(true);

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

  return (
    <Container id="mainCategories" className={`${styles.categoriesContainer}`}>
      <h1 className={styles.title}>Kategorie główne</h1>
      <Container className={`${styles.categoryWrapper} flex indent`}>
        {categoriesData.map((category) => (
          <>
            <Category
              category={category.name}
              className={styles[category.className]}
              src={images[category.img]}
            />
            {category.name === 'Dla Dzieci' && (
              <SubCategories category={category.name} subCategory={category.subCategories} />
            )}
          </>
        ))}

        {/* <Category category="Motoryzacja" className={styles.motoryzacja} src={motoryzacja} />
        <Category category="Nieruchomości" className={styles.nieruchomosci} src={nieruchomosci} />
        <Category category="Praca" className={styles.praca} src={praca} />
        <Category category="Dom i Ogród" className={styles.dom} src={dom} />
        <Category category="Elektronika" className={styles.elektronika} src={elektronika} />
        <Category category="Moda" className={styles.moda} src={moda} />
        <Category category="Rolnictwo" className={styles.rolnictwo} src={rolnictwo} />
        <Category category="Zwierzęta" className={styles.zwierzeta} src={zwierzeta} />
        <Category category="Dla Dzieci" className={styles.dzieci} src={dzieci} />
        <Category category="Sport i Hobby" className={styles.sport} src={sport} />
        <Category category="Muzyka i Edukacja" className={styles.muzyka} src={muzyka} />
        <Category category="Usługi i Firmy" className={styles.uslugi} src={usługi} />
        <Category category="Noclegi" className={styles.noclegi} src={noclegi} />
        <Category category="Oddam za darmo" className={styles.oddam} src={oddam} />
        <Category category="Zamienię" className={styles.zamienie} src={zamienie} />
        <Category
          category="Praca dodatkowa"
          className={styles.pracaDodatkowa}
          src={pracaDodatkowa}
        />
        <Category category="Fixly - znajdź fachowca!" className={styles.fixly} src={fixly} />
        <Category
          category="Przesyłka za 1 zł w AGD drobne"
          image="przesylka1zl"
          src={przesylka1zl}
          className={styles.przesylka1zl}
        /> */}
      </Container>
    </Container>
  );
};

export default Categories;
