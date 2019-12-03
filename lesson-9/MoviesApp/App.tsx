import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MoviesListScreen from './src/screens/MoviesListScreen';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';

const MainNavigator = createStackNavigator({
  MoviesList: {screen: MoviesListScreen},
  MovieDetails: {screen: MovieDetailsScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
