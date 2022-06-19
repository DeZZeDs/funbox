import React from 'react';
import styles from './Home.module.scss';
import Products from "../../Components/Products/Products";

const Home: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Products/>
        </div>
    );
};

export default Home;
