import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,Image,} from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';


import activity from '../json/activity.json';


// Make a component
class Activity extends Component {
  state = { activity: [] };

  componentWillMount() {
    this.setState({ activity });
  }

  goToPageTwo = (activity) => {
    this.props.navigation.navigate('Activitydetail', { ...activity });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {this.state.activity.map((activity) => (
            <ListItem
              key={activity.title}
              roundAvatar
              avatar={{ uri: activity.image }}
              title={activity.title}
              subtitle={activity.time}
              onPress={() => this.goToPageTwo(activity)}
              // hideChevron
              // rightTitle='More...'
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Activity;
