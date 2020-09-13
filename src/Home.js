import React from 'react';
import {Container, Content, Text, Item, Input} from 'native-base';
import {FlatList} from 'react-native';
import Post from './Post';
import react from 'react';

const Home = ({navigation}) => {
  const URL = 'https://hn.algolia.com/api/v1/search_by_date';
  const [page, setPage] = React.useState(0);
  const [posts, setPosts] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const [filtered, setFiltered] = React.useState([]);

  const getData = () => {
    if (posts.length < 20 * (page + 1)) {
      fetch(`${URL}?tags=story&page=${page}`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json.hits.length);
          setPosts([...posts, ...json.hits]);
        })
        .catch((e) => {
          console.log('Error: ', e);
        });
    }
  };

  const incrementPage = () => {
    setPage((page) => page + 1);
  };

  React.useEffect(() => {
    if (page !== 0) {
      getData();
    }
  }, [page]);

  React.useEffect(() => {
    getData();

    const interval = setInterval(() => {
      incrementPage();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const search = (text) => {
    setQuery(text);
    if (text) {
      filterPosts(text);
    }
  };

  const filterPosts = (search) => {
    const titleSearch = posts.filter(
      (x) => x.title.toLowerCase().indexOf(search.toLowerCase()) > -1,
    );

    const urlSearch = posts.filter(
      (x) => x.url?.toLowerCase().indexOf(search.toLowerCase()) > -1,
    );

    const authorSearch = posts.filter(
      (x) => x.author.toLowerCase().indexOf(search.toLowerCase()) > -1,
    );

    const allResults = [...titleSearch, ...urlSearch, ...authorSearch];

    const searchResults = allResults.reduce((unique, x) => {
      if (!unique.some((el) => el.objectID === x.objectID)) {
        unique.push(x);
      }
      return unique;
    }, []);

    setFiltered(searchResults);
  };

  return (
    <Container>
      <Item>
        <Input
          value={query}
          onChangeText={search}
          placeholder="Enter search term"
        />
      </Item>
      <FlatList
        onEndReached={incrementPage}
        onEndReachedThreshold={0.5}
        data={filtered.length === 0 ? posts : filtered}
        renderItem={({item, index}) => <Post post={item} key={item.objectID} />}
        keyExtractor={(post, index) => post.objectID}
      />
    </Container>
  );
};

export default Home;
