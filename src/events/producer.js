const publishEvent = (eventType, payload) => {
  console.log(`Event published: ${eventType}`, payload);
};

module.exports = { publishEvent };
