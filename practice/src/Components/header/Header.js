import React from 'react'
import HeaderList from './headerList/HeaderList';
import sprite from '../../icons/header/sprite.svg'
import { HeaderContainer } from './HeaderStyled';

const Header = () => {
    return (
        <HeaderContainer>
            <a className="headerLogo" href="/#">
            <svg className="headerLogoIcon">
                <use href={sprite + '#icon-home'} />
            </svg>
            </a>
            <HeaderList />
        </HeaderContainer>
    );
};

export default Header;