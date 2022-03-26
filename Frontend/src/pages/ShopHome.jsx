import styled from "styled-components"
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import EditShop from "../components/EditShop"

import CreateIcon from '@mui/icons-material/Create';
import { useState,useEffect } from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

import { useSelector } from "react-redux";

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
    width: 80%;
    position: relative;
    cursor: pointer;
    &: disabled{
        background-color: grey;
        cursor: not-allowed;
    }
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
  const user = useSelector((state)=>state.user)
  const user_id = user.currentUser.userdetails.id
  const [shopDetails,setshopDetails] =useState({})
  const [shopProducts,setShopProducts] = useState({})
  const [productsLoaded, setProductsLoaded] = useState(false)
  const displayProducts = (e) => {
        const shopProductsUrl = "http://localhost:3001/api/products/shop/" + shopDetails.id
        console.log("getting products of shop")
        console.log(shopProductsUrl)
        setProductsLoaded(true)
        axios.get(shopProductsUrl).then(response =>{
        setShopProducts(response.data.shopProducts)}).catch(error => setProductsLoaded(false))
  }

  useEffect(()=> {
    const url = "http://localhost:3001/api/shops/get_shop/" + user_id
    console.log("getting shop details")
    console.log("user url",url)
    axios.get(url).then(response => {
    setshopDetails(response.data.shopDetails)
    }).catch(error => console.log(error))
  }, [])
  return (
    <Container>
        <Navbar></Navbar>
        <Wrapper>
            <Top>
                <ShopInfoContainer>
                    <ShopImage src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png"></ShopImage>
                    <div>
                        <ShopName>{shopDetails.name}</ShopName>
                        <p>{shopDetails.description}</p>
                        <Popup trigger={
                            <Button><Icon><CreateIcon/></Icon>Edit Shop</Button>}
                            modal
                        >                       
                        <EditShop shopDetails={shopDetails}/>
                        </Popup>
                        <Button><Icon><CreateIcon/></Icon>Add Product</Button>
                        <Button onClick={displayProducts} disabled={productsLoaded}><Icon></Icon>Load Products</Button>
                    </div>
                </ShopInfoContainer>
                <ShopOwnerContainer>
                    <ShopOwnerImage src="https://static.wikia.nocookie.net/community-sitcom/images/0/02/Troy_close_up_Season_Five.jpg"></ShopOwnerImage>
                    <ShopOwner>{user.currentUser.userdetails.name}</ShopOwner>
                </ShopOwnerContainer>  
            </Top>
            <Bottom>
                <Products products={shopProducts}/>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default ShopHome