import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ResultsDetail from './ResultsDetail';
import PropTypes from 'prop-types';
import { resultObjProps } from '../constants/customPropTypes';

const ResultsList = ({ title, results }) => {

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      {results.length > 0 && (
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => <ResultsDetail result={item} />}
      />
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  containerStyle: {
    marginBottom: 10,
  },
});

ResultsList.propTypes = {
  results: PropTypes.arrayOf(resultObjProps),
}

export default ResultsList;

