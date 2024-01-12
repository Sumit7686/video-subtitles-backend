// Define mongoose schema for Video and Subtitle

const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  videoId: String,
  path: String,
  videoUrl: String,
  subtitles: Array,
  videoName: String,
});
const Video = mongoose.model("Video", videoSchema);
module.exports = Video;
