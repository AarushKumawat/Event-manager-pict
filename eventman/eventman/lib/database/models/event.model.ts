import { Document, model, models, Schema, Types } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location: Date;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category: {_id: string, name: string}; // Referencing Category
  organizer: {_id: string, firstName: string, lastName: string }; // Referencing User
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: Date }, // Corrected from Date to string or appropriate type
  createdAt: { type: Date, default: Date.now }, // Corrected type from String to Date
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  organizer: { type: Schema.Types.ObjectId, ref: 'User' }, // Corrected the typo 'oraganizer'
});

const Event = models.Event || model('Event', EventSchema);

export default Event;
