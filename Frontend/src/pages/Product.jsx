import styled from "styled-components"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <ImageContainer>
                <Image src="https://i.etsystatic.com/5522817/r/il/2b6c61/2429377088/il_570xN.2429377088_607d.jpg"/>
            </ImageContainer>
            <InfoContainer>
                <ShopDetails></ShopDetails>
                <Title>Handmade Craft Printables, Printable Instruction Cards, Washing Machine Instructions, Savlabol Care Details</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Description>
                <Price>$ 50</Price>
                <Quantity>
                    <QuantityOption disable selected hidden>Please Select A Value</QuantityOption>
                    <QuantityOption>1</QuantityOption>
                    <QuantityOption>2</QuantityOption>
                    <QuantityOption>3</QuantityOption>
                </Quantity>
                <AddToCart>Add to Cart</AddToCart>
            </InfoContainer>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Product