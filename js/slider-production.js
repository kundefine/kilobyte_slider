"use strict";function Slider(){var e=this,i=document.querySelectorAll(".slider"),t=[],o=[],n=[],l=[];this.singleSlider=[],this.totalSlider=i.length||null,this.active=(function(){var e=[],t=[],o=[];if(i.length>0)for(var n=0;n<i.length;n++)e[n]=document.createElement("DIV"),t[n]=document.createElement("BUTTON"),o[n]=document.createElement("BUTTON"),t[n].textContent="Prev",o[n].textContent="Next",e[n].className="navigation nav-"+n,t[n].className="prev prev-"+n,o[n].className="next next-"+n,e[n].appendChild(t[n]),e[n].appendChild(o[n]),i[n].appendChild(e[n])}(),void console.log("your slider is active")),function(){var e=[],t=[];if(i.length>0)for(var o=0;o<i.length;o++){e[o]=document.createElement("DIV");var n=i[o].getElementsByTagName("img");if(n)for(var l=0;l<n.length;l++)t[l]=document.createElement("span"),t[l].textContent=l,e[o].appendChild(t[l]);e[o].className="pagination pag-"+o,i[o].appendChild(e[o])}}();for(var r=0;r<i.length;r++)t[r]=i[r].querySelectorAll("img");for(var a=0;a<i.length;a++)l[a]=i[a].querySelectorAll("div.pagination span");for(var s=0;s<i.length;s++)o[s]=i[s].querySelector("button.next");for(var d=0;d<i.length;d++)n[d]=i[d].querySelector("button.prev");for(var g=0;g<this.totalSlider;g++)this.singleSlider[g]={myPosition:0,sliderNumber:i[g],sliderImg:t[g],sliderTotalImage:t[g].length,sliderNextButton:o[g],sliderPrevButton:n[g],sliderPagination:l[g]};for(var c=this.singleSlider,m=function(i){e.singleSlider[i].sliderNextButton.onclick=function(e){c[i].sliderImg[c[i].myPosition].style.opacity="0",c[i].sliderPagination[c[i].myPosition].style.backgroundColor="lightslategray",c[i].myPosition+=1,c[i].myPosition>=c[i].sliderTotalImage&&(c[i].myPosition=0),c[i].sliderImg[c[i].myPosition].style.opacity="1",c[i].sliderPagination[c[i].myPosition].style.backgroundColor="red"}},y=0;y<this.totalSlider;y++)m(y);for(var u=function(i){e.singleSlider[i].sliderPrevButton.onclick=function(e){c[i].sliderImg[c[i].myPosition].style.opacity="0",c[i].sliderPagination[c[i].myPosition].style.backgroundColor="lightslategray",c[i].myPosition-=1,c[i].myPosition<0&&(c[i].myPosition=c[i].sliderTotalImage-1),c[i].sliderImg[c[i].myPosition].style.opacity="1",c[i].sliderPagination[c[i].myPosition].style.backgroundColor="red"}},P=0;P<this.totalSlider;P++)u(P);for(var h=function(i){for(var t=function(t){e.singleSlider[i].sliderPagination[t].onclick=function(e){c[i].sliderImg[c[i].myPosition].style.opacity="0",c[i].sliderPagination[c[i].myPosition].style.backgroundColor="lightslategray",c[i].myPosition=t,c[i].sliderImg[c[i].myPosition].style.opacity="1",c[i].sliderPagination[c[i].myPosition].style.backgroundColor="red"}},o=0;o<e.singleSlider[i].sliderTotalImage;o++)t(o)},v=0;v<this.totalSlider;v++)h(v)}new Slider;