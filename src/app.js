const express = require("express");
const path = require("path");

const app = express();

const findSpec = name => {
  return path.resolve(__dirname, "tests/spec/specs/data_structures/", name + ".js");
};

app.set("port", 3000);
app.use(express.static(path.resolve(__dirname, "www")));

app.get("/", (req, resp) => {
  resp.sendFile(path.resolve(__dirname, "www/index.html"));
});

app.get("/specs", (req, resp) => {
  const rrd = require("recursive-readdir");
  const specsDir = path.resolve(__dirname, "tests/spec/specs");
  rrd(specsDir, (err, files) => {
    resp.json(files);
  });
});

app.get("/spec-details/:spec", (req, resp) => {
  const file = findSpec(req.params.spec);
  resp.sendFile(file);
});

app.get("/run-test/:spec", (req, resp) => {
  const Jasmine = require("jasmine");
  const jasmine = new Jasmine();

  const file = findSpec(req.params.spec);
  //const file = `specs/data_structures/${req.params.spec}.js`;
  const config = {
    spec_dir: path.resolve(__dirname, "tests/spec"),
    spec_files: [file],
    helpers: [path.resolve(__dirname, "tests/spec/helpers/**/*.js")],
    random: false,
  };

  const ret = {
    status: "",
    reason: "",
    config: {},
  };

  jasmine.loadConfig(config);

  jasmine.addReporter({
    jasmineDone: (info, done) => {
      ret.status = info.overallStatus;
      ret.reason = info.incompleteReason;
      ret.config = config;
      resp.json(ret);
    },
  });

  jasmine.execute();
});

app.listen(app.get("port"), () => {
  console.log("Express server running on port " + app.get("port"));
});

module.exports = app;
