'use strcit';
/*practice Node.js
 *@author Liangliang chen
 */
import path from 'path';
import ProjectCore from 'ProjectCore';
import createDebug from 'debug';

const $ = global.$ = new ProjectCore();

// 创建Debug函数
 $.createDebug = function (name) {
   return createDebug('my:' + name);
 };
 const debug = $.createDebug('server');
 
 

//加载配置文件
$.init.add((done) => {
    $.config.load(path.resolve(__dirname, 'config.js'));
    const env = process.env.NODE_ENV || null;
    if (env) { debug('load env: %s', env);
        $.config.load(path.resolve(__dirname, '../config', env + '.js' ));
    }
    $.env = env;
    done();
});

//初始化MongoDB
$.init.load(path.resolve(__dirname, 'init', 'mongodb.js'));
$.init.load(path.resolve(__dirname, 'models'));

//初始化
$.init((err) => {
    if (err) {
        console.error(err);
        process.exit(-1);
    } else {
        console.log('inited [env = %s]', $.env);
    }
});