import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  Image,
} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import styles from './styles';
import data from '../mock.json';

interface Movie {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
}

const keyExtractor = (movie: Movie) => String(movie.id);

export interface MoviesListScreenProps {}

const MoviesListScreen: NavigationStackScreenComponent<
  {},
  MoviesListScreenProps
> = props => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const renderMovieItem = ({item}: ListRenderItemInfo<Movie>) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        props.navigation.navigate({
          routeName: 'MovieDetails',
          params: {
            title: item.title,
            id: item.id,
          },
        })
      }
    >
      <View style={styles.itemImageContainer}>
        <Image
          style={styles.itemImage}
          source={{
            uri: item.posterUrl,
          }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.itemInfo}>
        <Text style={styles.itemInfoTitle}>{item.title}</Text>
        <Text style={styles.itemInfoSubtitle}>{item.genres.join(' · ')}</Text>
      </View>
    </TouchableOpacity>
  );

  const filteredMovies = selectedGenres.length
    ? data.movies.filter(movie =>
        movie.genres.some(genre => selectedGenres.includes(genre))
      )
    : data.movies;

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <Text style={styles.subtitle}>Genres</Text>
      <View style={styles.filters}>
        {data.genres.map(genre => {
          const isGenreSelected = selectedGenres.includes(genre);

          const handleGenrePress = () => {
            const nextSelectedGenres = isGenreSelected
              ? selectedGenres.filter(f => f !== genre)
              : [...selectedGenres, genre];

            setSelectedGenres(nextSelectedGenres);
          };

          return (
            <TouchableOpacity
              style={
                isGenreSelected
                  ? [styles.filter, styles.filterActive]
                  : styles.filter
              }
              key={genre}
              onPress={handleGenrePress}
            >
              <Text
                style={
                  isGenreSelected
                    ? [styles.filterText, styles.filterActiveText]
                    : styles.filterText
                }
              >
                {genre}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={styles.subtitle}>Movies ({filteredMovies.length})</Text>
      <FlatList
        data={filteredMovies}
        renderItem={renderMovieItem}
        keyExtractor={keyExtractor}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

MoviesListScreen.navigationOptions = {
  title: 'Movies',
};

export default MoviesListScreen;
