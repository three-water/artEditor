var editor = $('#content')
var flag = false
$(function () {
    "use strict";
    editor = $('#content').artEditor({
        imgTar: '#imageUpload',
        showServer: true,
        uploadUrl: 'http://admin-api.s1.natapp.cc/file/upload',
        data: {},
        uploadField: 'file',
        breaks: false,
        placeholader: '请输入文章正文内容',
        validHtml: ["<br/>"],
        showUploadBtn: false,
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
      editor.setValue('<p>test1</p><script src="sddd"></script><p>test2</p><p>test3</p>')
    })

    $('#insertImg').on('click', function () {
      editor.insertImage('http://react-china.org/uploads/default/38/c4b96a594bd352e0.png')
    })

    $('#boldFont').on('click', function () {
      editor.boldFont(editor)
    })

    $('#content').on('click', function (e) {
      var target = event.target
      var twClass = $(target).parent().attr('class')
      if (twClass && twClass.indexOf('art-video-box') >= 0) {
        var src = $('#twVideoPlay')[0].dataset.video
        var videoHandler =  '?x-oss-process=video/snapshot,t_0,f_png,w_0,h_0,m_fast'
        if (src.length > 0) {
          src = src.replace(videoHandler, '')
        }
        var ua = window.navigator.userAgent.toLowerCase()
        if (/iphone|ipad|ipod/.test(ua)) {
            window.webkit.messageHandlers.EditorIsVideoCick.postMessage({videoSrc: src})
        } else if (/android/.test(ua)) {
          console.log('单击android视频')
          window.EditorNativeCallBack.onClickVideo(src)
        }
      }
    })
});

/**********************
 * 配置参数
 **********************/
/**
 * @param {String} [placeholder=请输入文章正文内容] - 编辑器占位文字
 * @param {Boolean} [showUploadBtn=true] - 是否显示上传按钮 
 * @param {Boolean} [showServer=true] - 是否开启服务端上传
 * @param {String} [uploadUrl] - 图片上传地址
 * @param {Object} [data={}] - 上传附带参数
 * @param {Int} [compressSize] - 触发h5压缩的图片大小
 * @param {String} [imgHandler] - 图片阿里云处理后缀
 */





/*******************
 * api
 *******************/

/**
 * 赋值
 * @param {*} str 
 */
function setValue(str){
  editor.setValue(str)
}

/**
 * 取值
 */
function getValue(){
    return editor.getValue();
}

/**
 * 插如图片
 * @param {*} src - 图片的url或者base64编码
 */
function insertImage(src){
  editor.insertImage(src)
}

/**
 * 上传前插如图片
 * @return {String} - guid唯一标识
 */
function preUpload () {
  return editor.preUpload()
}

/**
 * 更新图片的上传进度
 * @param {*} guid - 该上传实例的guid
 * @param {*} percent - 上传进度百分比，如 '40%' 
 */
function updateProgress (guid, percent) {
  return editor.updateProgress(guid, percent)
}

/**
 * 完成图片上传
 * @param {*} guid - 上传实例的guid
 * @param {*} src - 图片的oss url地址，此处用于替换掉原有的占位图片
 */
function uploadSuccess (guid, src) {
  return editor.uploadSuccess(guid, src)
}

/**
 * 判断当前编辑器内是否有文件正在上传
 * @return {Boolean} - 是否有正在上传的文件
 */
function isUploading () {
  return editor.isUploading()
}

/**
 * 判断当前编辑器内是否有上传过
 * @return {Boolean} - 是否上传过视频
 */
function isVideoUploaded() {
  return editor.isVideoUploaded()
}

/**
 * 上传视频前插如图片
 * @return {String} - guid唯一标识
 */
function videoPreUpload () {
  return editor.videoPreUpload()
}

/**
 * 完成图片上传
 * @param {*} guid - 上传实例的guid
 * @param {*} src - 视频的oss url地址片
 */
function videoUploadSuccess (guid, src, mask) {
  return editor.videoUploadSuccess(guid, src, mask)
}
