import {StyleSheet, Platform, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  headerLogo: {
    height: 80,
    width: 300,
    marginTop: Platform.OS === 'android' ? 20 : 0,
    alignSelf: 'center',
  },
  btnstyle: {
    width: '25%',

    borderColor: '#707070',
    paddingVertical: 7,
    borderRadius: 3,
    alignSelf: 'center',
  },
  pinText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,

    alignSelf: 'center',
  },
  counter: {
    backgroundColor: '#ddd',
    // padding: 10,
    width: '30%',
    borderRadius: 100,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slide: {
    height: 50,
    width: '100%',
  },
  cardContainer: {
    flex: 1,
    padding: 5,
    marginVertical: 5,
    // flexDirection: 'row',
    // backgroundColor: '#eee',
    marginBottom: 10,
    // marginVertical: 10,
    marginHorizontal: 15,

    // backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#BDBDBD',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  strip: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  divider: {
    width: '100%',
    height: 1,
  },
  imageContainer: {
    height: height / 1.8,
    alignSelf: 'center',
    width: '100%',
  },
  roundedButton: {
    height: 35,
    width: 35,
    borderRadius: 25,
    backgroundColor: '#000',
    elevation: 1,
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    // padding: 20,
    height: height / 12,
  },
  textinput: {
    width: '80%',
    padding: 10,
    marginBottom: 14,
    color: '#000',
  },
  reviews: {
    margin: 5,

    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  selection: {
    backgroundColor: 'white',
    width: '100%',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
export default styles;
