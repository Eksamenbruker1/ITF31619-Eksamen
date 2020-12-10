import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import { NavLink } from 'react-router-dom';
import "./Styles/styles.css"
import { useAuthContext } from '../Components/context/AuthProvider';


const MenuItemContainter = styled.ul`   
    @media only screen and (max-width: 500px){
        flex-direction:column;
        display: ${props => props.forceShow?"flex":"none"};
    } 
    display: flex;
    list-style-type: none;
    margin:0;
    flex-direction:${props => props.forceShow?"column":"row"};
    flex-direction:${props => props.spreadDown?"column":"row"};
    margin:${props => props.spreadDown&&"0 0"};
`;

const Text= styled.p`    
    margin:0;
    margin-left: 7px;
    transition:1s;
    height:10px;
    font-weight:400;
    color:${props => props.spreadDown&&"black"};
    display: ${props => props.spreadDown ? "flex" : "none"};
`;

const MenuItem= styled.li`   
    :hover{
        color:#265dba;
        font-weight: 400;
        filter:invert(100%);
        opacity: 1;
        margin-right: 16px;
        font-weight:${props => props.Highlight&&"700"};

    }
    transition:0.5s;
    list-style-type: none;
    font-weight: 400;
    display: flex;
    margin:0;
    margin-right: 10px;
    margin-top: 13px;
    color:${props => props.spreadDown&&"white"};
    color: ${props => props.Highlight || props.spreadDown ? "#ffc107" : "#1e1e1e"};
    color: ${props => props.Highlight || props.spreadDown ? "#488ac4" : "#1e1e1e"};
    font-weight: ${props => props.Highlight&&"700"};
`;


const  Tiss = styled.p` 
    color: white;
`;

const Wrapper = styled.nav` 
    display: flex; 
    @media only screen and (max-width: 500px){
        display: ${props => props.forceShow?"flex":"none"};
        flex-direction:column;
    }
    justify-content:${props => props.spreadDown?"center":"end"};
    
`;

const Menu = ({ActiveItem,setActive,name,forceShow,spreadDown,location,patch}) => {


    const [isShown, setIsShown] = useState([false,false,false,false]);
    const [Patch, setPatch] = useState(patch)
    const href = window.location.href.split("/")
    const Location = href[href.length]
    

    const toTop =(go)=>{
        if(go)window.scrollTo(0,0);
    }
    

    return(
        <>
        <Wrapper  forceShow={forceShow&&forceShow}>
        <Tiss>T</Tiss>
            <MenuItemContainter spreadDown={spreadDown} forceShow={forceShow} >
                <NavLink exact to="/"><MenuItem className={spreadDown?"parent":"none"} onClick={()=>toTop(Location===ActiveItem&&true)} spreadDown={spreadDown} Highlight={ActiveItem==="hjem"?true:false}
                    onMouseEnter={() => setIsShown([true,false,false,false])}
                   
                >
                    Hjem
                    {isShown[0] && (
                        <Text className={spreadDown?"child":"none"} spreadDown={spreadDown}>
                          Gå til hjemsiden vår.
                        </Text>
                    )}
                </MenuItem></NavLink>
                <NavLink exact to="/kontorer"><MenuItem className={spreadDown?"parent":"none"} onClick={()=>toTop(Location==ActiveItem&&true)} spreadDown={spreadDown} Highlight={ActiveItem==="kontorer"?true:false} 
                    onMouseEnter={() => setIsShown([false,true,false,false])}
                    
                >
                    Kontorer{
                    isShown[1] && (
                        <Text className={spreadDown?"child":"none"} spreadDown={spreadDown}>
                          Utforsk våre kontorer; fra Oslo til Sarpsborg.
                        </Text>
                    )}
                </MenuItem></NavLink>
                <NavLink exact to="/fagartikler"><MenuItem className={spreadDown?"parent":"none"} onClick={()=>toTop(Location==ActiveItem&&true)} spreadDown={spreadDown} Highlight={ActiveItem==="fagartikler"?true:false}
                    onMouseEnter={() => setIsShown([false,false,true,false])}
                  
                >
                    Fagartikler
                    {isShown[2] && (
                        <Text className={spreadDown?"child":"none"} spreadDown={spreadDown}>
                          Les om hvordan ekspertisen dyrkes og styrkes hos LG!
                        </Text>
                    )}
                </MenuItem></NavLink>
                <NavLink exact to="/kontakt"><MenuItem className={spreadDown?"parent":"none"} onClick={()=>toTop(Location==ActiveItem&&true)} spreadDown={spreadDown} Highlight={ActiveItem==="kontakt"?true:false}
                    onMouseEnter={() => setIsShown([false,false,false,true])}
                   
                >
                    Kontakt
                    {isShown[3] && (
                        <Text className={spreadDown?"child":"none"} spreadDown={spreadDown}>
                          Vi er tilgjengelig hele døgnet!
                        </Text>
                    )}
                </MenuItem></NavLink>
            </MenuItemContainter>   
        </Wrapper>
        </>
        )
}

export default Menu