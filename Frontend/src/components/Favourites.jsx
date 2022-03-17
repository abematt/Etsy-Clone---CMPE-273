import styled from 'styled-components'
import Product  from './Product'
import {FavouriteProducts} from '../data'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    min-height:100vh;
`

const Products = () => {
  return (
    <Container>
        {FavouriteProducts.map(item => (
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products;