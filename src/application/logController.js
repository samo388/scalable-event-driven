const { findLogs } = require("../domain/log/LogRepository");

const getLogs = async (req, res) => {
  const { page = 1, limit = 10, userId, action } = req.query;

  const filter = {};
  if (userId) filter.userId = userId;
  if (action) filter.action = action;

  const logs = await findLogs(filter, {
    skip: (page - 1) * limit,
    limit: Number(limit),
  });

  res.json({ page: Number(page), data: logs });
};

module.exports = { getLogs };
