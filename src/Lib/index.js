module.exports = {
  Client: require("./Structures/Client"),
  Embed: require("./Structures/Embed"),
  
  Helpers: require("./Utils/Helpers"),
  Logger: require("./Utils/Logger"),
  Timer: {
    CountDown: require("./Utils/Timer").CountDown,
    Sleep: require("./Utils/Timer").Sleep
  }
};
