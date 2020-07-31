import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { withNavigation} from 'react-navigation';
import ResultsDetail from './ResultsDetail';
import PropTypes from 'prop-types';
import { resultObjProps } from '../constants/customPropTypes';

const ResultsList = ({ title, results, navigation }) => {
if(!results.length){return null;}
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      {results.length > 0 && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={result => result.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          )}
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

export default withNavigation(ResultsList);

