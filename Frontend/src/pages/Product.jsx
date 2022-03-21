import styled from "styled-components"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div`
`;

const Wrapper = styled.div`
    margin: 50px 50px;
    height: 100vh;  
    display: flex;
`;

const ImageContainer = styled.div`
    flex: 1
`;
const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0px 150px;
`;
const ShopDetails = styled.div`
`;
const Title = styled.h1`
    font-weight: 500;
    font-size: 3vw;
`;
const Description = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 1000;
    font-size: 40px;
`;
const Quantity = styled.select`
    margin: 20px 0px;
    border: 1px solid grey;
    border-radius: 20px;
    background-color: white;
    padding: 10px;
    width: 100%;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    font-weight: 800px;
    -webkit-box-shadow: 0px 0px 18px -6px rgba(0,0,0,0.38); 
    box-shadow: 0px 0px 18px -6px rgba(0,0,0,0.38);
`;

const QuantityOption = styled.option`

`;

const AddToCart = styled.button`
    border: 1px solid black;
    border-radius: 20px;
    background-color: black;
    color: white;
    padding: 15px;
    width: 100%;
    font-size: 15px;
    cursor: pointer;
    font-weight: 900px;
`;

const Product = () => {
    const location = useLocation();
    const [product,setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

const handleClick = () => {
    dispatch(addProduct({product,quantity}));
}
    
useEffect(()=> {
    const itemID = location.pathname.split("/")[2]
    const url = "http://localhost:3001/api/products/find/" + itemID
    axios.get(url).then(response => {
    console.log(response.data)
    setProduct(response.data.product)
    }).catch(error => console.log(error))
  }, [])
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <ImageContainer>
                <Image src={product.product_img}/>
            </ImageContainer>
            <InfoContainer>
                <ShopDetails></ShopDetails>
                <Title>{product.title}</Title>
                <Description>{product.description}</Description>
                <Price>${product.price}</Price>
                <Quantity onChange={(e)=>setQuantity(e.target.value)}>
                    <QuantityOption disable selected hidden>Please Select A Value</QuantityOption>
                    {Array.from({length:product.quantity},(_,k)=>(
                        <QuantityOption key={k+1} value={k+1}>{k+1}</QuantityOption>
                    ))}
                </Quantity>
                <AddToCart onClick={handleClick}>Add to Cart</AddToCart>
            </InfoContainer>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Product