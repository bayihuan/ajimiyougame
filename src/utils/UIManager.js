var UIManager = cc.Layer.extend({
    
    addUI:function () {  //添加页面
      /**
       * 用法：param :1.uiName :页面名称，
       * 
       * */

      var uiLayer = ccs.load("res/"+arguments[0]+".json").node
      var rootLayer = arguments[2];




      var mycallBack = arguments[3];
      mycallBack();
 
      console.log(rootLayer);
      rootLayer.addChild(uiLayer);

    }

});