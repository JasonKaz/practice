var gulp = require("gulp");
var exec = require("child_process").exec;

gulp.task("typescript", () => {
  exec("yarn run build");
});

gulp.task("tests", () => {
  exec("yarn run test", (err, out, stderr) => {
    console.log(out);
  });
});

gulp.task("watch", () => {
  gulp.watch("./src/**/*.ts", ["typescript"]);
  gulp.watch("./spec/**/*.ts", ["tests"]);
});
