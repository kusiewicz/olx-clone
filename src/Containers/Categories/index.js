/* eslint-disable arrow-body-style */
import React from 'react';

import styles from './styles.module.scss';

import { Container, Category } from '../../Components';

const Categories = () => {
  return (
    <Container id="mainCategories" className={styles.container}>
      <Container className={`${styles.categoryWrapper} flex indent`}>
        <Category category="Motoryzacja" image="Assets/Images/motoryzacja.png" />
        <Category category="Nieruchomości" image="Assets/Images/motoryzacja.png" />
        <Category category="Praca" image="Assets/Images/motoryzacja.png" />
        <Category category="Dom i Ogród" image="Assets/Images/motoryzacja.png" />
        <Category category="Elektronika" image="Assets/Images/motoryzacja.png" />
        <Category category="Moda" image="Assets/Images/motoryzacja.png" />
        <Category category="Rolnictwo" image="Assets/Images/motoryzacja.png" />
        <Category category="Zwierzęta" image="Assets/Images/motoryzacja.png" />
        <Category category="Dla Dzieci" image="Assets/Images/motoryzacja.png" />
        <Category category="Sport i Hobby" image="Assets/Images/motoryzacja.png" />
        <Category category="Muzyka i Edukacja" image="Assets/Images/motoryzacja.png" />
        <Category category="Usługi i Firmy" image="Assets/Images/motoryzacja.png" />
        <Category category="Noclegi" image="Assets/Images/motoryzacja.png" />
        <Category category="Oddam za darmo" image="Assets/Images/motoryzacja.png" />
        <Category category="Zamienię" image="Assets/Images/motoryzacja.png" />
        <Category category="Praca dodatkowa" image="Assets/Images/motoryzacja.png" />
        <Category category="Fixly - znajdź fachowca!" image="Assets/Images/motoryzacja.png" />
        <Category category="Przesyłka za 1 zł w AGD drobne" image="Assets/Images/motoryzacja.png" />
      </Container>
    </Container>
  );
};

export default Categories;
