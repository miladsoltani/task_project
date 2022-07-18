import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Common/Header';
import styles from './Task.module.css'
import Title from '../Common/Title';
const Task = () => {

    Title('TaskAsan | task')

    useEffect(()=>{
        axios.get('http://localhost:8000/products').then(response=>setProducts(response.data))
    },[])

    const [ products , setProducts ] = useState([])
    const [ newProduct , setNewProduct ] = useState('')

    const removeHnadler = id => {
        axios.delete(`http://localhost:8000/products/${id}`)
        setProducts(products.filter(i=>i.id!==id))
    }

    const submitHandler = e => {
            e.preventDefault()
            const newProducts = {
                id : products.length + 1 ,
                title : newProduct 
            }
            axios.post('http://localhost:8000/products',newProducts).then( response => setProducts(response.data) ) && window.location.reload()
    }

    return (
        <>
            <Header/>
            <form className={styles.form} onSubmit={submitHandler}>
                <input type="text" onChange={e=>setNewProduct(e.target.value)} value={newProduct} placeholder="add your product ..." maxLength={30}/>
                <button className="fa fa-plus-square"></button>
            </form>
            {
                products.map(product=>
                    <div className={styles.Container} key={product.id}>
                        <h1>{product.title}</h1>
                        <button onClick={()=>removeHnadler(product.id)} className="fa fa-trash"></button>
                    </div>)
            }
        </>
    );
};

export default Task;


