import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 650,
    resizeMode: 'cover',

    backgroundColor: '#db11ec',
  },

  accountView: {
    backgroundColor: 'skyblue',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: 150,
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 10,
  },

  viewForPressables: {
    backgroundColor: 'green',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: 200,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  viewForSalesPressables: {
    backgroundColor: 'green',
    marginHorizontal: 4,
    width: Dimensions.get('screen').width - 8,
    height: 170,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  myMoneyPressables: {
    backgroundColor: 'purple',
    marginHorizontal: 1,
    width: Dimensions.get('screen').width - 2,
    height: 60,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    width: 80,
  },

  acPressables: {
    backgroundColor: 'purple',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: 60,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    width: 80,
  },

  viewForSalesPressables: {
    backgroundColor: 'green',
    marginHorizontal: 15,
    width: Dimensions.get('screen').width - 30,
    height: 100,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  acPressableText: {
    color: 'white',
    fontSize: 15,
    marginTop: 1,
  },

  accountText: {
    fontSize: 25,
    color: 'white',
  },
});
export default styles;