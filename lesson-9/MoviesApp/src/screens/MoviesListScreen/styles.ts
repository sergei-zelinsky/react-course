import {StyleSheet} from 'react-native';

const PRIMARY_COLOR = '#2196f3';

export default StyleSheet.create({
  root: {
    paddingVertical: 20,
  },
  subtitle: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  filters: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  filter: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,

    borderStyle: 'solid',
    borderColor: PRIMARY_COLOR,
    borderWidth: 2,
    marginRight: 10,
    marginBottom: 10,
  },
  filterActive: {
    backgroundColor: PRIMARY_COLOR,
  },
  filterText: {
    fontSize: 15,
    color: PRIMARY_COLOR,
  },
  filterActiveText: {
    color: 'white',
  },

  item: {
    flexDirection: 'row',
    padding: 10,
  },
  itemImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    marginRight: 10,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  itemInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  itemInfoTitle: {
    fontSize: 15,
    marginBottom: 5,
  },
  itemInfoSubtitle: {
    fontSize: 13,
    color: '#999',
  },
});
