/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var res = {
    LoadingUI_json :    "res/LoadingUI.json",
    TipUI_json     :    "res/TipUI.json",
    MainUI_json    :    "res/MainUI.json",
    FileUI_json    :    "res/FileUI.json",
    RoleUI_json    :    "res/RoleUI.json"
};

var SOURCE_TYPE ={
    SOURCE_TYPE_BG      :1,         //背景图片
    SOURCE_TYPE_ROLESPR :2,         //人物精灵
    SOURCE_TYPE_WORD    :3,         // 只有文字
    SOURCE_TYPE_CG      :4,         //CG图
    SOURCE_TYPE_TIP     :5,         //tip
    SOURCE_TYPE_END     :6,         //提前结束
    SOURCE_TYPE_ENDED   :5,         //章节结束
    SOURCE_TYPE_SELEDT  :7,         //剧终
    SOURCE_TYPE_CONTINUE:8,         //to be continue

}
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}



