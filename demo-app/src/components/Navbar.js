import styled from "styled-components";
import Logo from "./ronin.png";
import { Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  width: 100%;
  padding: 10px 0;
`;

const Title = styled.p`
  color: red;
  font-size: 25px;
`;

const BoxButton = styled.div`
  display: flex;
  padding-right: 20px;
  justify-content: flex-end;
`;

const Image = styled.img`
  height: 70px;
  width: 70px;
  padding-right: 10px;
`;

const NameLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
`;

//color: #e7dede;
//background-color: #5b74cc;

const Navbar = () => {
  return (
    <Nav>
      <NameLogo>
        <Image src={Logo} alt="ronin img"></Image>
        <Title>Job for a Ronin</Title>
      </NameLogo>
      <BoxButton>
        <Box mr={5}>
          <Button variant="outlined" color="secondary">
            Find a Job
          </Button>
        </Box>
        <Link to="/my-profile/1">
          <Button variant="outlined" color="secondary">
            My Profile
          </Button>
        </Link>
      </BoxButton>
    </Nav>
  );
};

export default Navbar;
