import React, {Component} from 'react'
import {
  View,
  Text,
} from 'react-native'

class Baul extends Component{
  render(){
    return(
      <Container>
          <View>
              <DeckSwiper
                  dataSource={cards}
                  renderItem={item =>
                      <Card style={{ elevation: 3 }}>
                          <CardItem>
                              <Thumbnail source={item.image} />
                              <Text>{item.text}</Text>
                              <Text note>NativeBase</Text>
                          </CardItem>
                          <CardItem>
                              <Image style={{ resizeMode: 'cover', width: null }} source={item.image} />
                          </CardItem>
                          <CardItem>
                              <Icon name="ios-heart" style={{ color: '#ED4A6A' }} />
                              <Text>{item.name}</Text>
                          </CardItem>
                      </Card>
                  }
              />
          </View>
      </Container>
    )
  }
}

module.exports = Baul
