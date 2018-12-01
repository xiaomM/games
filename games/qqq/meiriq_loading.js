var meiriq_loading = (function() {
    function meiriq_loading() {
        this.msgArr = ['设计狮疯狂上色中…','攻城狮奋力敲出游戏代码…','产品汪吃力搬运页面元素…','小Q正在擦拭按钮…','游戏主角正在房间里化妆…','运营喵撰写得分文案中...','游戏正在空中赶过来…'];
        this.currentIndex = 0;
        this.onCreate();
    }
    meiriq_loading.prototype.onCreate = function() {
        var content;
        content = document.createElement('div');
        content.setAttribute('id', 'meiriq-loading');
        content.style.position = 'absolute';
        content.style.width = '100%';
        content.style.height = '100%';
        content.style.top = '0';
        content.style.textAlign = "center";
        content.style.bottom = '0';
        content.style.left = '0';
        content.style.right = '0';
        content.style.zIndex = 9999;
        content.style.backgroundColor = '#ffffff';
        content.innerHTML = '<img id="meiriq-loading-img" src="data:image/gif;base64,R0lGODlhoABQAMQAABuG4SAdHlSh5P+rY/+UN/jQraTO8/z69/97CNSxmP/kzKWkpnq36v/AicHe9/706//bu+r0/CVjmNbV1P7s3b++vu1KVe7p5N3t+0xITIR/fP+AEiWL4v///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDOTVERDRFRjg2QUJFNDExQUJBRDk3Q0MyNjZCQjE2MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQkI5OTFERUFDNDkxMUU0ODkwMkNCMDk2NEMyMDRENSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQkI5OTFEREFDNDkxMUU0ODkwMkNCMDk2NEMyMDRENSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5MDM4QzYxOThBQkU0MTE5MjIyODY4NUY2NTEwNDc0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM5NURENEVG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" style="position:relative;margin-top:'+(window.innerHeight/2 - 80 - window.innerHeight/7)+'px;" /><p id="meiriq-loading-msg" style="font-weight:bold;color:#555555">设计狮疯狂上色中…</p><img src="data:image/png;base64,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" style="position:absolute;bottom:30px;left:'+(window.innerWidth/2 -35)+'px;" />';
        document.body.appendChild(content);

    };
    meiriq_loading.prototype.changeMsg = function(){
        var mp = document.getElementById('meiriq-loading-msg');
        if(mp){
            mp.innerHTML = this.msgArr[(this.currentIndex++)%7];
            var self = this;
            setTimeout(function(){
                self.changeMsg();
            },1000);
        }
    };
    meiriq_loading.prototype.setProgress = function(current, total) {
       
    };
    meiriq_loading.prototype.finish = function() {
        var elem;
        return (elem = document.getElementById('meiriq-loading')).parentNode.removeChild(elem);
    };
    return meiriq_loading;
})();

var loading = new meiriq_loading();
loading.changeMsg();
