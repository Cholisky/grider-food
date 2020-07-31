import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterResultsByPrice = (price) => {
    return restaurants.filter(r => r.price?.length === price.length)
  }

  useEffect(() => setTerm(''), []);

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage !== '' && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <Text>We have found {restaurants.length} results</Text>
      <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
      <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
      <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
      <ResultsList title="Lottery Winner" results={filterResultsByPrice('$$$$')} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },
  errorMessage: {
    color: 'red',
  },
});

export default SearchScreen;
