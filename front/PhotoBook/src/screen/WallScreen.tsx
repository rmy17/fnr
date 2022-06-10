import React from 'react';
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ArticleList from '../articles/ArticlesList';
import NewArticle from '../articles/NewArticle';
import {backendUrl} from '../env';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {
  fetchAllArticles,
  selectArticleStatus,
} from '../redux/slices/articles.slice';

const WallScreen = () => {
  const dispatch = useAppDispatch();
  const articleStatus = useAppSelector(selectArticleStatus);
  const onRefresh = () => {
    dispatch(fetchAllArticles());
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={articleStatus === 'loading'}
          onRefresh={onRefresh}
        />
      }
      style={styles.mainContainer}>
      <Image
        style={styles.image}
        source={{uri: backendUrl + '/images/wall.jpeg'}}
      />
      <NewArticle />
      <ArticleList />
    </ScrollView>
  );
};

export default WallScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.dark,
  },
  textContainer: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  image: {
    height: 300,
    width: '100%',
  },
});
