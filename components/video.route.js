const express = require("express");
const Upload = require("../utiils/multer");
const videoController = require("./video.controller");
const router = express.Router();
/**
 * @route POST api/uploadVideo
 * @description uploadVideo with video file
 * @returns JSON
 * @access public
 */
router.post("/uploadVideo", Upload.single("file"), (req, res) => {
  videoController.uploadVideo(req, res);
});

/**
 * @route POST api/addSubtitles
 * @description Add addSubtitles
 * @returns JSON
 * @access public
 */
router.post("/addSubtitles", (req, res) => {
  videoController.addSubtitles(req, res);
});

/**
 * @route POST api/getAllVideos
 * @description Get all video
 * @returns JSON
 * @access public
 */

router.get("/getAllVideos", (req, res) => {
  videoController.getAllVideos(req, res);
});

/**
 * @route POST api/delete-video
 * @description delete video
 * @returns JSON
 * @access public
 */

router.post("/delete-video/:id", (req, res) => {
  videoController.deleteVideo(req, res);
});

module.exports = router;
