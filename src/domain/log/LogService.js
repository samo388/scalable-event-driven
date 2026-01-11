const logRepository = require("./LogRepository");

const processLog = async (log) => {
  const processedLog = {
    ...log,
    processedAt: new Date(),
  };

  return logRepository.saveLog(processedLog);
};

module.exports = { processLog };
