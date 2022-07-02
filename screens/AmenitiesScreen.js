import { View, Text } from "react-native"
import { Image, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { Card } from "react-native-elements";
import { AMMENITIES } from "../data/AMMENITIES";
const AmenitiesScreen=()=>{
    return (
        <View style={{ flex: 1 }}>
             <FlatList
            data={AMMENITIES}
            renderItem={({ item }) => (
                <Card>
                    <Card.Title>{item.name}</Card.Title>
                    <Image style={styles.image} source={item.image}/>
                    <Text style={{margin:10, textAlign: 'center'}}>{item.description}</Text>
                </Card>
              )}/>   
            
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:310,
        height:310
    }
})

export default AmenitiesScreen