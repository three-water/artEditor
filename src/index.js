/**
 * 移动端富文本编辑器
 * @author ganzw@gmail.com
 * @url    https://github.com/baixuexiyang/artEditor
 */
/* eslint-disable */
// import $ from 'jquery';
(function () {
  var placeholderImg = 'data:image/png;base64,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';

  $.fn.extend({
    _opt: {
      placeholder: '请输入文章正文内容',
      validHtml: [],
      limitSize: 3,
      showServer: false,
      showUploadBtn: true,
      compressSize: 500,
      imgHandler: ''
    },
    artEditor: function (options) {
      var _this = this,
        styles = {
          "-webkit-user-select": "text",
          "user-select": "text",
          "overflow-y": "auto",
          "text-break": "brak-all",
          "outline": "none",
          "cursor": "text",
          "-webkit-tap-highlight-color": "transparent"
        };
      $(this).css(styles).attr("contenteditable", true);
      _this._opt = $.extend(_this._opt, options);
      this.initArtDom()
      // 初始化删除事件处理
      this.initDeleteHandle()
      try {
        $(_this._opt.imgTar).on('change', function (e) {
          var files = e.target.files
          var file = files[0];
          var uploadFiles = [];
          var filePromise = [];

          if (files.length > 0) {
            for (var i = 0; i < files.length; i++) {
              filePromise.push(_this.compressFile(files[i]));
            }
          }

          Promise.all(filePromise).then(function (res) {
            _this.upload(res.reverse())
          })
          return
        });
        _this.placeholderHandler();
        _this.pasteHandler();
      } catch (e) {
        console.log(e);
      }

      $(_this).on('input', function () {
        var val = _this.getValue()
        $(_this).find('#artTarget').val(val)
        // 调用原生的change事件的回调，客户端内容有改变
        if (window.native && window.native.onTextChange) {
          window.native.onTextChange(val)
        }
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.onTextChange) {
          window.webkit.messageHandlers.onTextChange.postMessage(val)
        }
      });

      $(this).on('input click', function () {
        var $self = $(this)
        setTimeout(function () {
          var selection = window.getSelection ? window.getSelection() : document.selection;
          _this.range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
        }, 10);
        return false;
      });

      if (!/firefox/.test(navigator.userAgent.toLowerCase()) && this._opt.breaks) {
        $(this).keydown(function (e) {
          if (e.keyCode === 13) {
            document.execCommand('insertHTML', false, '<br/><br/>');
            return false;
          }
        });
      }
      return this
    },

    compressFile: function (file) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        if (file.size / 1024 > _this._opt.compressSize) {
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function (f) {
            var data = f.target.result,
              img = new Image();
            img.src = f.target.result;
            // 解决Firefox读取不到图片高、宽
            setTimeout(function () {
              var data = _this.compressHandler(img)
              // 覆写图片上传方法
              if (_this._opt.showServer) {
                var blob = _this.convertBase64UrlToBlob(data)
                resolve(_this.convertBase64UrlToBlob(data));
              }
            }, 10);
          }
        } else {
          setTimeout(function () {
            resolve(file);
          }, 10)
        }
      })
    },

    /**  
     * 将以base64的图片url数据转换为Blob  
     * @param urlData  
     *            用url方式表示的base64图片数据  
     */
    convertBase64UrlToBlob: function (urlData) {
      var bytes = window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte  
      //处理异常,将ascii码小于0的转换为大于0  
      var ab = new ArrayBuffer(bytes.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }

      return new Blob([ab], {
        type: 'image/png'
      });
    },

    initArtDom: function () {
      var _this = this
      $(this).addClass('art-editor')
      if (_this._opt.showUploadBtn) {
        $(_this).after('<div class="art-upload">' +
          '<div class="upload-button">' +
          '<span class="upload"><i class="upload-img"></i>插入图片</span>' +
          '<input class="input-file" id="imageUpload" type="file" name="fileInput" accept="image/*" style="position:absolute;left:0;opacity:0;width:100%;" multiple>' +
          '</div>' +
          '</div>')
        _this._opt.imgTar = $(_this).parent().find('#imageUpload')[0]
        $(this).after('<input type="hidden" id="artTarget">')
      }
    },
    compressHandler: function (img) {
      var _this = this;
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext('2d');
      var tCanvas = document.createElement("canvas");
      var tctx = tCanvas.getContext("2d");
      var initSize = img.src.length;
      var width = img.width;
      var height = img.height;
      var ratio;
      if ((ratio = width * height / 4000000) > 1) {
        ratio = Math.sqrt(ratio);
        width /= ratio;
        height /= ratio;
      } else {
        ratio = 1;
      }
      canvas.width = width;
      canvas.height = height;
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      var count;
      if ((count = width * height / 1000000) > 1) {
        count = ~~(Math.sqrt(count) + 1);
        var nw = ~~(width / count);
        var nh = ~~(height / count);
        tCanvas.width = nw;
        tCanvas.height = nh;
        for (var i = 0; i < count; i++) {
          for (var j = 0; j < count; j++) {
            tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
          }
        }
      } else {
        ctx.drawImage(img, 0, 0, width, height);
      }
      var ndata = canvas.toDataURL('image/jpeg', 0.6);
      tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
      return ndata
    },
    drawImage: function (ctx, img, orient, x, y, w, h) {
      var canvas_w = Number(ctx.canvas.width);
      var canvas_h = Number(ctx.canvas.height);

      //判断图片拍摄方向是否旋转了90度
      if (orient == 6) {
        ctx.save(); //保存状态
        ctx.translate(canvas_w / 2, canvas_h / 2); //设置画布上的(0,0)位置，也就是旋转的中心点
        ctx.rotate(90 * Math.PI / 180); //把画布旋转90度
        // 执行Canvas的drawImage语句
        ctx.drawImage(img, Number(y) - canvas_h / 2, Number(x) - canvas_w / 2, h, w); //把图片绘制在画布translate之前的中心点，
        ctx.restore(); //恢复状态
      } else {
        // 执行Canvas的drawImage语句
        ctx.drawImage(img, x, y, w, h);
      }
    },
    readFile: function (file) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        //将文件以Data URL形式读入页面  
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          resolve(this.result)
        }
      })
    },
    preUpload: function () {
      var guid = newGuid()
      var _this = this
      // 插入上传中图片结构
      this.insertImage('<div class="art-img-box loading" guid="' + guid + '"><span class="progress"></span><img src="' + placeholderImg + '" /></div>')
      return guid
    },
    // 更新上传进度
    updateProgress: function (guid, percent) {
      this.find('div[guid="' + guid + '"] .progress').width(percent)
    },
    // 完成图片上传
    uploadSuccess: function (guid, src) {
      var _this = this
      var img = new Image()
      var imgBox = this.find('div[guid="' + guid + '"]')
      img.src = src + this._opt.imgHandler
      img.onload = function () {
        imgBox.removeClass('loading').removeAttr('guid').empty().append(img)
        $(_this).trigger('input')
        $(_this).trigger('art-uploading')
      }
    },
    uploadFail: function (guid) {
      var imgBox = this.find('div[guid="' + guid + '"]')
      imgBox.remove()
    },
    upload: function (data) {
      var _this = this,
        filed = _this._opt.uploadField || 'file';
      if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {;
          (function (n) {
            _this.readFile(data[n]).then(function (src) {
              var guid = _this.preUpload(src)
              var postData = new FormData()
              postData.append(filed, data[n])
              var optData = _this._opt.data
              for (var k in optData) {
                postData.append(k, optData[k])
              }
              $(_this).trigger('art-uploading')
              $.ajax({
                url: _this._opt.uploadUrl,
                type: 'post',
                data: postData,
                cache: false,
                contentType: false,
                processData: false,
                xhr: function () {　　　　　　
                  var xhr = $.ajaxSettings.xhr();　　　　　　
                  if (_this.updateProgress && xhr.upload) {　　　　　　　
                    xhr.upload.addEventListener("progress", function (e) {
                      _this.updateProgress(guid, parseInt(e.loaded / e.total * 100) + '%')
                    }, false);
                  }　　　　　　　　
                  return xhr;　　　　
                }
              }).done(function (res) {
                _this._opt.imgTar.value = ''
                var src = ''
                _this._opt.uploadSuccess && _this._opt.uploadSuccess(res)
                if (res.status === 2000) {
                  _this.uploadSuccess(guid, res.data.url)
                }
              }).fail(function (error) {
                _this._opt.uploadError(error.status, error);
              })
            })
          })(i)
        }
      }
      return
    },
    insertImage: function (src) {
      if (!/<img\s/.test(src)) {
        src = '<img src="' + src + '" style="max-width:100%;" />'
      }
      $(this).focus();
      var selection = window.getSelection ? window.getSelection() : document.selection;
      var range;
      if (this.range) {
        range = this.range;
        this.range = null;
      } else {
        range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
      }
      if (!window.getSelection) {
        range.pasteHTML(src);
        range.collapse(false);
        range.select();
      } else {
        range.collapse(false);
        var hasR = range.createContextualFragment(src);
        var hasLastChild = hasR.lastChild;
        while (hasLastChild && hasLastChild.nodeName.toLowerCase() == "br" && hasLastChild.previousSibling && hasLastChild.previousSibling.nodeName.toLowerCase() == "br") {
          var e = hasLastChild;
          hasLastChild = hasLastChild.previousSibling;
          hasR.removeChild(e);
        }
        range.insertNode(range.createContextualFragment("<br/>"));
        range.insertNode(hasR);
        if (hasLastChild) {
          range.setEndAfter(hasLastChild);
          range.setStartAfter(hasLastChild);
        }
        selection.removeAllRanges();
        selection.addRange(range);
      }
      $(this).find('#artTarget').val(this.getValue())
      $(this).trigger('input')
    },
    pasteHandler: function () {
      var _this = this;
      // $(this).on("paste", function (e) {
      //   var content = $(this).html();
      //   var valiHTML = _this._opt.validHtml;
      //   content = content.replace(/_moz_dirty=""/gi, "").replace(/\[/g, "[[-").replace(/\]/g, "-]]").replace(/<\/ ?tr[^>]*>/gi, "[br]").replace(/<\/ ?td[^>]*>/gi, "&nbsp;&nbsp;").replace(/<(ul|dl|ol)[^>]*>/gi, "[br]").replace(/<(li|dd)[^>]*>/gi, "[br]").replace(/<p [^>]*>/gi, "[br]").replace(new RegExp("<(/?(?:" + valiHTML.join("|") + ")[^>]*)>", "gi"), "[$1]").replace(new RegExp('<span([^>]*class="?at"?[^>]*)>', "gi"), "[span$1]").replace(/<[^>]*>/g, "").replace(/\[\[\-/g, "[").replace(/\-\]\]/g, "]").replace(new RegExp("\\[(/?(?:" + valiHTML.join("|") + "|img|span)[^\\]]*)\\]", "gi"), "<$1>");
      //   if (!/firefox/.test(navigator.userAgent.toLowerCase())) {
      //     content = content.replace(/\r?\n/gi, "<br>");
      //   }
      //   $(this).html(content);
      // });
    },
    placeholderHandler: function () {
      var _this = this;
      var imgReg = /<img\s*([\w]+=(\"|\')([^\"\']*)(\"|\')\s*)*\/?>/;
      $(this).on('focus', function () {
          if ($.trim($(this).text()) === _this._opt.placeholder) {
            $(this).html('');
          }
        })
        .on('blur', function () {
          if (!$.trim($(this).text()) && !imgReg.test($(this).html())) {
            $(this).html('<div class="placeholder" style="pointer-events: none;">' + _this._opt.placeholder + '</div>');
          }
        });

      if (!$.trim($(this).text()) && !imgReg.test($(this).html())) {
        $(this).html('<div class="placeholder" style="pointer-events: none;">' + _this._opt.placeholder + '</div>');
      }
    },
    isUploading: function () {
      return $(this).find('.art-img-box.loading').length > 0
    },
    getValue: function () {
      var value = $(this).html().replace(/^(\s|&nbsp;)+|(\s|&nbsp;)+$/g, '');
      return this.contentFilter(value)
    },
    setValue: function (str) {
      str = str === undefined ? '' : str;
      str = this.contentFilter(str);
      $(this).html(str);
    },
    contentFilter: function(content) {
      if (content === '' || content === undefined) return ''
      // script
      var reg=/<script[^>|^<]*>.*(?=<\/script>)<\/script>/gi;
      var content1 = content.replace(reg,'')
      // style标签
      var StyleReg = /<style[^>]*>.*(?=<\/style>)<\/style>/gi;
      var content2 = content1.replace(StyleReg,'')
      // link
      var LinkReg = /<link[^>]*>/gi
      var content3 = content2.replace(LinkReg,'')
      // style属性
      var innerStlyeReg = /style\s*=\s*('[^']*'|"[^"]*")/gi;
      var content4 = content3.replace(innerStlyeReg, '')
      return content4
    },
    // 删除事件初始化处理，删除正在上传的图片时，将整个图片dom结构一起删掉
    initDeleteHandle: function () {
      $(this).on('input', function (e) {
        console.log(window.getSelection())
        var selection = window.getSelection()
        var anchorNode = $(selection.anchorNode)
        if (e.originalEvent && e.originalEvent.inputType === 'deleteContentBackward') {
          if (anchorNode.hasClass('art-img-box') && anchorNode.hasClass('loading') && selection.anchorOffset === 1) {
            anchorNode.remove()
          }
        }
        
        if (e.originalEvent && e.originalEvent.inputType === 'insertParagraph') {
          if (anchorNode.hasClass('art-img-box') && anchorNode.hasClass('loading') && selection.anchorOffset === 0) {
            // 光标在图片后面的换行
            anchorNode.removeClass('art-img-box')
          } else if (anchorNode.hasClass('art-img-box') && anchorNode.hasClass('loading') && selection.anchorOffset <= 2) {
            // 光标在图片前面的换行
            var br = anchorNode.find('.art-img-box').children()
            anchorNode.before(br)
            selection.collapse(br[0], 0)
          }
        }
        // 处理光标在图片前端时，输入文字内容的情况
        if (anchorNode[0].nodeType === 3 && $(anchorNode[0].parentElement).hasClass('art-img-box') && $(anchorNode[0].parentElement).hasClass('loading')) {
          $(anchorNode[0].parentElement).before(anchorNode)
          selection.collapse(anchorNode[0], 1)
        }

      })
    }
  });

  function newGuid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  };

  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }

})()
