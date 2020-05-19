import React from 'react';
import {HeaderBody} from './header-styled';
import {ImgLogo} from '../reusable-styled-components/reusable-styled-components';


const Header = () => {

  return (
    <HeaderBody>
      <ImgLogo src="https://www.pngmart.com/files/1/Diamond-Logo-PNG.png" alt="logo"/>
    </HeaderBody>
  );
};

export default Header;