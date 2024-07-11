import React from 'react';

import { HeaderSec, HeaderSecWrap, LogoLink } from './styles';
import { LogoHG } from '~/icons';

const Header = () => {
  return (
    <HeaderSec id="top">
      <HeaderSecWrap>
        <LogoLink
          href="https://github.com/thailanelopes/hostgator-challenge"
          target="_blank"
        >
          <LogoHG />
        </LogoLink>
      </HeaderSecWrap>
    </HeaderSec>
  );
};

export default Header;
