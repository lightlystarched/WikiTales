// Dependencies
import mongoose from 'mongoose';

// Custom
export default class Rooms {
  constructor() {
    console.log('Rooms model initialized');
  }

  // Retrieve the list of Rooms
  get() {
    console.log('Fetching rooms');
    return 'Here are your list of rooms';
  }
}
