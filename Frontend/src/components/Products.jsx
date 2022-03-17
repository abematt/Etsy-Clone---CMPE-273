import React from 'react'
import styled from 'styled-components'
import Product  from './Product'
import {mainProducts} from '../data'

const Container = styled.div`
    padding: 0px 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    min-height:100vh;
`

const Products = () => {
  return (
    <Container>
        {mainProducts.map(item => (
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products;