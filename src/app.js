var GetQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
    if (r != null) return unescape(r[2]);
    return null;
};


var LoadingLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        //加载页面

        this.layerNode = null;  //根节点
        this.lbl_pre = null;    //进度label
        this.spr_loading = null;//进度精灵
        this.curPrecent = 0;    //当前进度
        this.bookId = 0;   //剧本Id
        this.userId = 0;   //用户Id


        return true
    },
    onEnter: function () {
        this._super();

        this.bookId = GetQueryString("bookId"); //剧本Id
        this.userId = GetQueryString("userId"); //userId


        //加载界面
        this.layerNode = ccs.load(res.LoadingUI_json).node;
        this.addChild(this.layerNode);
        //获取动画的精灵
        this.spr_loading = ccui.helper.seekWidgetByName(this.layerNode, "img_loading");



        let btn_go  = ccui.helper.seekWidgetByName(this.layerNode,"btn_go");
        btn_go.addClickEventListener(function () {
          
            new MainUI("bbbbbbbbbbbbbbbbbb");

        });





        //开始帧动画
        var loadAni = new cc.Animation();
        for (let i = 1; i <= 8; i++) {
            loadAni.addSpriteFrameWithFile("res/images/loading/logo_save_" + i + ".png");
        }
        loadAni.setDelayPerUnit(1 / 14);
        var loadingAction = cc.animate(loadAni);
        loadingAction.repeatForever();
        this.spr_loading.runAction(loadingAction);
        //更新进度Label


        // var tip  = new TipUI("这个是标题",function () {
        //     alert("ssssssssssssssssss") ;
        // },function () {
        //     alert("cancle method")
        // });

        // this.tip = new TipUI("这个是测试。。。。。。。", function () {
        //     var layer = cc.director.getRunningScene().getChildByTag(9999);
        //     layer.removeFromParent();
        //
        // }, true, function () {
        //     alert("这个是取消的按钮");
        // });



        //this.schedule(this.updateScheduer,1,1);

    } 

});

var LoadingScdene = cc.Scene.extend({

    onEnter: function () {
        this._super();
        var loadingLayer = new LoadingLayer();
        this.addChild(loadingLayer);

    }
});


