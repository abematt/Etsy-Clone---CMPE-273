import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`;

const Bottom = styled.div`
`;

const Title = styled.h1`
`
const TopTexts = styled.div`
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`
const Product = styled.div`
  display:flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;

`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.div`
`
const ProductId = styled.div`
`
const PriceDetail = styled.div`
  flex: 1;
`

const Summary = styled.div`
`;

const SummaryTitle = styled.div`
`;

const SummaryItemText = styled.div`
`;

const SummaryItemPrice = styled.div`
`;

const Cart = () => {
  const cart = useSelector(state=>state.cart)
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
              <TopButton>Continue Shopping</TopButton>
              <TopButton>Checkout Now</TopButton>
            </Top>
            <Bottom>
            {cart.products.map(product=>(<Product>
                <ProductDetail>
                <Image src={product.product_img}/>
                <Details>
                  <ProductName><b>Product:</b>{product.title}</ProductName>
                  <ProductId><b>Id: </b>{product.id}</ProductId>
                  <Product></Product>
                </Details>
              </ProductDetail>
              <PriceDetail>
                {product.price}
              </PriceDetail>
              </Product>))}
              <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart;