// List of models
//  NOTE: These should be alphabetical
import Rooms from './Rooms.js';

// Create a container for the Models that are being used
// TODO: This should eventually be moved into a Service for dynamic loading and unloading of models, rather than packing them all up into a single object. This won't become an issue until we start to get enough models to bloat this object list however.
export default {
  Rooms: new Rooms(),
};
