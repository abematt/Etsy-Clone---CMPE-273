import styled from "styled-components"
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';

const Container = styled.div`
`;

const Wrapper = styled.div`
    margin: 50px 50px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;


const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 300px 100px 300px;
`;

const ShopInfoContainer = styled.div`
    display: flex;
`;

const ShopName = styled.h1`
    margin: 0px 0px 0px 20px;
`;

const ShopImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border: 1px solid grey;
`;

const Button = styled.button`
    height: 20%;
    margin: 10px 0px 0px 20px;
    background-color: black;
    color: white;
    width: 40%;
    position: relative;
    cursor: pointer;
`;

const Icon = styled.div`
    position: absolute;
    top: 0;
    margin: 5px 0px 0px 0px;
`;

const ShopOwnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ShopOwner = styled.h2`
`;

const ShopOwnerImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid grey;
    object-fit: cover;
`;

const Bottom = styled.div`
`;

const ShopHome = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Wrapper>
            <Top>
                <ShopInfoContainer>
                    <ShopImage src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png"></ShopImage>
                    <div>
                        <ShopName>Handmade Craftology</ShopName>
                        <Button onClick=""><Icon><CreateIcon/></Icon>Edit Shop</Button>
                    </div>
                </ShopInfoContainer>
                <ShopOwnerContainer>
                    <ShopOwnerImage src="https://static.wikia.nocookie.net/community-sitcom/images/0/02/Troy_close_up_Season_Five.jpg"></ShopOwnerImage>
                    <ShopOwner>Troy</ShopOwner>
                </ShopOwnerContainer>  
            </Top>
            <Bottom>
                <Products/>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default ShopHome