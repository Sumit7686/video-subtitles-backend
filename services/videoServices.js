const Video = require("../model/Video");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

class VideoServices {
  /**
   * @description uploadVideo
   * @param {Object} obj
   */
  async uploadVideo(req) {
    const { file } = req;
    console.log("req::: ", req.body);
    console.log("file::: ", file);

    const newVideo = new Video({
      videoId: uuidv4(),
      path: file.path,
      videoUrl: `${process.env.LIVE_URL}/${file.path}`,
      videoName: file.originalname,
      subtitles: [],
    });

    const result = newVideo.save();
    if (result) {
      return result;
    } else {
      return null;
    }
  }
  /**
   * @description addSubtitles
   * @param {Object} obj
   */

  async addSubtitles(req) {
    try {
      const { videoId, subtitles } = req.body;
      console.log("videoId::: ", videoId);
      console.log("subtitles::: ", subtitles);
      // Find the video by ID
      const video = await Video.findOne({ videoId });
      console.log("video::: ", video);

      if (!video) return null;

      const getVideoData = await Video.updateMany(
        { videoId },
        {
          $set: {
            subtitles,
          },
        }
      );
      if (getVideoData) {
        console.log("getVideoData::: ", getVideoData);
        return getVideoData;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * @description getAllVideos
   * @param {Object} obj
   */
  async getAllVideos(req) {
    try {
      const allVideo = await Video.find().exec();
      console.log("allVideo::: ", allVideo);
      return allVideo;
    } catch (err) {
      return null;
    }
  }
  /**
   * @description deleteVideo
   * @param {Object} obj
   */
  async deleteVideo(req) {
    let id = req.params.id;
    let fileName = req.body.path;
    console.log("id,fileName::: ", id, fileName);
    try {
      const allVideo = await Video.deleteOne({ _id: id });
      console.log("allVideo::: ", allVideo);
      if (!allVideo) {
        console.log("allVideo if::: ", allVideo);
        return null;
      } else {
        fs.unlinkSync(fileName);
        return true;
      }
    } catch (err) {
      console.log("err.message::: ", err.message);
    }
  }
}
const videoServices = new VideoServices();
module.exports = videoServices;
