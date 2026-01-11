const Log = require("./LogEntity");

const saveLog = (data) => {
  const log = new Log(data);
  return log.save();
};

const findLogs = (filter, options) => {
  return Log.find(filter)
    .skip(options.skip)
    .limit(options.limit)
    .sort({ timestamp: -1 });
};

module.exports = { saveLog, findLogs };
