import React from "react";
import styled from "styled-components";

import logo from "../../public/images/logo.svg";

export default function Header() {
  const HeaderElement = styled.header`
    width: 100%;
    font-family: "Raleway", sans-serif;
    max-width: 1400px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  `;

  const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2.5rem;
    align-items: center;
    width: 100%;
    @media (max-width: 515px) {
      padding: 0 0.5rem;
    }
  `;

  const Image = styled.img`
    @media (max-width: 515px) {
      width: 110px;
    }
  `;

  const Navigation = styled.nav``;

  const UnOrderedList = styled.ul`
    display: flex;
    gap: 2rem;
  `;

  const ListItem = styled.li``;

  const Link = styled.a`
    text-decoration: none;
    color: black;
  `;

  return (
    <HeaderElement>
      <HeaderContainer>
        <Image src={logo} />

        <Navigation>
          <UnOrderedList>
            <ListItem>
              <Link href="foo">Features</Link>
            </ListItem>
            <ListItem>
              <Link href="foo">Team</Link>
            </ListItem>
            <ListItem>
              <Link href="foo">Sign in</Link>
            </ListItem>
          </UnOrderedList>
        </Navigation>
      </HeaderContainer>
    </HeaderElement>
  );
}
