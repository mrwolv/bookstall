import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    selectedTypeStall: String,
    selectedStallNumber: Number,
    cartItems: Array,
  },
  {
    timestamps: true,
  }
);

export const Bookings =
  mongoose.models.bookings || mongoose.model("bookings", bookingSchema);
