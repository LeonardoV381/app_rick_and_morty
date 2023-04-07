import SearchBar from "./SearchBar"
import styled from 'styled-components'
import styledNav from './Nav.module.css'
import { NavLink} from 'react-router-dom'
import React from "react";

export default function Nav({onSearch}){
    return(
        <>
        <ContainerNav>
            <ul className={styledNav.listAbout}>
                <li className={styledNav.margin}>
                <NavLink to='/home' className={({isActive}) =>isActive ? styledNav.active : styledNav.disable}>
                 Home  
                </NavLink>
                </li>
                <li className={styledNav.margin}>
                <NavLink to='/detail' className={({isActive}) =>isActive ? styledNav.active : styledNav.disable}>
                 Detail
                </NavLink>
                </li>
                <li className={styledNav.margin}>
                <NavLink to='/favorites' className={({isActive}) =>isActive ? styledNav.active : styledNav.disable}>
                 Favorites
                </NavLink>
                </li>
                <li className={styledNav.margin}>
                <NavLink to='/about' className={({isActive}) =>isActive ? styledNav.active : styledNav.disable}>
                 About
                </NavLink>
                </li>
            </ul>
             <div>      
                <SearchBar  onSearch={onSearch}/>
            </div>

        </ContainerNav>
        <img className='mainImg' src='https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/8/AmazonStores/A1AM78C64UM0Y8/88a9732d54ce1de3a48e9c09d2f58fed.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.jpg' alt='Rick and Morty IMG'/>      
        </>
    )
}

const ContainerNav = styled.div`
    div{
    width : full;
    display : flex;
    justify-content: end;
    border : black;
    background-color : blue;
    border-width: 8px;
    font-size: 20px;
    border-style: groove;
    border-radius: 20px;
    height: 70px;
    position: 'fixed'
    }
    
`

