var TipUI = cc.Layer.extend({
    ctor: function (title, sureCallback, needCancle, cancleCallback) {
        // var self = this;
        // self.title = "";
        this._super();
        var rootNodeInfo = ccs.load(res.TipUI_json).node;
        cc.director.getRunningScene().addChild(rootNodeInfo, 9999,9999);

        //标题
        var lbl_title = ccui.helper.seekWidgetByName(rootNodeInfo, "lbl_content");
        //确定按钮
        var btn_sure = ccui.helper.seekWidgetByName(rootNodeInfo, "btn_sure");
        //取消按钮
        var btn_cancle = ccui.helper.seekWidgetByName(rootNodeInfo, "btn_cancle");

        //取消按钮

        if (title !== undefined && title !== null) {
            lbl_title.setString(title);
        } else {
            return "请写明标题和callback";
        }

        if (sureCallback !== null && sureCallback !== undefined) {
            btn_sure.addClickEventListener(sureCallback)

        } else {
            return "没有写明确定的callback";
        }

        if (needCancle !== undefined && needCancle) {
            //避免忘记写callback
            if (cancleCallback !== undefined && cancleCallback !== null) {
                btn_cancle.addClickEventListener(cancleCallback);
            } else {
                console.log("没有写取消的回调。");
                btn_cancle.addClickEventListener(function () {
                    rootNodeInfo.removeFromParent();
                });
            }
        }
        //如果只有一个按钮， 则只显示确定,只弹出相关提示内容之用
        if (!needCancle) {
            btn_sure.setPositionX(384);
            btn_cancle.setVisible(false);
            btn_sure.addClickEventListener(function () {
                rootNodeInfo.removeFromParent();
            });
        }


    }
});