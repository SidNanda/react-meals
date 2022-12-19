import  {Fragment} from 'react';

import mealsImage from '../../components/Assets/meals.jpg';

import HeaderCardButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCardButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Food Items'/>
        </div>
    </Fragment>
}

export default Header;