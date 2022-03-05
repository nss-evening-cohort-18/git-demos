import { database } from "./database.js";

console.log(`the database is: \n ${JSON.stringify(database)}`)

// This function takes in a hotel id and will iterate through the rooms
// and take a total count of rooms have the same hotel_id as the argument,
// and return the sum
const getNumberOfRooms = (hotel_id) => {
    const rooms = database.rooms

    let roomCount = 0
    for (const room of rooms) {
        if (hotel_id === room.hotel) {
            roomCount++
        }
    } 
    return roomCount
}

console.log(getNumberOfRooms(1))