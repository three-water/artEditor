/**
 * 移动端富文本编辑器
 * @author ganzw@gmail.com
 * @url    https://github.com/baixuexiyang/artEditor
 */
/* eslint-disable */
// import $ from 'jquery';
(function () {
  var placeholderImg = 'data:image/png;base64,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';

  var VideoPlaceholderImg= 'data:image/png;base64,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';
  // 视频播放
  var playIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAB2lBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////29vbo6OjT09O4uLifn5+QkJB+fn5qampSUlI2NjYTExP////////y8vKlpaVzc3MkJCQAAAD////////////19fXX19empqZGRkb////29vbJyclkZGT////////////8/PzZ2dmIiIgDAwP////////////x8fGpqakfHx/////////u7u6cnJz////////r6+uTk5P///////+NjY3////////9/f3AwMD////////i4uJRUVH///////+VlZX////////k5OQ5OTn////////+/v6/v7/////29vaAgID////m5ub////////d3d0QEBD////////Q0NDAwMD///+tra3///++vr5lZWV9fX00NDRvb2/m5uaHh4dCQkL6+vr7+/v8/Pze3t5KSkrLy8vs7OwZGRm9vb2JiYne3t7z8/OLi4v8/Pw7OzuMjIze3t7///////////////+enp7///+Pj4////+6urrj4+MWFhaRkZH5+fliYmL8/PzX19exsbG7u7vs7OyGhob///////9lqWfoAAAAnnRSTlMAAiBHbpWruMXS3+z5BDh59/8BMHK08uzQtZqHfnVsY1pRPJrji29VTSSB3ei6jF9f6qppB2ng9bt6TQtz5uGPUwV23IZB1tV/GKV9A/H3oRvCx2JI64KH/sxaHMT8oOfrdkDPUvjBUGf9sqL8koiganRZbtB5XfH098JgrddSn3vD43v2W3zEMXpvrIa5fcacy1F/7mj4u5Sd2Hh41yDzgzwAAAWbSURBVHgBvM1FAsMwEANAh5nRYWZO//+2OucyznVXEngfhhMkRTMsxwuiKPAcy9AUSeAY+DNJVmhO1a5SOVqRJfAfumFatnZwXOj5QRjFSZomcRQGvgddRzvYlmno4NeyXNCQApZV3VxVVyUsNETIM/BDbdejkWGc5uaBeRoH9Np3LfgJaWFR/brtzZP2bUUBdpHAt53OxNiD1htREAfwqY1/eVy3c/hZSXY39sa2jbqv38MyWt39vcHF8OQUODu/cLAGjovzM+D05JjM5HRJgKy4WTO3IgOSy0lm8XjvAD6/g3Vx+H3AHa+HTBEIAqEwGxAOAcEAGReJAm9jbFDsLRCNkDHxqyoSyVds2KtkAurVOBmQSgOZLJsimwHSKdItl8fzApum8Bz5nN4sVyyhXGETVcooFXXlwGoN9YaDTeVo1FGrkmaPm2i12XTtFpqPSaOOiu5LtsDLLtQOadLrYzBkSwwH6PdIg9EYEwdbxDHBeEQ7ewBM2UJT4MHO94LZnC01n2HHu+mNMWeLzTHu7RRHfUzZclP0d4ipxyomLMAE6uOtebeJgYMFcAzQ3JKL79XQHbIQwy5q92iTBVovWZCXLSxog1yp3mZh2vVSjtZK5bFkgZbIp2iNeBplBwvkKCMdp9Wu4nmFhao8x1VaKaKiwIIVoEZolSgyLFwGUVohgESWhcsmsGK68wSRZPE4iaCH/uXF21dsg1dv4aV/OO8gxraI4c6/OwoXQmyTEFz/7IIkhNkmYUh/b5NO4GPb+HDyV+dwCj9r8/HTZzaJH6f36Ld9yNqK0hcZwNdvJpUoGfv0200orMX3H/jJjDnoyhVFAXQ/G+vZGu3advsJZdS4ZvRsu8bXFncU59zZ5ySzvmAl63BP3ZuGmVn1wS3qpcARLsWbHc4xv6CZ19NMLz5XO7cvUZwXH+WyxuImS/qP2WVYWVU7lzkqOTqOcUVjsca6RmyseGl1hWMdkmWCMzHfVKA5xp/6aHX1DBOSJcFZLU0marUJyQ21cZZErlIT5wwyXlqdoynbaYvjapLR5/ZWx9mKZLo4YZTx0OoEXZFMNyetMvZWJ+mO7qUeTlll7K1O0dMiIq0k1Sxjb5WkVUS26bfL2Fv1R5O1WlJ2GXurFLUi0kDaLmNvlaZBpKKdjDeZbKskLMdulaG9QirpVb8y+vx9Ka16qZQH9PmVyb4t4rfqo0p26LfL+GjVz47UMBBCJtvqfYxWA9TILnt2GR+t9tiVfQ7sMj5aHbAvh3wMJpNt9cntGfmRQ2lgJJxMttXnL+rACA3SyGgomSxfv3FZHRilUZoYCyuj3388cXnWjtEkzYwHltGf/HKZGtFcXjJllamsFnBZbe16hgMeeovTTP92O/SGqZc6hoLJrCZh0/U6GKJOdhkMdVHOwIr7RTlI7V9azZgKQBiIYvBgRwx+sFANneoBzDLA8NemqYYs95PzT4gkdPWdEDOPq9Z5XO3LZp6dgFCenfZBDgjFQT5nqjQ2VeQRBwjFiJPnLSEU8/Ywhz8iFMNfUiJJiCsRSRYlIS6LJI2WhLhGcwRjFQTjoHpNQmVQvX6vPSuX0jkcBSkt6Ppq6noeMlI2GCGDJ54kJCQeIX4FISl+kSx4/1mw6FkQB9PqB1Ockh8/JbPIfvqR/S3njk0YBKMoCr/G0uafTbDLCIpbiKoukOyaSnhtEg0feLe4cM4R8QMLzKCQFQvmoTAnCwCj0DgLGrRwSgM0BRBcAE5+ZDiZxrYj2v8C7S2F+ksShKSHSOKMpBRJshWkoT0lQU9SF3mp09ddkwjcny0C99+JwBF1d4Ui3dW+PO5r9XBwAEkx5Hf3Oj9S4ec7/LAJnnzBYjhMJiitfBZQujzoVMacllq24UhLDduS01JjuVt0K+XImqma1/3Ike3rXE3NLzmyNx+65Dvrrp8IAAAAAElFTkSuQmCC';
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
        if (!/\.gif$/.test(file.name.toLowerCase()) && file.size / 1024 > _this._opt.compressSize) {
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
                resolve(blob);
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
      img.id = 'twImage'
      img.onload = function () {
        imgBox.removeClass('loading').removeAttr('guid').empty().append(img)
        $(_this).trigger('input')
        $(_this).trigger('art-uploading')
      }
    },
    // isVideoUpload是否已经上传过视频，是: 返回true，不是: 返回false
    isVideoUploaded: function () {
      var imgLength = $(this).find('.art-img-box > #twImage').length
      var videoLength = $(this).find('.art-video-box > #twVideoPlay').length
    if (imgLength > 0) {
         return "isImage"
      } else if (videoLength > 0) {
         return "isVideo"
      } else {
         return "noImgOrVideo"
      }
    },
    // 视频上传占位
    videoPreUpload: function () {
      var guid = newGuid()
      var _this = this
      // 插入上传中视频结构
      this.insertImage('<div class="art-video-box loading" guid="' + guid + '"><span class="progress"></span><img src="' + VideoPlaceholderImg + '" /></div>')
      return guid
    },
    // 完成图片上传
    videoUploadSuccess: function (guid, src, maskSrc) {
      var _this = this
      var img = new Image()
      var imgBox = this.find('div[guid="' + guid + '"]')
//      img.src = src + '?x-oss-process=video/snapshot,t_0,f_png,w_0,h_0,m_fast'
      img.src = maskSrc
      img.dataset.video = src
      img.id = 'twVideoPlay'
      img.onload = function () {
        var twVideoPlay = '<img class="mook" src="' +playIcon + '" />'
        imgBox.removeClass('loading').removeAttr('guid').empty().append(img).append(twVideoPlay)
        $(_this).trigger('input')
        $(_this).trigger('art-uploading')
      }
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
      if (!content) return
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
    },    
    // 字体加粗
    boldFont: function (editor) {
      editor.focus()
      document.execCommand('Bold', false, null)
    }
  });

  function newGuid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  };

  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }

})()
