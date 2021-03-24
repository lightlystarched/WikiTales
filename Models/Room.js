// Dependencies
import mongoose from 'mongoose'

// Custom
export default class Room {
  constructor() {
    console.log('Rooms model initialized')
  }

  // Retrieve the list of Rooms
  get(specifics = 'no specifics') {
    console.log(`Fetching rooms with ${specifics}`)

    return 'Heres your requested rooms'
  }

  getAll() {
    return 'Here are ALL the rooms'
  }
}
