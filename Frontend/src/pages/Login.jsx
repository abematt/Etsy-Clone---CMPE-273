import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
                    rgba(255,255,255,0.7),
                    rgba(255,255,255,0.3)
                    ),
                    url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/4d845686128681.5d909dad4ddd3.jpg) 
                    center;
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
`;
const Title = styled.h1`
    font-size: 45px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    border: 1px solid black;
    min-width:50%;
    margin: 10px 10px 0px 0px;
    padding: 15px;
`;
const Button = styled.button`
    flex: 1;
    min-width:50%;
    margin: 10px 10px 0px 0px;
    padding: 15px;
    border: none;
    background-color: orange;

`;

const Link = styled.a`
    flex: 1;
    min-width:50%;
    margin: 10px 10px 0px 0px;
    text-decoration: underline;
    font-size: 15px;
    cursor: pointer
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username"/>
                    <Input placeholder="Password"/>
                    <Button>Login</Button>
                    <Link href="/register">Create a new account</Link>
                </Form>
        </Wrapper>
    </Container>
  )
}

export default Login