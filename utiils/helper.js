/**
 * @param {Object} res
 * @param {String} status ok | error
 * @param {String} msg Response message
 * @param {Object|Array} payload Array or Object
 * @param {Object} other This can be other object that user wants to add
 */
exports.createResponse = (
  res,
  status,
  msg,
  payload,
  other = undefined,
  statusCode = 200
) =>
  res.status(statusCode).json({
    status,
    message: msg,
    data: payload,
    ...other,
  });

/**
 * @param {Object} res
 * @param {Object} error
 * @param {Object} options
 */
exports.createError = (res, error, options = undefined, statusCode = 400) => {
  if (!options) options = {};
  if (!options.other) options.other = {};

  const message =
    (error && error.message) || options.message || "Error Occurred";
  const stackTrace = error || message;

  console.error("ERROR:", message, stackTrace);

  res.locals.errorStr = message;

  const other = {
    ...options.other,
    ...(options.returnStackTrace ? { error: error.message } : {}),
  };

  return exports.createResponse(
    res,
    "error",
    message,
    other,
    undefined,
    statusCode
  );
};

/**
 * @param {Object} res
 * @param {Object} errors
 */
exports.createValidationResponse = (res, errors) =>
  res.status(200).json({
    status: false,
    message: errors[Object.keys(errors)[0]],
  });
