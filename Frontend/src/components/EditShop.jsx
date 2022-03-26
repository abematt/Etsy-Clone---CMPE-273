import styled from 'styled-components'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { flexbox } from '@mui/system';
import { useState } from "react";
import axios from 'axios';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MessageBox = styled.p`
    color:red;
`

const EditShopForm = ({shopDetails}) => {
    const initialValues = {
        title: "",
        description: "",
        price: "",
        quantity: "",
        category: "",
        product_img: "",
        shop_id: shopDetails.id,
    }
    const [values,setValues] = useState(initialValues);
    const [isFilePicked,setIsFilePicked] = useState(false);
    const [selectedFile,setSelectedFile] = useState();
    const [createdProduct, setCreatedProduct] = useState(false);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(values)
        const url = "http://localhost:3001/api/products"
        axios.post(url,values).then(response => {
        console.log(response.data)
        setCreatedProduct(true)
        }).catch(error => {
            setCreatedProduct(false)
            console.log(error)})
    }

    const handleInputChange = (e) => {
        console.log(e.target)
        const {name, value} = e.target;
        setValues ({
            ...values,
            [name]: value,
        });
    };

    const changeHandler = (e) => {
        setSelectedFile(e.target);
        setIsFilePicked(true);
        setCreatedProduct(false);
        console.log(selectedFile)
        
    };
    return (
       
            <form onSubmit={handleSubmit}>
             <Container>
                <label>
                    Name of Product:
                    <input name="title" onChange={handleInputChange} value={values.pname}/>
                </label>
                <label>
                    Description:
                    <input name="description" onChange={handleInputChange} value={values.description}/>
                </label>
                <label>
                    Price:
                    <input name="price" onChange={handleInputChange} value={values.price}/>
                </label>
                <label>
                    Quantity:
                    <input name="quantity" onChange={handleInputChange} value={values.quantity}/>
                </label>
                <label>
                    Image Url: 
                    <input type="text" name="product_img" onChange={handleInputChange}/>
                </label>
                <button>Submit</button>
                <MessageBox>{!setCreatedProduct? "Product Created" : ""}</MessageBox>
            </Container>
            </form>
           
    )
};

export default EditShopForm