import React from 'react';
import { ScrollView, Linking} from 'react-native';
import { Button, Card,CardTitle,CardImage,CardContent,CardAction,Text, PricingCard, Tile } from 'react-native-elements';

// Make a component
const Activitydetail = (props) => {
  const { title, 
          time,
          place,
          introduce,
          url,
          image,
          descriptions,
  } = props.navigation.state.params;

  const { boldFont } = styles;

  return (
    <ScrollView>

      <Tile
        imageSrc={{ uri: image }}
        featured
        title={title.toUpperCase()}
      />

      <PricingCard
          color='#4f9deb'
          title={`${title}`}
          info={[`${introduce}`,`Time: ${time}`, `Place: ${place}`]}
          button={{ title: '加關注', icon:'star-border'}}
      />
      
      <Card>
        <Text style={boldFont}>活動簡介:</Text>
        <Text style={{ marginBottom: 20 }}>
          {descriptions}          
        </Text>
        <Button
          raised
          backgroundColor='#03A9F4'
          title='了解更多'
          onPress={() => Linking.openURL(url)}
          icon={{ name: 'star-border' }}
        />
      </Card>

    </ScrollView>
  );
};

const styles = {
  boldFont: {
    fontWeight: 'bold'
  }
};


export default Activitydetail;