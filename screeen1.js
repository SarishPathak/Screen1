import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://big.assets.huffingtonpost.com/sephora.gif'
    };
	let pics = {
	  uri: 'https://thumbor.vanitee.com/DHYU3RgAZgUWx1Yn3BeMABT5L58=/200x200/https://static.vanitee.com/professional-profiles/o/fe124ffb778761bb85586e8fa2c85d809c888a05.png'
	};
	let picss = {
	  uri: 'https://thumbor.vanitee.com/BH7g09P88xkjfNzo3bq5LZgg0xk=/756x324/https://static.vanitee.com/professional-ids/o/faa12b0d65fa8520cc9e2447bda347ca6c946938.jpeg'
	};

    return (
	  <View>
      <Image source={pics} style={{width: 400, height: 200}}/>
	  <Text>  </Text>
	  <Text> FRANK Organic Facial - Free Aromatic Footsoak	   $68</Text>
	  <Text>  </Text>
      <Text> Vitamin C Bio Brightening Facial-Free Aromatic...  $68</Text>
	  <Text>  </Text>
	  <Text> JOIK Luxury Facial -Free Aromatic Footsoak           $68</Text>
	  <Text>   </Text>
	  <Image source={pic} style={{width:400, height:150}}/>
	  <Image source={picss} style={{width:400, height:150}}/>
	  	  </View>
    );
  }
}




