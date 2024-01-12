const videoRoutes = require("../components/video.route");
/**
 * Init All routes here
 */
module.exports = (app) => {
  app.use("/api", videoRoutes);
};
