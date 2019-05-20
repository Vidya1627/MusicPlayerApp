import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

var SongPlayer = require('react-native-sound');

var song = null;

var BASE_URL = "http://storage.googleapis.com/automotive-media/";

class AlbumDetail extends React.Component {

render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStlye}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: BASE_URL + this.props.song.image }}
          />
          </View>
          <View>
             <Text style={styles.headerTextStyle}>{this.props.song.title}</Text>
             <Text>{this.props.song.artist}</Text>
          </View>
        </CardSection>

        <CardSection>
           <Image
             style={styles.imageStyle}
             source={{ uri: BASE_URL + this.props.song.image }}
           />
        </CardSection>

        <CardSection>
            <Button onPress={() => Linking.openURL(this.props.song.site)}>
               Play
            </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStlye: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    width: null,
    flex: 1
  }
};



export default AlbumDetail;
