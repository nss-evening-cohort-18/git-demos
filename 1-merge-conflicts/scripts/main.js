import { data } from "./database.js";

console.log(`the database is: \n ${JSON.stringify(data)}`)

// This function takes in a hotel id and will iterate through the rooms
// and take a total count of rooms have the same hotel_id as the argument,
// and return the sum
const getNumberOfRooms = (hotel_id) => {
    const rooms = data.rooms

    let roomCount = 0
    for (const room of rooms) {
        if (hotel_id === room.hotel) {
            roomCount++
        }
    } 
    return roomCount
}

const getHotelAddress = (hotel_id) => {
    let hotelAddress = null;

    for (hotel of data.hotels) {
        if (hotel_id === hotel.id) {
            address = hotel.address
            for (address of data.addresses) {
                if (hotelAddress === address.id ) {
                    hotelAddress = address
                }
            }
        }
    }

    if (hotelAddress === null) {
        console.warn(`no address found for hotel ID: ${hotel_id}`)
    }
    return hotelAddress
}