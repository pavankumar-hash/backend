import mongoose, { Schema } from "mongoose";

const subscribeSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
export const Subsciption = mongoose.model("Subscription", subscribeSchema);
