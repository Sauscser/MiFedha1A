import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 670,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  loanTitleView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: 40,
    borderRadius: 5,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: 10,
  },

  sendLoanView: {
    backgroundColor: 'skyblue',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: 90,
    borderRadius: 20,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 20,
  },

  sendLoanText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    marginLeft: 30,
  },
  sendLoanButton: {
    backgroundColor: '#fff',
    height: 45,
    borderRadius: 30,
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 400,
  },
  sendLoanButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  sendLoanInput: {
    backgroundColor: 'white',
    width: 300,
    height: 45,
    borderRadius: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  LoanSpecificationsTextInput: {
    backgroundColor: 'white',
    width: 300,
    height: 200,
    borderRadius: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  LoanSpecificationView: {
    backgroundColor: 'skyblue',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: 250,
    borderRadius: 20,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 20,
  },
});
export default styles;