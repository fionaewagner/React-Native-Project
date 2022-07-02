import { View, Linking, Text, StyleSheet, Image } from "react-native"
import { Card } from "react-native-elements";
const ContactScreen=()=>{
    return (
        <View style={{ flex: 1 }}>
            <Card>
                <Text style={styles.formItem}>Green Palms Hotel</Text>
                <Text style={styles.formItem}>Greenpalmshotel@gmail.com</Text>
                <Text style={styles.formItem}>202-555-0138</Text>
                <Text style={styles.formItem}>Keep in Touch:</Text>
                <Text style={styles.formItem} 
                    onPress={() => Linking.openURL("https://www.instagram.com/?hl=en")}>
                    Instagram
                </Text>
                <Text style={styles.formItem} 
                    onPress={() => Linking.openURL("https://www.facebook.com/")}>
                Facebook
            </Text>
            </Card>
            <Image source={require('../imgs/hotel-spa.jpeg')} style={{width:345, height:345, alignSelf: 'center'}}></Image>
            
        </View>
    );
}

const styles = StyleSheet.create({
    formItem:{
        margin: 10, 
        textAlign:'center'

    }

})

export default ContactScreen