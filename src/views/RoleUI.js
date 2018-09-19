var RoleUI = cc.Layer.extend({
    spr:null,
    ctor:function (data) {
        this._super();
        var rootNodeLayer =  ccs.load(res.RoleUI_json).node;


        return rootNodeLayer;
        //cc.director.getRunningScene().addChild(rootNodeLayer,999,999);


    }

});