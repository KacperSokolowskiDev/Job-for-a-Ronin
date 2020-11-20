import { Component } from "react";
import samuraiList from "../../data/samurai";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const ProfileInfo = styled.div`
  background-color: #f5f5f5;
  height: 50vh;
  width: 40vw;
  margin: 30px auto;
  padding: 20px 0;
`;

const ProfileHead = styled.div`
  background-color: #f5f5f5;
  height: 30vh;
  width: 70vw;
  margin: 30px auto;
  padding: 20px 0;
`;

const Skills = styled.div`
  background-color: #f5f5f5;
  height: 20vh;
  width: 40vw;
  margin: 30px auto;
  padding: 20px 0;
`;

const ProfilePic = styled.div`
  height: 100px;
  width: 100px;
  margin: auto;
  padding-top: 20px;
`;

const Titles = styled.h3`
  text-align: center;
`;

const BigTitle = styled.h2`
  text-align: center;
  padding: 20px 0;
`;

const Text = styled.p`
  text-align: center;
  padding: 10px 20px;
`;

const List = styled.ul`
  list-style-type: none;
`;

const ContentList = styled.li`
  text-align: center;
  padding-right: 40px;
`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
    };
    console.log(this.state.profile);
  }

  componentDidMount = () => {
    this.getProfiles();
  };
  getProfiles = () => {
    let profile;
    samuraiList.map((listProfile) => {
      //check the samurai profile with the id param
      if (listProfile.id == this.props.match.params.id) profile = listProfile;
      return;
    });

    //set the state profile
    this.setState({ profile });
    console.log(this.state.profile);
  };

  render() {
    return (
      <div>
        {this.state.profile !== null ? (
          <div>
            <ProfileHead>
              <ProfilePic src={this.state.profile.img} />
              <Titles>{this.state.profile.name}</Titles>
              <Titles>{this.state.profile.status}</Titles>
            </ProfileHead>
            <ProfileInfo>
              <BigTitle>Description :</BigTitle>
              <Text>Known as : {this.state.profile.pseudo}</Text>
              <Text>Localisation : {this.state.profile.city}, Nihon</Text>
              <Text>{this.state.profile.description}</Text>
            </ProfileInfo>
            <Skills>
              <Titles>Skills : </Titles>
              {this.state.profile.skills.map((skill) => {
                return (
                  <List>
                    <ContentList>{skill}</ContentList>
                  </List>
                );
              })}
            </Skills>
          </div>
        ) : (
          <p>No data yet, sorry</p>
        )}
      </div>
    );
  }
}

export default withRouter(Profile);
