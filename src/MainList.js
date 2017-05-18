import React, { Component } from "react";
import { Image, Dimensions } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Header,
  Button,
  Left,
  Body,
  Title,
  Spinner,
  List,
  ListItem
} from "native-base";
export default class MainList extends Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.state = {
      data: [],
      loaded: false
    };
  }
  componentWillMount() {
    var self = this;
    fetch("http://swapi.co/api/people")
      .then(e => e.json())
      .then(function(response) {
        console.log(response);
        self.setState({ data: response.results, loaded: true });
      })
      .catch(error => {
        console.error(error, "ERRRRRORRR");
      });
  }
  cardSelected() {
    console.log("cardSelected");
  }
  render() {
    if (!this.state.loaded) {
      return (
        <Container>
          <Spinner />
        </Container>
      );
    }
    return (
      <Container>
        <Image
          source={require("./starWars.gif")}
          style={{
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width
          }}
        >
          <Header style={{ backgroundColor: "grey" }}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <List
              dataArray={this.state.data}
              renderRow={item => (
                <ListItem>
                  <Card>
                    <CardItem style={{ backgroundColor: "red" }}>
                      <Left>
                        <Icon name="eye" style={{ fontSize: 30 }} />
                      </Left>
                      <Body style={{ flex: 3 }}>
                        <Text
                          style={{
                            marginTop: 5,
                            fontSize: 20,
                            fontWeight: "bold"
                          }}
                        >
                          {item.name}
                        </Text>
                      </Body>
                      <Right />
                    </CardItem>
                    <CardItem style={{ backgroundColor: "grey" }}>
                      <Left>
                        <Text style={{ fontWeight: "bold" }}>
                          Height: {item.height}
                        </Text>
                      </Left>
                      <Body>
                        <Text style={{ fontWeight: "bold" }}>
                          Eye-Color: {item.eye_color}
                        </Text>
                      </Body>
                      <Right>
                        <Text style={{ fontWeight: "bold" }}>
                          Mass: {item.mass}
                        </Text>
                      </Right>
                    </CardItem>
                    <CardItem
                      style={{
                        backgroundColor: "grey",
                        justifyContent: "center"
                      }}
                    >
                      <Button full rounded dark>
                        <Text>View Details</Text>
                      </Button>
                    </CardItem>
                  </Card>
                </ListItem>
              )}
            />
          </Content>
        </Image>
      </Container>
    );
  }
}
