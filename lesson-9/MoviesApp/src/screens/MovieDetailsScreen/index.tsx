import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {
  NavigationStackScreenProps,
  NavigationStackOptions,
} from 'react-navigation-stack';
import styles from './styles';

export interface MovieDetailsScreenProps extends NavigationStackScreenProps {}
export interface MovieDetailsScreenState {}

class MovieDetailsScreen extends React.Component<
  MovieDetailsScreenProps,
  MovieDetailsScreenState
> {
  static navigationOptions = ({
    navigation,
  }: MovieDetailsScreenProps): NavigationStackOptions => ({
    title: navigation.getParam('title'),
  });

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.root}>
        <Text>// @TODO: Movie Id: {navigation.getParam('id')} 😉</Text>
      </View>
    );
  }
}

export default MovieDetailsScreen;
