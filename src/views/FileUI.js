var FileUI  = cc.Layer.extend({
    
    ctor:function () {
        this._super();
        this.onEnter();

        return true;
    },
    onEnter:function () {
        var rootNodeLayer = ccs.load(res.FileUI_json).node;
        cc.director.getRunningScene().addChild(rootNodeLayer,2,2);

        let btn_back = ccui.helper.seekWidgetByName(rootNodeLayer,"btn_back");
        btn_back.addClickEventListener(function () {
            rootNodeLayer.removeFromParent();
        });
    }
    
    
});