import React from "react";
import styled from "styled-components";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookCircleLine } from "react-icons/ri";
import logo from "../../public/images/logo-footer.svg";
import iconPhone from "../../public/images/icon-phone.svg";
import iconEmail from "../../public/images/icon-email.svg";

export default function Footer() {
  const FooterStyled = styled.footer`
    background-color: hsl(243, 87%, 12%);
    font-family: "Raleway", sans-serif;

    color: white;
    padding: 5rem;
  `;

  const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 1000px) {
      & {
        grid-template-columns: 1fr;
      }
    }
  `;
  const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;

  const Link = styled.a`
    text-decoration: none;
    color: currentColor;
    transition: color 300ms;
    &:hover {
      color: hsl(224, 93%, 58%);
    }
  `;

  const NavFooter = styled.nav``;

  const UlFooter = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    @media (max-width: 1000px) {
      & {
        align-items: start;
        gap: 1rem;
        margin-top: 3rem;
      }
    }
  `;
  const Image = styled.img`
    margin-right: 1rem;
  `;

  const IconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    @media (max-width: 1000px) {
      margin-top: 3rem;
    }
  `;

  const IconLink = styled.a`
    font-size: 2rem;
    cursor: pointer;
    transition: color 300ms;
    height: fit-content;
    &:hover {
      color: hsl(224, 93%, 58%);
    }
  `;

  const FooterLogo = styled.img`
    margin-bottom: 2rem;
  `;
  return (
    <FooterStyled>
      <FooterLogo src={logo} />
      <FooterWrapper>
        <NavWrapper>
          <div>
            <Image src={iconPhone} />
            <span>Phone: 1+ 452454624</span>
          </div>
          <div>
            <Image src={iconEmail} />
            <span>Example@fylo.com</span>
          </div>
        </NavWrapper>

        <NavFooter>
          <UlFooter>
            <li>
              <Link href="zzz">Lorem.</Link>
            </li>
            <li>
              <Link href="zzz">Aliquid.</Link>
            </li>
            <li>
              <Link href="zzz">Saepe.</Link>
            </li>
            <li>
              <Link href="zzz">Itaque!</Link>
            </li>
          </UlFooter>
        </NavFooter>

        <NavFooter>
          <UlFooter>
            <li>
              <Link href="zzz">Lorem.</Link>
            </li>
            <li>
              <Link href="zzz">Aliquid.</Link>
            </li>
            <li>
              <Link href="zzz">Saepe.</Link>
            </li>
          </UlFooter>
        </NavFooter>

        <IconsWrapper>
          <IconLink>
            <RiFacebookCircleLine />
          </IconLink>
          <IconLink>
            <TiSocialTwitterCircular />
          </IconLink>
          <IconLink>
            <IoLogoInstagram />
          </IconLink>
        </IconsWrapper>
      </FooterWrapper>
    </FooterStyled>
  );
}
