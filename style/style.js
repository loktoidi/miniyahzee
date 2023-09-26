import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  pagename: {
    marginTop: 25,
    fontSize: 24, 
    textAlign: 'left',
    color: '#84d710'
  },

  container: {
    flex: 1,
    backgroundColor: '#065306'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: 'skyblue',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  placeholderText: {
color: '#ffffff',
fontSize: 16,
  }, 
  playerNameInput: {
    color: '#98d438',
    fontSize: 18,
  },
  rulesText:{
    color: '#ffffff',
  },
  goodLuckContainer:{
    backgroundColor: '#58ef58'
  },

  goodLuckText:{
    color: '#111111',
    fontSize: 18,
  },

  author: {
    color: '#fbfdf9',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  }
});