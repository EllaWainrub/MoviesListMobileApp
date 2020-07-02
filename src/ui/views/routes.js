import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MoviesListView from '../views/Movies/MoviesListView';
import Feed from '../views/Feed/Feed';
import Movie from '../views/Movies/Movie/MoviePage'

const feedNavigator = createStackNavigator(
    {
        feed: { screen: Feed },
        movies: { screen: MoviesListView },
        movie: { screen: Movie }
    }, {
        headerMode: 'none',
    }
);

export default createAppContainer(feedNavigator);