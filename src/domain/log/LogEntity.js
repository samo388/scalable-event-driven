const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema(
  {
    userId: String,
    action: String,
    timestamp: Date,
    processedAt: Date,
  },
  { timestamps: true }
);

LogSchema.index({ userId: 1 });
LogSchema.index({ action: 1 });
LogSchema.index({ timestamp: -1 });

module.exports = mongoose.model("Log", LogSchema);
