import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { resultObjProps } from '../constants/customPropTypes';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  nameStyle: {
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 250,
    borderRadius: 4,
    height: 120,
  },
  containerStyle: {
    marginLeft: 15,
  },
});

ResultsDetail.propTypes = {
  result: resultObjProps.isRequired,
}

export default ResultsDetail;

