import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
    border:1px solid var(--gris-claro);
    padding:0.5rem;
    width:fit-content;
    border-radius:1rem;
    min-width:300px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:white;
    box-shadow:var(--sombras-cards);    
    cursor:${({pointer})=> pointer =='true'? 'pointer':'initial'};
    transition: 450ms all;
    -webkit-transform-origin:center top;
            transform-origin:center top;
    &:hover{
        -webkit-transform:translate3d(0,0,-100px);
                transform:translate3d(0,0,100px);
                transform:scale(1.1);
                z-index:100;
    };
 
        

`
export const Imagen = styled.img`
    width:240px;
    height:240px;
    object-fit:cover
`
export const TituloProducto = styled.h2`
    font-size:var(size-subtitle);
    color:var(--gris-claro);
`
export const Parrafo = styled.p`
    font-size:var(--size-parrafo);
    color:var(--gris-claro);
`
export const Anchor = styled(Link)`
    text-decoration:none;
    underline:none;
    cursor:${({pointer})=> pointer =='true'? 'pointer':'initial'};

`