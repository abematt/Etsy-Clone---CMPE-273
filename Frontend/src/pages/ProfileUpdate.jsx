import styled from "styled-components"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div`
`;
const Wrapper = styled.div`
    padding: 50px 300px;
    min-height: 100vh;
    display:flex;
    flex-direction: column;
`;
const Top = styled.div`
    display:flex;
    justify-content: center;
    margin: 50px 0px 50px 0px;
`;

const HeadingLeft = styled.div`
    display:flex;
    flex: 1;
    flex-direction:column;
    justify-content: flex-start;
`;

const Title = styled.h1`
    font-size: 50px;
`;

const Subheading = styled.p`
`;

const HeadingRight = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`;

const ViewProfile = styled.button`
    min-width:50%;
    max-height: 50%;
    background-color: white; 
    border: 1px solid grey;
`;

const Bottom = styled.div`
    border: 1px solid black;
`;
const Form = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 50px 0px 0px 50px;
`;
const FormFieldName = styled.h3`
    flex: 1;
`;


const FormInputField = styled.input`
    flex: 3;
`;

const FormColumn = styled.div`
    width: 50%;
`;

const FormCell = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0px;
`;

const ProfileColumn = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0px;
`;


const ProfilePicture = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`;

const DateOfBirth = styled.div`
`;

const Month = styled.select`
`;

const Year = styled.select`
`;

const Day = styled.select`
`;

const Button = styled.button`
    min-width: 15%;
    margin: 10% 50%;

`;

const Username = styled.h3`
`;

const changeUsername = styled.a`
`;

const ProfileUpdate = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Top>
                <HeadingLeft>
                    <Title>Your Public Profile</Title>
                    <Subheading>Everything on this page can be seen by everyone</Subheading>
                </HeadingLeft>
                <HeadingRight>
                    <ViewProfile>View Profile</ViewProfile>
                </HeadingRight>
            </Top>
            <Bottom>
                <Form>
                    <FormColumn>
                        <FormCell>
                            <FormFieldName>Profile Picture: </FormFieldName>
                            <FormInputField type ="file" placeholder="Enter File"></FormInputField>
                        </FormCell>
                        <ProfileColumn>
                            <ProfilePicture src={"https://static.wikia.nocookie.net/community-sitcom/images/0/02/Troy_close_up_Season_Five.jpg"}/>
                        </ProfileColumn>
                        <FormCell>
                            <FormFieldName>Username: </FormFieldName>
                            <Username>troybarnes </Username>
                            <changeUsername>Change Username</changeUsername>
                        </FormCell>
                        <FormCell>
                            <FormFieldName>Name: </FormFieldName>
                            <FormInputField placeholder="Full Name"></FormInputField>
                        </FormCell>
                        <FormCell>
                            <FormFieldName>Date Of Birth: </FormFieldName>
                            <DateOfBirth>
                                <Day></Day>
                                <Month></Month>
                                <Year></Year>
                            </DateOfBirth>
                        </FormCell>
                        <FormCell>
                                <FormFieldName>City: </FormFieldName>
                                <FormInputField placeholder="City"></FormInputField>
                        </FormCell>
                        <FormCell>
                                <FormFieldName>Full Address: </FormFieldName>
                                <FormInputField placeholder="Full Address"></FormInputField>
                        </FormCell>
                        <FormCell>
                                <FormFieldName>Phone Number: </FormFieldName>
                                <FormInputField placeholder="Phone Number"></FormInputField>
                        </FormCell>
                        <FormCell>
                                <FormFieldName>Email: </FormFieldName>
                                <FormInputField placeholder="Email"></FormInputField>
                        </FormCell>
                        <Button>Save Changes</Button>
                    </FormColumn>
                    
                </Form>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default ProfileUpdate;