/*! random background image top*/
window.addEventListener('load', function frontimage() { 
	var thediv2 = document.getElementById("topimg");
	var imgarray2 = new Array("f1.svg", "f2.svg", "f3.svg", "f4.svg", "f5.svg", "f6.svg", "f7.svg", "f8.svg", "f9.svg", "f10.svg", "f11.svg", "f12.svg", "f13.svg", "f14.svg", "f15.svg", "f16.svg", "f17.svg", "f18.svg", "f19.svg", "f20.svg", "f21.svg", "f22.svg", "f23.svg", "f24.svg", "f25.svg", "f26.svg", "f27.svg", "f28.svg", "f29.svg", "f30.svg", "f31.svg", "f32.svg", "f33.svg", "f34.svg", "f35.svg", "f36.svg", "f37.svg", "f38.svg", "f39.svg", "f40.svg", "f41.svg", "f42.svg", "f43.svg", "f44.svg", "f45.svg", "f46.svg", "f47.svg", "f48.svg", "f49.svg", "f50.svg", "f51.svg");
	var spot2 = Math.floor(Math.random()* imgarray2.length);
	thediv2.style.background = "url(img/f-img/"+imgarray2[spot2]+")";
	thediv2.style.backgroundSize = "contain";
	thediv2.style.backgroundAttachment = "fixed";
	thediv2.style.backgroundRepeat = "no-repeat";
	thediv2.style.zIndex = "2";
	thediv2.style.backgroundColor = "transparent";
	thediv2.style.margin = "auto";
	thediv2.style.backgroundPosition = "50% 0";
});

/*! random background image back*/
window.addEventListener('load', function backimage() {    
	var thediv = document.getElementById("imgmain");
	var imgarray = new Array("b1.jpg", "b2.jpg", "b3.jpg", "b5.jpg", "b6.jpg", "b7.jpg", "b8.jpg", "b9.jpg", "b10.jpg", "b11.jpg", "b12.jpg", "b13.jpg", "b14.jpg", "b15.jpg", "b16.jpg", "b17.jpg", "b18.jpg", "b19.jpg", "b20.jpg", "b21.jpg", "b22.jpg", "b23.jpg", "b24.jpg", "b25.jpg", "b27.jpg", "b28.jpg", "b29.jpg", "b30.jpg", "b31.jpg", "b32.jpg", "b33.jpg", "b34.jpg", "b35.jpg", "b36.jpg", "b37.jpg", "b38.jpg", "b39.jpg", "b40.jpg", "b41.jpg", "b42.jpg", "b43.jpg", "b44.jpg", "b45.jpg", "b46.jpg", "b47.jpg", "b48.jpg", "b49.jpg", "b50.jpg", "b51.jpg", "b52.jpg", "b53.jpg", "b54.jpg", "b55.jpg", "b56.jpg", "b57.jpg", "b58.jpg", "b59.jpg", "b60.jpg", "b61.jpg", "b62.jpg", "b63.jpg", "b64.jpg", "b65.jpg", "b66.jpg", "b67.jpg", "b68.jpg", "b69.jpg", "b70.jpg", "b71.jpg", "b72.jpg", "b73.jpg", "b74.jpg", "b75.jpg", "b76.jpg", "b77.jpg", "b78.jpg", "b79.jpg", "b80.jpg", "b81.jpg", "b82.jpg", "b83.jpg", "b84.jpg", "b85.jpg", "b86.jpg", "b87.jpg", "b88.jpg", "b89.jpg", "b90.jpg");
	var spot = Math.floor(Math.random()* imgarray.length);
	thediv.style.background = "url(img/b-img/"+imgarray[spot]+")";
	thediv.style.backgroundSize = "100%";
	thediv.style.backgroundAttachment = "fixed";
	thediv.style.backgroundRepeat = "no-repeat";
	thediv.style.zIndex = "1";
});


/*! rollover script */
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/*! loading gif script */
$(document).ready(function(){
    $('#imgLoader').show();
    $('#topimg').load(function(){
      $('imgLoader').hide();
  });
});
