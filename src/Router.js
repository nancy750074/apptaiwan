import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Map from './components/Map';
import Festivals from './components/Festivals';
import Culture from './components/Culture';
import Activity from './components/Activity';
import MyLove from './components/MyLove';
import Activitydetail from './components/Activitydetail';


export const MapStack = StackNavigator({
  Map: {
    screen: Map,
    navigationOptions: {
      header: () => ({
        title: 'Map',
      })
    },
  },
});
export const FestivalsStack = StackNavigator({
  Festivals: {
    screen: Festivals,
    navigationOptions: {
      header: () => ({
        title: 'Festivals',
      })
    },
  },
});
export const CultureStack = StackNavigator({
  Culture: {
    screen: Culture,
    navigationOptions: {
      header: () => ({
        title: 'Culture',
      })
    },
  },
});
export const ActivityStack = StackNavigator({
  Activity: {
    screen: Activity,
    navigationOptions: {
      header: () => ({
        title: 'Activity',
      })
    },
  },
  Activitydetail: {
    screen: Activitydetail,
    navigationOptions: {
      header: ({ state }) => ({
        title: `${state.params.title.toUpperCase()}`,
      })
    },
  },
});
export const MyLoveStack = StackNavigator({
  MyLove: {
    screen: MyLove,
    navigationOptions: {
      header: () => ({
        title: 'MyLove',
      })
    },
  },
});

export const TabRouter = TabNavigator(
  {
    MapStack: {
      screen: MapStack,
      navigationOptions: {
        tabBar: {
          label: 'Map',
          icon: ({ tintColor }) => <Icon name="map" size={20} color={tintColor} />
        },
      },
    },
    FestivalsStack: {
      screen: FestivalsStack,
      navigationOptions: {
        tabBar: {
          label: 'Festivals',
          icon: ({ tintColor }) => <Icon name="grade" size={20} color={tintColor} />
        },
      },
    },

    CultureStack: {
      screen: CultureStack,
      navigationOptions: {
        tabBar: {
          label: 'Culture',
          icon: ({ tintColor }) => <Icon name="child-care" size={20} color={tintColor} />
        },
      },
    },

    ActivityStack: {
      screen: ActivityStack,
      navigationOptions: {
        tabBar: {
          label: 'Activity',
          icon: ({ tintColor }) => <Icon name="streetview" size={20} color={tintColor} />
        },
      },
    },
    MyLoveStack: {
      screen: MyLoveStack,
      navigationOptions: {
        tabBar: {
          label: 'My Love',
          icon: ({ tintColor }) => <Icon name="filter-vintage" size={20} color={tintColor} />
        },
      },
    },
  },
  {
    animationEnabled: 'true',
  }
);
