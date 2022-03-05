
const today = new Date()
const tomorrow = today.getDate()+1;
const dayAfterTomorrow = today.getDate()+2

export const dataStore = {
    hotels: [
        {
            id: 1,
            hotel_name: "Waldorf Astoria Nashville",
            address: 1
        },
        {
            id: 2,
            hotel_name: "Super 10 budget Motel",
            address: 2
        }
    ],
    rooms: [
        {
            id: 1,
            room_number: "1001",
            room_type: "Presidential Suite",
            has_minibar: true,
            hotel: 1
        },
        {
            id: 2,
            room_number: "1002",
            room_type: "Prime Ministerial Suite",
            has_minibar: true,
            hotel: 1
        },
        {
            id: 3,
            room_number: "101",
            room_type: "Economy Plus",
            has_minibar: false,
            hotel: 1
        },
        {
            id: 4,
            room_number: "4",
            room_type: "Room",
            has_minibar: false,
            hotel: 2
        }
    ],
    addresses: [
        {
            id: 1,
            street: "2nd Ave S",
            city: "Nashville",
            state: "TN",
            zip: "37201"
        },
        {
            id: 2,
            street: "200th Ave S",
            city: "Nashville",
            state: "TN",
            zip: "01874"
        },
        {
            id: 3,
            street: "1600 Pennsylvania Ave",
            city: "Washington",
            state: "DC",
            zip: "20001"
        },
        {
            id: 4,
            street: "1602 Pennsylvania Ave",
            city: "Washington",
            state: "DC",
            zip: "20001"
        }
    ],
    customers: [
        {
            id: 1,
            customer_name: "Alice",
            address: 3
        },
        {
            id: 2,
            customer_name: "Bob",
            address: 4
        }
    ],
    reservations: [
        {
            id: 1,
            start_date: today,
            end_date: tomorrow,
            room_id: 1,
            customer_id: 1
        },
        {
            id: 2,
            start_date: tomorrow,
            end_date: dayAfterTomorrow,
            room_id: 4,
            customer_id: 2
        }
    ]
}
