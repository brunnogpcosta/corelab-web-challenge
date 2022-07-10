import React, { ReactNode, useState } from "react";
import styles from "./Card.module.scss";
import styled from 'styled-components'

import icoHeart from '../../assets/heart.svg'
import icoFavoriteHeart from '../../assets/heartFav.svg'
import icoTrash from '../../assets/trash.svg'
import icoEdit from '../../assets/edit.svg'

import { deleteVehicles, favoriteVehicles } from "../../lib/api";
import { useNavigate } from "react-router-dom";




interface ICard {
  title: string;
  children: ReactNode;
  colorCard: string;
  is_favorite: boolean;
  id: number
  hasChanged: () => void;
}

const Card = (props: ICard) => {

  const navigate = useNavigate()
  
  const handleDeleteCar = async (id: number) => {
    try {
      const vehicle = await deleteVehicles(id)
      props.hasChanged()
    }
    catch (err) {
      console.log("Error: " + err)
    }
  }


  const handleSetFavorite = async (id: number) => {
    try {
      const vehicle = await favoriteVehicles(id, !props.is_favorite)
      props.hasChanged()
      //console.log("chamou", vehicle)
    }
    catch (err) {
      console.log("Error: " + err)
    }
  }

  const navigateToEdit = (id: number) => {
    //navigate to /edit
    navigate('/edit/' + id);
  };


  return (
    <div className={styles.Card} style={{ backgroundColor: props.colorCard }}>
      <div className={styles.ContainerCard}>
        <h2>{props.title}</h2>
        <div className={styles.ContainerIcons}>
          <img src={icoEdit} onClick={() => navigateToEdit(props.id)}></img>
          <img src={icoTrash} onClick={() => handleDeleteCar(props.id)}></img>
          {props.is_favorite == false ?

            <img src={icoHeart} onClick={() => { handleSetFavorite(props.id) }}></img>
            :
            <img src={icoFavoriteHeart} style={{ filter: "invert(57%) sepia(38%) saturate(5896%) hue-rotate(329deg) brightness(86%) contrast(126%)", width: '24px', height: '24px' }} onClick={() => handleSetFavorite(props.id)}></img>

          }

        </div>
      </div>

      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Card;
