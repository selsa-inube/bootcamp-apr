import React from 'react';
import { HeaderWrapper, Title, Button ,Sidebar} from './Header.styles.jsx';



const Header = () => {
  return (
    <>
      <Sidebar>
        <ul>
          <li><i className="bx bx-dots-horizontal-rounded"></i></li>
          <li><i className="bx bx-transfer-alt bx-rotate-90"></i></li>
          <li><i className="bx bxs-moon"></i></li>
        </ul>
      </Sidebar>
      <HeaderWrapper>
        <div>
          <i className="bx bx-search-alt" />
          <i className="bx bxs-bell" />
        </div>
        <Title>The New York Times</Title>
        <div>
          <Button>SIGN IN</Button>
          <Button>SUBSCRIBE</Button>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
