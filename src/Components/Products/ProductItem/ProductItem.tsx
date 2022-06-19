import React, {useState} from 'react';
import {IProduct} from "../Products";
import imageCat from '../../../Assets/Images/Photo.png';
import styles from './ProductItem.module.scss';

const ProductItem: React.FC<IProduct> = ({ id, title, taste, description, serving, giftCount,giftText, weight , available, selectedText}) => {
    const [active, setActive] = useState(false);
    const selectedClass = (active !== true) ? styles.product__card : styles.product__card + " " + styles.product__cardSelected;
    const disabledClass = (available === false) ? styles.product__cardDisabled : '';

    return (
        <li className={selectedClass + " " + disabledClass}
            onClick={() => (available === true) && setActive(prev => !prev)}>

            <div className={(active !== true) ? styles.product__wrapper : styles.product__wrapper + " " + styles.product__wrapperSelected}>
                {
                    available === false && <div className={styles.fade}></div>
                }
                <div className={styles.product__top}>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.taste}>{taste}</p>
                    <p className={styles.serving}><b>{serving}</b> порций</p>
                    <p className={styles.gift}><b>{giftCount}</b> {giftText}</p>
                </div>
                <div className={styles.product__cardMiddle}>
                    <div className={styles.product__middleImg}>
                        <img src={imageCat} alt={title}/>
                    </div>
                    <div className={styles.product__middleLabel}>
                        <span>{weight}</span>
                        <p className={styles.product__middleLabelText}>кг</p>
                    </div>
                </div>

            </div>
            <div className={styles.product__bottom}>
                {
                    (available !== false)
                    ?
                        (active !== true) ?
                        <p className={styles.product__bottomBuy}>Чего сидишь? Порадуй котэ, <span>купи.</span></p>
                        :
                        <p className={styles.product__bottomBuy}>{selectedText}</p>
                    :
                    <p className={styles.product__bottomBuyDisabled}>Печалька, {taste} закончился</p>
                }
            </div>
        </li>
    );
};

export default ProductItem;
