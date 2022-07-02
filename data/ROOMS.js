
const kingRoom = require('../imgs/hotel-bed-king.jpg')
const queensRoom = require('../imgs/hotel-bed-queens.jpg')
const masterSuite = require('../imgs/hotel-bed-suite.jpg')


export const ROOMS = [
    {
        id: 0,
        name: "King Suite",
        image:  kingRoom,
        description: `Our Deluxe King Rooms feature a single King size bed and bathroom
        with a shower-bathtub combo. Complimentary wi-fi and cable is provided.
        Rooms with East and West facing views are available.`,
        list:["Non-smoking",
        "No Pets",
        "Free high-speed wi-fi",
        "Flat-screen HDTV",
        "Keurig Coffee Maker"]
    },
    {
        id: 1,
        name: "Queens Suite",
        image:  queensRoom,
        description: `Our Deluxe Double Queen Rooms feature two Queen sized beds and bathroom
        with a shower/bathtub combo. Complimentary wi-fi and cable is provided.
        Rooms with East and West facing views are available.`,
        list:["Non-smoking",
        "No Pets",
        "Free high-speed wi-fi",
        "Flat-screen HDTV",
        "Keurig Coffee Maker"]
    },

    {
        id: 2,
        name: "Master Suite",
        image:  masterSuite,
        description: `Our Master Suite Rooms feature a single king sized bed, 
        bathroom with bath/shower combo, kitchenette with mini-fridge 
        and induction stovetop, and a comfortable living area. 
        Complimentary wi-fi and cable is provided.
        Rooms with East and West facing views are available.`,
        list:["Non-smoking",
        "No Pets",
        "Free high-speed wi-fi",
        "Flat-screen HDTV & DVD player",
        "Keurig Coffee Maker"]
    },

]