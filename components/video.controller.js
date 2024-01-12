const videoServices = require("../services/videoServices");
const { createResponse, createError } = require("../utiils/helper");

class VideoController {
  /**
   * @description signup new user
   */
  async uploadVideo(req, res) {
    try {
      const isValid = await videoServices.uploadVideo(req);
      if (isValid) {
        createResponse(res, true, "upload successfully ...", isValid);
      } else {
        createResponse(res, false, "Error upload");
      }
    } catch (e) {
      createError(res, e);
    }
  }
  /**
   * @description Add Subtitles
   */
  async addSubtitles(req, res) {
    try {
      const isValid = await videoServices.addSubtitles(req);
      if (isValid) {
        createResponse(res, true, "Add successfully ...", isValid);
      } else {
        createResponse(res, false, "Error to add subtitles");
      }
    } catch (e) {
      createError(res, e);
    }
  }
  /**
   * @description Get All Videos
   */
  async getAllVideos(req, res) {
    try {
      const isValid = await videoServices.getAllVideos(req);
      if (isValid) {
        createResponse(res, true, "Get successfully ...", isValid);
      } else {
        createResponse(res, false, "Error to get subtitles");
      }
    } catch (e) {
      createError(res, e);
    }
  }
  /**
   * @description Delete Video
   */
  async deleteVideo(req, res) {
    try {
      const isValid = await videoServices.deleteVideo(req);
      if (isValid) {
        createResponse(res, true, "Delete successfully ...", isValid);
      } else {
        createResponse(res, false, "Error to Delete Video");
      }
    } catch (e) {
      createError(res, e);
    }
  }
}

const videoController = new VideoController();
module.exports = videoController;
