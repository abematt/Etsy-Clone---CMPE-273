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

const Products = (favourites) => {
 
  return (
    <Container>
      {console.log("this is props",favourites)}
        {favourites? favourites.favourites.map(item => (
            <Product item={item} key={item.id}/>
        )): ""}
    </Container>
  )
}

export default Products;