//Основні модулі
import gulp from "gulp";

import {path} from "./gulp/config/path.js";

import {plugins} from "./gulp/config/plugins.js";

//Передача значення в глобальну змінну
global.app = {
    path:path,
    gulp:gulp,
    plugins:plugins
}



import {copy,copycss} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";
import {images} from "./gulp/tasks/images.js";


function watcher(){
    gulp.watch(path.watch.files, copy);
   // gulp.watch(path.watch.files, copycss);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch. images, images);
}
const mainTasks = gulp.parallel(copy, html, scss, copycss, js, images);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher,server));

//Виконати сценарій по замовчуванні
gulp.task('default',dev);