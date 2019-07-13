import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    
    <User>
      <img
        src="https://avatars3.githubusercontent.com/u/26115704?v=4"
        alt="Avatar"
      />
      Lucas Navarro
    </User>
  </Container>
);

export default Header;