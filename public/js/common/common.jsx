/**
 * Created by wangxing on 2015/11/16.
 */
define(function (require, exports, module) {
    exports.Head= React.createClass({
        render:function(){
            return <h1>这里是头部</h1>;
        }
    });
    exports.Footer=React.createClass({
        render:function(){
            return <h1>这里是底部</h1>;
        }
    });
});
