import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`
`;

const Wrapper = styled.div`
    margin: 50px 50px;
    height: 100vh;  
    display: flex;
`;

const Top = styled.div`
  display:flex;
`;

const Bottom = styled.div`
`;

const Title = styled.h1`
`

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>Your Cart</Title>
            <Top></Top>
            <Bottom></Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart;