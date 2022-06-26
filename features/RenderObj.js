import { Text } from "react-native";
import { Card } from "react-native-elements";

const RenderObj =({obj})=>{
    console.log(obj)
    return(
        <Card>
            <Card.Title>{obj.name}</Card.Title>
            <Card.Divider/>
            <Text>{obj.description}</Text>

        </Card>

    )

}

export default RenderObj