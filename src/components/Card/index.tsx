import React, { ReactNode, useState } from "react";
import styles from "./Card.module.scss";
import styled from 'styled-components'

import icoHeart from '../../assets/heart.svg'
import icoTrash from '../../assets/trash.svg'
import icoEdit from '../../assets/edit.svg'


interface ICard {
  title: string;
  children: ReactNode;
  colorCard: string;
}

const Card = (props: ICard) => {



  return (
    <div className={styles.Card} style={{backgroundColor: props.colorCard}}>
      <div className={styles.ContainerCard}>
        <h2>{props.title}</h2>
        <div className={styles.ContainerIcons}>
          <img src={icoEdit}></img>
          <img src={icoTrash}></img>
          <img src={icoHeart}></img>
        </div>
      </div>

      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Card;
