import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
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

`;

const CreateShop = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Name your shop</Title>
            <Subheading>Choose a memorable name that fits your style</Subheading>
            <Form>
                <AvailabilityContainer>
                    <Input placeholder="Enter your desired shop name"></Input>
                    <CheckAvailability>Check Availability</CheckAvailability>
                </AvailabilityContainer>
                <Button>Create Shop</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default CreateShop;