import styled from "styled-components";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Favourites from "../components/Favourites";
import CreateIcon from '@mui/icons-material/Create';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`

`;

const WrapperOne = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 0px 10vw;
`;


const UserDetails = styled.div`
    align-items: flex-start;
    display:flex;
    
`;

const UsernameComponent = styled.div`
    display: flex;
    padding: 0px 50px;

`;

const UserName = styled.h1`
    
`;

const Icons = styled.div`
    background-color:white;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    line-height: 10px;
    padding: 5px;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover{
        background-color: grey;
        top: -10px;
      };
`;

const FavouriteComp = styled.div`
    display: flex;
`;

const ProfilePicture = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
`;

const WrapperTwo = styled.div`
    display:flex;
    justify-content: space-between;
    height: 100vh;
    padding: 0px 10vw;
    position:  relative;
`;

const FavoriteItems = styled.div`
    width: 100%;
`;

const Title = styled.h1`
`;

const SearchBar = styled.div`
    border: 2px solid black;
    border-radius: 25px;
    display: flex;
    align-items: center;
    align-self: flex-end;
    padding: 10px 20px;
    max-height: 10px;
`;

const Input = styled.input`
    border:none;
    width:100%;
    
`
const Profile = () => {
  return (
    <Container>
        <Navbar/>
        <WrapperOne>
        <UserDetails>
            <ProfilePicture src={"https://static.wikia.nocookie.net/community-sitcom/images/0/02/Troy_close_up_Season_Five.jpg"}></ProfilePicture>
            <UsernameComponent>
                <UserName>Troy</UserName>
                <Icons><CreateIcon/></Icons>
            </UsernameComponent>
        </UserDetails>
        <SearchBar>
            <Input placeholder="Search Your Favourites"/>
            <SearchIcon/>
        </SearchBar>
        </WrapperOne>
        <WrapperTwo>
                <FavoriteItems>
                    <FavouriteComp>
                        <Title>Favourite Items </Title>
                        <Icons><CreateIcon/></Icons>
                    </FavouriteComp>
                    <Favourites></Favourites>
                </FavoriteItems>
        </WrapperTwo>
        <Footer/>
    </Container>
  )
}

export default Profile;