import styled from 'styled-components'
import Product  from './Product'
import {mainProducts} from '../data'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
    padding: 0px 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    min-height:100vh;
`

const Products = (props) => {
  const location = useLocation();
  console.log(location);
  return (
    <Container>
        {console.log("this is props",props.products)}
        {props.products.length? props.products.map(item => (
            <Product item={item} key={item.id}/>
        )): ""}
    </Container>
  )
}

export default Products;