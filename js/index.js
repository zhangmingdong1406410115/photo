
var isplay = true;
var player = document.getElementById('player');
document.getElementById('musicBox').addEventListener('click', function() {
	if(isplay) {
		isplay = false; 
		player.pause(); 
		this.title = "点击播放";
		this.className = 'music-box'; 
	} else {
		isplay = true; 
		player.play(); 
		this.title = "点击静音";
		this.className = 'music-box play';
	}
});
var imgs = document.querySelectorAll('.photo-box>img');
for(var i = 0; i < imgs.length; i++) {
	imgs[i].addEventListener('click', function() {
		bigImg(this.src);
	});
}
function bigImg(imgpath){
	var h = document.documentElement.clientHeight;
	var tp = document.body.scrollTop || document.documentElement.scrollTop;
	var dialog = document.createElement('div');
	dialog.style.height=h+'px';
	dialog.className='modal';
	dialog.style.top=tp+'px';
	document.body.appendChild(dialog);
	document.body.style.overflow='hidden';
	var img = document.createElement('img');
	
	img.src=imgpath;
	img.className='img-item';
	var imgW = img.width;
	var imgH = img.height;
	img.style.marginTop=-(imgH/2)+'px';
	img.style.marginLeft=-(imgW/2)+'px';
	dialog.appendChild(img);
	dialog.addEventListener('click',function(){
		document.body.removeChild(dialog);
	});
	img.addEventListener('click',function(e){
		
		if(e && e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
	})
}
window.addEventListener('resize',function(){
    var height = document.documentElement.clientHeight;
	var dialog = document.querySelector('.modal');
	dialog.style.height=height+'px';
})
