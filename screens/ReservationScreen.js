import { useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Switch,
    Button,
    Modal,
    Pressable
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';


const ReservationScreen = () => {
    const [guests, setGuests] = useState(1);
    const [room, setRoom] = useState('')
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const[selectedButton, setSelectedButton] = useState("");

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowCalendar(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const handleReservation = () => {
        console.log('guests:', guests);
        
        console.log('date:', date);
        setShowModal(!showModal);
    };

    const resetForm = () => {
        setGuests(1);
        
        setDate(new Date());
        setShowCalendar(false);
    };

    return (
        <ScrollView>
            
            <View style={styles.formRow}>
            
                <Text style={styles.formLabel}>Number of Guests:</Text>
                <Picker
                    style={styles.formItem}
                    selectedValue={guests}
                    onValueChange={(itemValue) => setGuests(itemValue)}
                >
                    <Picker.Item label='1' value={1} />
                    <Picker.Item label='2' value={2} />
                    <Picker.Item label='3' value={3} />
                    <Picker.Item label='4' value={4} />
                    <Picker.Item label='5' value={5} />
                    <Picker.Item label='6' value={6} />
                </Picker>
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabel2}>Room:</Text>
            </View>
            <View style={styles.formRow}>
            <Pressable style={{ backgroundColor:
                            room === "King Room"
                                ? "black"
                                : "gray", 
                                paddingVertical: 10,
                                paddingHorizontal: 5,
                                borderRadius: 4,
                                elevation: 3,
                               marginRight:10}} 
                                onPress={()=> setRoom("King Room")}>
                <Text style={styles.text}>King Suite</Text>
            </Pressable>

            <Pressable style={{ backgroundColor:
                            room === "Queens Room"
                                ? "black"
                                : "gray", 
                                paddingVertical: 10,
                                paddingHorizontal: 5,
                                borderRadius: 4,
                                elevation: 3,
                               marginRight:10}} 
                                onPress={()=> setRoom("Queens Room")}>
                <Text style={styles.text}>Queens Suite</Text>
            </Pressable>

            <Pressable style={{ backgroundColor:
                            room === "Master Suite"
                                ? "black"
                                : "gray", 
                                paddingVertical: 10,
                                paddingHorizontal: 5,
                                borderRadius: 4,
                                elevation: 3,
                               marginRight:10}} 
                                onPress={()=> setRoom("Master Suite")}>
                <Text style={styles.text}>Master Suite</Text>
            </Pressable>
            
                
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Date:</Text>
                <Button
                    onPress={() => setShowCalendar(!showCalendar)}
                    title={date.toLocaleDateString('en-US')}
                    color='black'
                    accessibilityLabel='Tap me to select a reservation date'
                />
            </View>
            {showCalendar && (
                <DateTimePicker
                    style={styles.formItem}
                    value={date}
                    mode='date'
                    display='default'
                    onChange={onDateChange}
                />
            )}
            <View style={styles.formRow}>
                <Button
                    onPress={() => handleReservation()}
                    title='Search Availability'
                    color='#5637DD'
                    accessibilityLabel='Tap me to search for available campsites to reserve'
                />
            </View>
            <Modal
                animationType='slide'
                transparent={false}
                visible={showModal}
                onRequestClose={() => setShowModal(!showModal)}
            >
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>
                        Search Hotel Reservations
                    </Text>
                    <Text style={styles.modalText}>
                        Number of Guests: {guests}
                    </Text>
                    <Text style={styles.modalText}>
                        Room: {room}
                    </Text>
                    
                    <Text style={styles.modalText}>
                        Date: {date.toLocaleDateString('en-US')}
                    </Text>
                    <Button
                        onPress={() => {
                            setShowModal(!showModal);
                            resetForm();
                        }}
                        color='#5637DD'
                        title='Close'
                    />
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formLabel2: {
        fontSize: 18,
        flex: 2, 
        textAlign: 'center'
    },
    formItem: {
        flex: 1
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#5637DD',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      }
});

export default ReservationScreen;