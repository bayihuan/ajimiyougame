var MainUI = cc.Layer.extend({
    musicIsOpen: true,              //当前是否已经开始播放音乐
    curMusicName: "music_bg.mp3",    //当前音乐的名称
    curBookIndex: 0,                 //当前剧情的下标
    curLineName: "main",             //当前所在那条线
    testData: null,
    bg: null,                       //背影图片
    leftSp: null,                   //左边的精灵d
    rightSp: null,                  //右边的精灵
    lbl_words: null,                 //文字
    pnl_words:null,                  //文字的外框
    userContentLeft:null,                //角色的名称conetent
    userContentRight:null,                //右


    ctor: function (data) {
        this._super();

        this.onEnter(this);
    },
    onEnter: function () {
        //开始设计数据内容

        this.testData = {
            "main": [//主线
                {
                    "id": 0,
                    "type": 1,
                    "url": "res/images/story/test/a04_bg_airport.jpg",
                    "cleanLeftSpr":true,  //是否清除左边的精灵
                    "cleanRightSpr":true  //是否清除右边精灵
                },
                {
                    "id": 1,                            //编号
                    "type": 2,                 //类型：精灵，cg图
                    "url": "res/images/role/a04_minorRole/a04_role_woman05_default.png",//url
                    "bg":"",                     //需要更新的背影图片url
                    "localtion": "left",                 //位置 ：左或者右
                    "showFace": false,                    //更新表情
                    "faceUrl": "",                        //表情的url
                    "aniType": ["moveby","fadein"],                 //动作的名称，之后需要修改成
                    "startPosX": 0,                     //开始的位置
                    "endPos": 100,                     // 结束的位置
                    "aniTime": 2,                     //动画的时间
                    "words": "这个是测试。。。。。",     //content
                    "cleanCache": true,               //是否需要删除之前的精灵
                    "refreshWordsPanel": true,         //是否需要让文字面板重新刷新动画
                    "needUserName":true,            //需要名字
                    "cleanLeftSpr":false,  //是否清除左边的精灵
                    "cleanRightSpr":true  //是否清除右边精灵

                },
                {
                    "id": 2,
                    "type": 2,
                    "url": "res/images/role/a04_minorRole/a04_role_woman05_default.png",
                    "localtion": "right",
                    "showFace": false,
                    "faceUrl": "",
                    "aniType": ["moveby","fadein"],
                    "startPosX": 0,
                    "endPos": -100,
                    "aniTime": 2,
                    "words": "我就是右边的",
                    "cleanCache": true,
                    "refreshWordsPanel": true,
                    "cleanLeftSpr":true,  //是否清除左边的精灵
                    "cleanRightSpr":false,  //是否清除右边精灵
                    "needUserName":true,            //需要名字
                },
                {
                    "id": 3,
                    "type": "bg",
                    "url": "res/images/story/test/a04_bg_cinemaAccident.jpg"
                }
            ],

            "zhi": []    //支线
        };


        console.log(this.testData.main)
        // var response = {"main": [{"id": 1, "nick": "fuck1"}], "": []};
        // var jsonData = JSON.stringify(response);
        // var data = JSON.parse(jsonData);


        //console.log(JSON.parse(this.testData));
        var rootNodeLayer = ccs.load(res.MainUI_json).node;
        cc.director.getRunningScene().addChild(rootNodeLayer, 1, 1);

        this.bg = ccui.helper.seekWidgetByName(rootNodeLayer, "img_bg");


        this.leftSp = ccui.helper.seekWidgetByName(rootNodeLayer, "Node_1");

        this.rightSp = ccui.helper.seekWidgetByName(rootNodeLayer, "Node_1_0");

        this.lbl_words = ccui.helper.seekWidgetByName(rootNodeLayer, "txt_content");

        this.pnl_words = ccui.helper.seekWidgetByName(rootNodeLayer,"pal_content");

        this.userContentLeft = ccui.helper.seekWidgetByName(rootNodeLayer,"pal_left");

        this.userContentRight = ccui.helper.seekWidgetByName(rootNodeLayer,"pal_right");

        // 开始播放音乐
        cc.audioEngine.playMusic("res/musics/music_bg.mp3", true);
        //保存按钮
        let btn_save = ccui.helper.seekWidgetByName(rootNodeLayer, "btn_save");
        //打开或者关闭按钮
        let btn_closeOrOpen = ccui.helper.seekWidgetByName(rootNodeLayer, "btn_closeOrOpen");
        //界面panel
        let pnl_game = ccui.helper.seekWidgetByName(rootNodeLayer, "pnl_game")

        //跳转到保存界面，但是没有传给它什么数据 。后面需要加数据
        btn_save.addClickEventListener(function () {
            new FileUI();
        });

        btn_closeOrOpen.addTouchEventListener(this.musicOpenOrClose, this);


        pnl_game.addTouchEventListener(this.playGame, this);

    },
    musicOpenOrClose: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                if (this.musicIsOpen) {
                    cc.audioEngine.stopMusic();
                    this.musicIsOpen = false;
                } else {
                    if (!cc.audioEngine.isMusicPlaying()) {
                        cc.audioEngine.playMusic("res/musics/" + this.curMusicName, true);
                    }
                    this.musicIsOpen = true;
                }
                break;
        }
    }
    ,
    playGame: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:


                /*
                * 1.获取数据数组的长度，
                * 2.获取下标的位置
                * 3.如果越过数据则提示已经完结
                * */


                //console.log(this.testData.main[this.curBookIndex].url)



                if (this.curBookIndex > 3) {
                    this.curBookIndex = 0;
                }
                //console.log(this.curBookIndex);


                if (this.testData.main[this.curBookIndex].type === "bg") {
                    this.bg.loadTexture(this.testData.main[this.curBookIndex].url);
                }

                //this.bg.setTexture(this.testData.main[this.curBookIndex].url)


                this.updatePage(this.curBookIndex, this.curLineName);
                this.curBookIndex += 1;


                break;
            case ccui.Widget.TOUCH_CANCELED:
                alert("ccccc");
                break;
            default:
                break;
        }
    }, updatePage: function (index, name) {

        var data = this.testData.main[index]; //数据
        this.lbl_words.setString(data.words); //设置内容

        //清除左边的精灵
        if (data.cleanLeftSpr){
            this.leftSp.removeAllChildren();
        }
        //清除右边的精灵
        if(data.cleanRightSpr){
            this.rightSp.removeAllChildren();
        }

        if (data.type == "roleSpr") {
            var spr = new cc.Sprite(data.url);
            spr.setScale(0.5, 0.5);

            if (data.localtion === "left") {

                if (data.needUserName){
                    this.userContentRight.setPositionX(800);
                    this.userContentLeft.setPositionX(-260);
                    this.userContentLeft.runAction(cc.moveBy(1,cc.p(300,0),0))


                    spr.runAction(cc.spawn(cc.fadeIn(2)));



                }
                
                this.leftSp.addChild(spr);
            } else {

                if (data.needUserName){
                    this.userContentLeft.setPositionX(-260);
                    this.userContentRight.setPositionX(800);
                    this.userContentRight.runAction(cc.moveBy(1,cc.p(-300,0),0))
                }

                if (data.cleanCache) {
                    this.rightSp.removeAllChildren();
                }
                this.rightSp.addChild(spr);

            }

            if (data.refreshWordsPanel){
                this.pnl_words.height = 10;
                this.pnl_words.runAction(cc.scaleTo(0.5,1,30));

            }

            
            if (data.aniType != undefined) {

                spr.runAction(cc.moveBy(data.aniTime, cc.p(data.endPos, 0), 0))

            }


        }
    },
    dropGame:function (data) {

    }
});