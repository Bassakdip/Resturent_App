import { Fragment } from 'react'
import mealImage from '../../assets/meal-pic.jpg';
import classess from './Hader.module.css';
import HeaderCartButton from './HeaderCartButton';

const Hader = (props) => {
    return (
        <Fragment>
            <header className={classess.header}>
                <h1>Delicious Bite</h1>
                <HeaderCartButton></HeaderCartButton>
            </header>
            <div className={classess['main-image']}>
                <img src={mealImage}  alt='A Table full of delicious foods'/>
            </div>
        </Fragment>

    )
}

export default Hader;
