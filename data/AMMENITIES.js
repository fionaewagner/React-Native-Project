
const pool = require('../imgs/hotel-pool-two.jpeg')
const gym = require('../imgs/hotel-gym.jpeg')
const breakfast = require('../imgs/hotel-breakfast.jpeg')

export const AMMENITIES = [
    {
        id:0,
        name: 'Luxury Pool & Spa',
        image: pool,
        description: `Make your getaway truly relaxing with our onsite pool 
        and spa. This luxurious space features a
        balmy heated indoor pool and beautiful outdoor garden veiws 
     with full-length windows. Towels are provided, lockers and showers 
 are also availbe. See the front coutner for locker rentals.`,
        list:['Heated Pool', 
        'Sauna', 
        'Steam Room',
        'Free, complementary towel service']
    },
    {
        id:1,
        name: 'Fitness Center',
        image: gym,
        description: `No excuses to miss a workout with our complimentary Fitness Center. 
        We offer a wide variety of Free-Weights, two high-end Treadmills,
         an Elliptical Trainer and a Stationary Bike. Excercise bands and yoga mats are also available.`,
         list:['24-hour', 'West-Facing View', 'Multiple Workout Stations','Heavy Weights']
    },
    {
        id:2,
        name: 'Conventional Breakfast',
        image: breakfast,
        description: `Free, hot breakast is served every morning at Eight
        AM in our spacious dining area complete with 
        comfortable seating and multiple HDTVs for your 
        veiwing pleasure. Join us for favorites like 
        waffles, bacon, eggs, oatmeal, and many 
        others.`,
        list:['Wheel Chair accessible', 'Air-conditioned','Kid-friendly']
    }
    
]