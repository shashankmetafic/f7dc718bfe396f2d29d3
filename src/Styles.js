import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
  },
  date: {
    fontSize: 12,
    textAlign: 'right',
    flex: 1,
  },
  author: {
    fontSize: 12,
  },
  url: {
    textAlign: 'center',
    fontSize: 14,
    color: '#4d4d4d',
    flex: 1,
  },
  card: {
    marginBottom: 14,
    paddingVertical: 12,
    marginTop: 8,
  },
  cardContent: {
    backgroundColor: '#ebebeb',
    marginHorizontal: 12,
    paddingBottom: 14,
    alignSelf: 'center',
  },
  search: {
    textAlign: 'center',
    fontSize: 14,
    marginHorizontal: 8,
  },
});

export default Styles;
