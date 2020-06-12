const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  ac.grant("student")
    .readOwn("profile")
    .updateOwn("profile")
    .readAny("video")
    .readAny("product");

  ac.grant("teacher")
    .extend("basic")
    .readAny("profile")
    .createAny("video")
    .readAny("video");

  ac.grant("admin")
    .extend("student")
    .extend("teacher")
    .updateAny("profile")
    .deleteAny("profile")
    .createAny("video")
    .deny("student")
    .deleteAny("video")
    .deleteAny("profile");

  return ac;
})();
