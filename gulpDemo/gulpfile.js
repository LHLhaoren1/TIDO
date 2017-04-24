//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
 plugins = require('gulp-load-plugins')();


//less编译
gulp.task('testLess', function (cb) {
   var stream =  gulp.src('src/less/main.less') //该任务针对的文件
        .pipe(plugins.less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
	  return stream;
});
//css压缩
gulp.task('testCssmin',['testLess'], function () {
    gulp.src('src/css/*.css')
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.makeCssUrlVersion()) //给css文件里引用文件加版本号（文件MD5）
        .pipe(plugins.cleanCss({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))

		.pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});
//js压缩
gulp.task('minify-js', function () {
    gulp.src('src/js/*.js') // 要压缩的js文件
	//.pipe(plugins.sourcemaps.init())
    .pipe(plugins.uglify())  //使用uglify进行压缩,更多配置请参考：
	.pipe(plugins.rename({suffix: '.min'}))
	//.pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js')); //压缩后的路径
});

gulp.task('default',['testLess','testCssmin','minify-js']); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径