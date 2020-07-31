import PropTypes from 'prop-types';

const resultObjProps = PropTypes.shape({
  id: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
  review_count: PropTypes.number,
  image_url: PropTypes.string,
});


module.exports = {
  resultObjProps,
}
