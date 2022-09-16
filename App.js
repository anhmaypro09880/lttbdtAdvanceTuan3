import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {Image} from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 3,alignItems:'center',justifyContent:'center'}} >
          <Image source={require('./assets/circle.png')}></Image>
      </View>
      <View style={{ flex: 1 }}>
          <Text style={{fontSize:30,textAlign:'center'}}>GROW {"\n"} YOUR BUSSINESS</Text>
      </View>
      <View style={{ flex: 3,alignItems:'center',justifyContent:'center'}} >
          <Text style={{fontSize:15,textAlign:'center'}}>We will help you to grow your business{"\n"} using online server</Text>
      </View>
      <View style={{ flex: 1,flexDirection:'row',justifyContent:'space-between' }}>
          <TouchableOpacity style={styles.button}>
              <Text style={{textAlign:'center',justifyContent:'center'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Text>Logout</Text>
          </TouchableOpacity>
      </View>
      <View style={[styles.view]}>
          <Text>HOW WE GROW UP</Text>
      </View>
      <View style={[styles.view]}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  button: {
    alignItems: "center",
    backgroundColor: "#E3C000",
    
    height:50,
    width:100,
    
  },
  view:{
    alignItems:'center',justifyContent:'center',flex:1
  }
});
