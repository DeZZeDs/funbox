import React from 'react';
import productsData from '../../Data/db.json';
import ProductItem from "./ProductItem/ProductItem";
import styles from './Products.module.scss';
export interface IProduct {
    id: number,
    title: string,
    taste: string,
    description: string,
    serving: string,
    giftCount: string,
    giftText: string,
    weight: string,
    available: boolean,
    selectedText: string

}

const Products: React.FC = () => {
    return (
        <div className={styles.products__wrapper}>
            <h1 className={styles.title}>Ты сегодня покормил кота?</h1>
            <ul className={styles.products__list}>
                {
                    productsData.products.map((product: IProduct, index) => (
                        <ProductItem key={index} {...product}/>
                    ))
                }
            </ul>

        </div>
    );
};

export default Products;
