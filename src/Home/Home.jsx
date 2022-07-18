import React, { useEffect, useRef } from 'react';
import Header from '../Common/Header';
import styles from './Home.module.css'
import Card from './Card/Card';
import Title from '../Common/Title';
const Home = () => {

    Title('TaskAsan | home')

    const h1 = useRef()

    useEffect(()=>{

        const msg = 'add your Tasks in website'
        let i = 0

        setInterval(() => {
            i++
            h1.current.innerText = msg.substring(0,i)
            if ( i > msg.length ){
                i = 0
            }
        }, 300);

    })

    return (
        <>
            <Header/>
            <div className={styles.Container}>
                <h1 ref={h1}>add your Tasks in website</h1>
                <div className={styles.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    );
};

export default Home;