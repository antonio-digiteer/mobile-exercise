import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: '5%', 
    paddingVertical: Platform.OS === "android" ? '50%' : '0%',
  },

   homecontainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: '5%', 
    paddingVertical: Platform.OS === "android" ? '10%' : '0%',
   },

  header: {
    flexDirection: "row",  
  },
     
  text: {
    fontSize: 24,
    fontWeight: "700",
    color:"#333"
  },

   input: {
    marginBottom: 5,
    padding: 10,
    marginTop:10,
    width: '80%', 
  },

    inputContainer: {
    width: '80%',
  },
  
  LoginButton:{
    backgroundColor: '#7D0A0A',
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
    width:'30%',
    alignSelf: 'center', 
  },

  EmojiButton:{
    backgroundColor: '#BF3131',
    paddingVertical:10,
    paddingTop:'3.5%',
    paddingBottom:'3.5%',
    marginTop:50,
    marginLeft:50,
    marginRight:50,
    borderRadius: 5,
    marginVertical: 10,
  },

  LogoutButton:{
    backgroundColor: '#7D0A0A',
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
    marginLeft:130,
    marginRight:130,
  },
  
 

  //quotes & facts styles

  apicontainer:{
    padding: 20,
    gap: 10,
  },

  apitext: {
    fontSize:24,
    fontWeight: "700",
    backgroundColor: "#F3EDC8", 
    padding: 10, 
    borderRadius: 6, 
    marginBottom: 10, 
    color: "#333", 
  },

  buttonContainer: {
    alignItems: "center"
  },

    apibutton: {
    backgroundColor: "#7D0A0A",
    marginTop:30,
    borderRadius: 6,
    paddingTop:13,
    paddingBottom:13,
    width: "50%"
  },

    author: {
    fontSize: 16,
    alignSelf: "flex-end",
    color: "#700909",
    fontWeight: "700",

  },

initialText: {
    fontSize:24,
    fontWeight: "700",
    color: "#333", 
    backgroundColor: 'transparent', // Set your desired background color here
}

});
