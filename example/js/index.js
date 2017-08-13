$(function () {
    "use strict";
    var editor = $('#content').artEditor({
        imgTar: '#imageUpload',
        limitSize: 5,   // 兆
        showServer: true,
        // uploadUrl: 'http://localhost/PROJECT_OWN/NodeJS/artEditor/service/service.php',
        uploadUrl: 'http://admin-api.s1.natapp.cc/file/upload',
        data: {},
        uploadField: 'file',
        breaks: false,
        placeholader: '请输入文章正文内容',
        validHtml: ["<br/>"],
        uploadSuccess: function (res) {
            // 这里是处理返回数据业务逻辑的地方
            // `res`为服务器返回`status==200`的`response`
            // 如果这里`return <path>`将会以`<img src='path'>`的形式插入到页面
            // 如果发现`res`不符合业务逻辑
            // 比如后台告诉你这张图片不对劲
            // 麻烦返回 `false`
            // 当然如果`showServer==false`
            // 无所谓咯
            // var result = JSON.parse(res)
            // if (result['code'] == '100') {
            //     return result['data']['url'];
            // } else {
            //     switch (result['code']) {
            //         case '101': {
            //             alert('图片太大之类的')
            //         }
            //     }
            // }
            // return false;
        },
        uploadError: function (status, error) {
            //这里做上传失败的操作
            //也就是http返回码非200的时候
            alert('网络异常' + status)
        }
    });
      console.log(editor)

    $('#getValue').on('click', function () {
      var html = editor.getValue()
      console.log(html)
    })

    $('#setValue').on('click', function () {
      editor.setValue('<p>test1</p><p>test2</p><p>test3</p>')
    })

    $('#insertImg').on('click', function () {
      editor.insertImage('http://react-china.org/uploads/default/38/c4b96a594bd352e0.png')
    })
});

function setValue(str){
  editor.setValue(str)
}

function getValue(){
    return editor.getValue();
}

/**
 * 插如图片
 * @param {*} src - 图片的url或者base64编码
 */
function insertImage(src){
  editor.insertImage('src')
}