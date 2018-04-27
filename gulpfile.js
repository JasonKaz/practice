var gulp = require("gulp");
var exec = require("child_process").exec;

gulp.task("typescript", () => {
    exec("yarn run build");
});

gulp.task("watch", () => {
    gulp.watch("./src/**/*.ts", ["typescript"]);
});