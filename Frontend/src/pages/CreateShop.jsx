import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState,useEffect } from "react";
import axios from 'axios'
import { useSelector } from "react-redux";

const Container = styled.div`
`

const Wrapper = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 45px;
    font-weight: 300;
`

const Subheading  = styled.h1`
    font-size: 20px;
    font-weight: 200;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const AvailabilityContainer = styled.div`
    display:flex;
    width: 100%;
`;

const Input = styled.input`
    flex: 2;
    border: 1px solid black;
    margin: 10px -1px 0px 0px;
    padding: 15px;
`;

const CheckAvailability = styled.button`
    flex: 1;
    margin: 10px -1px 0px 0px;
    border:1px solid black;
    background-color: white;
    cursor: pointer;
    
`;

const Button = styled.button`
    flex: 1;
    min-width:50%;
    margin: 10px 0px 0px 0px;
    padding: 15px;
    border: none;
    background-color: orange;
    cursor: pointer;
    &: disabled{
        background-color: grey;
        cursor: not-allowed;
    }
`;

const Message = styled.p`
    flex: 1;
    min-width: 50%;
    margin: 10px 10px 0px 0px;
    font-size: 15px;
    color: black;
`

const CreateShop = () => {
    const [shopName,setShopName] =useState("")
    const [availability,setAvailability] = useState(false)
    const [shopStatus,setShopStatus] = useState("")
    const user = useSelector((state)=>state.user)
    const checkAvailable = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:3001/api/shops/check_name/',{"name":shopName}).then(response => {
        console.log(response.data)
        setAvailability(response.data.success)
        setShopStatus(response.data.message)
    }).catch(error => console.log(error))
    }
    
    const createShop = (e) => {
        e.preventDefault();
        const shopDetails = {"user_id": user.currentUser.userdetails.id, "name": shopName, "description": "Default Shop Description"}
        axios.post('http://localhost:3001/api/shops/add/',shopDetails).then(response => {
            console.log(response)
        }).catch(error=>console.log(error))
    }
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            
            <Title>Name your shop</Title>
            <Subheading>Choose a memorable name that fits your style</Subheading>
            <Form>
                <AvailabilityContainer>
                    <Input placeholder="Enter your desired shop name" onChange={(e)=> setShopName(e.target.value)}></Input>
                    <CheckAvailability onClick={checkAvailable}>Check Availability</CheckAvailability>
                </AvailabilityContainer>
                {/* {!availability ? <Error></Error> :  <Error>Shop Name Not Available</Error>} */}
                <Message>{shopStatus}</Message>
                <Button disabled={!availability} onClick={(createShop)}>Create Shop</Button>
            </Form>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default CreateShop;