import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
    inline-size: 90%;
    margin-inline: 10px;
    max-inline-size: 48em;
`

export const Header = styled.header`
    min-height: 50px;
    background-color: #00BFFF;
    border: 10px solid transparent;
	box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25) inset;
    position: sticky;
    will-change: transform;
    top: 0;
    border-bottom: 1px solid #0000FF;
    margin-bottom: 20px;
    box-shadow: 0 0.0625em 0.5em rgba(0, 0, 0, 0.3);
    }
`

export const NavList = styled.ul`
    list-style: none;
    padding: 5px;
    display: flex;
    gap: 1.5em;
    text-align: left;
`

export const NavListItem = styled.li`
    display: inline-flex;
    align-items: center;
    justify-content: center;
	padding: 14px;
	margin-left: 2px;
	font-family: 'Quicksand', sans-serif;
	color: #black;
	cursor: pointer;
	transition: 0.3s linear all;
	user-select: none;

    &:hover {
        color: #fff;
    }
`

export const StyledLink = styled(NavLink)`
  color: inherit;
  display: block;
  padding-inline: 1em;
  text-decoration: none;

  &.active {

    border-radius: 999em;
    color: #fff;
  }
`
