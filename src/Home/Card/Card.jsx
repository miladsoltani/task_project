import React from 'react';
import styles from './Card.module.css'
import card from '../../img/logo.jpg'
const Card = () => {
    return (
            <div className={styles.Container}>
                <img src={card} alt="card" />
                <h1>title</h1>
                <p>price</p>
            </div>
    );
};

export default Card;