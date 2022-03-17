import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge'; 
import {currencyOptions} from '../data'

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`

const SearchContainer = styled.div`
    border: 2px solid black;
    border-radius: 25px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    width: 100%;
`
const Input = styled.input`
    border:none;
    width:100%;
`

const Center = styled.div`
    flex: 2;
    
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
`
const Navbar = () => {
  return (
    <Container> 
        <Wrapper>
           <Left>
              <h1>ETSY</h1>
           </Left> 
           <Center>              
              <SearchContainer>
                  <Input/>
                  <SearchIcon/>
              </SearchContainer>
            </Center>
           <Right>
                <FavoriteIcon/>
                <PersonIcon/>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon/>
                </Badge>
           </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar