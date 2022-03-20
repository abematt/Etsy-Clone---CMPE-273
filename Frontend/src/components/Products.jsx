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

const Products = (props) => {
  return (
    <Container>
        {console.log("these are props")}
        {console.log(props.products)}
        {props.products.map(item => (
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products;