﻿function play68_init() {
	updateShare(0);
}
function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend();
	//setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(score) {
	var descContent = "全民追公车";
		if(score>0)
		 	shareTitle = "全国各地人民追公交的正确方式！我帮助"+score+"个人追上了公交。";
		else 
			shareTitle = "全国各地人民追公交的正确方式！你知道吗？"
	document.title = shareTitle;  
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}
function updateShareScore(score) {
	updateShare(score);
}
function play68_goHome(){
	parent.location.href="http://mp.weixin.qq.com/s?__biz=MzI4MjA2MjE0MQ==&mid=246005295&idx=1&sn=490f8141976d607ba079d48f52a3fcd7#rd"
}