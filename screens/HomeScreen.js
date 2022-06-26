import { Image, View } from "react-native"
import { Text } from "react-native";
import { Card } from "react-native-elements";
const HomeScreen=()=>{
    return (
        
        <View style={{ flex: 1 }}>
            <Image source={require('../imgs/hotel-bed-king.jpg')}/>
            <Card>
            <Card.Title>Welcome to... </Card.Title>
            <Card.Title>Green Palms Hotel</Card.Title>
            <Card.Divider/>
                <Text style={{ margin: 10 }}>
                Originally founded in 1995, this luxury hotel has all the 
                works you could dream of for your next vacation. 
                From our unqiue rooms with stunning views of the 
                grounds, to our realxing pool and spa, there's
                something here for everyone. 
                Book your stay today and embark on an experience 
                you'll never forget.
                </Text>
            </Card>
            
        </View>
    );
}

export default HomeScreen