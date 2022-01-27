import {View, StyleSheet, Pressable, Text} from 'react-native'
import Constants from 'expo-constants'

 const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight + 60,
      paddingBottom: 16,
      paddingLeft: 16,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#24292e',
    },
    text: {
      color: 'white',
    }
  })

const AppBar = () => {

 return(
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.text}>Repositories</Text>
      </Pressable>
    </View>
 )
}

export default AppBar