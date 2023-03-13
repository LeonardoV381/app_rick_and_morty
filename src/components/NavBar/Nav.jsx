import SearchBar from "./SearchBar"
import styled from 'styled-components'

export default function Nav({onSearch}){
    return(
        <>
        <ContainerNav>
            <ul className="listAbout">
                <li>
                    About
                </li>
            </ul>
             <div>      
                <SearchBar  onSearch={onSearch}/>
            </div>

        </ContainerNav>
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

