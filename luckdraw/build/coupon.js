webpackJsonp([0],[function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var c=i(2),o=n(c),a=i(3),l=n(a),r=i(4),d=n(r),s=document,u=s.querySelector(".no-draw"),f=s.querySelector(".coupon-ul"),p=void 0,m=!0,g=function(){var e="";(0,l["default"])("get","http://mt.mangocity.com/act/index.php","c=weichat_oauth2&m=get_all_prize",function(t){t=JSON.parse(t);var i=t.message;if("1"===t.code)if(i.length>0){for(var n=0;n<i.length;n++)e+='<li><div class="card coupon-card"><div class="card-price"><strong><i>￥</i><item>'+i[n].prize+"</item></strong><span>环球旅游卡<br/>优惠券</span><em title="+i[n].id+'>注销</em></div><div class="card-time">展会期间有效（请联系现场人员兑换）</div></div></li>';f.innerHTML=e,p=f.querySelectorAll("li"),v()}else u.style.display="block";else alert(t.message)})},v=function(){for(var e=function(e){p[e].addEventListener("click",function(t){var i=t.target||t.srcElement,n=f.querySelectorAll("li").length,c=i.title;"em"==i.nodeName.toLowerCase()&&m&&(m=!1,(0,d["default"])({type:"confirm",text:"确定要删除优惠券吗？",success:function(){(0,l["default"])("get","http://mt.mangocity.com/act/index.php","c=weichat_oauth2&m=check_prize&id="+c,function(t){m=!0,t=JSON.parse(t),"1"===t.code?(p[e].parentNode.removeChild(p[e]),n-1<=0&&(u.style.display="block")):(0,d["default"])({type:"alert",text:t.message})})},failed:function(){m=!0}}))},!1)},t=0;t<p.length;t++)e(t)};window.onload=function(){(0,o["default"])(),g()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY291cG9uLmpzIiwid2VicGFjazovLy8uL2pzL2NvdXBvbi5qcyJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnAiLCJtb2R1bGUiLCJleHBvcnRzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9sb2FkIiwiX2xvYWQyIiwiX2FqYXgiLCJfYWpheDIiLCJfbXNnIiwiX21zZzIiLCJkb2MiLCJkb2N1bWVudCIsIm5vX2RyYXciLCJxdWVyeVNlbGVjdG9yIiwiY291cG9uX3VsIiwiY291cG9uX2xpIiwiYnRuIiwiZ2V0Q2FyZCIsInVsX2h0bWwiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwibWVzc2FnZSIsImNvZGUiLCJsZW5ndGgiLCJpIiwicHJpemUiLCJpZCIsImlubmVySFRNTCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmVDYXJkIiwic3R5bGUiLCJkaXNwbGF5IiwiYWxlcnQiLCJfbG9vcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInNyY0VsZW1lbnQiLCJsaV9sZW5naHQiLCJ0aXRsZSIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJ0eXBlIiwidGV4dCIsInN1Y2Nlc3MiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJmYWlsZWQiLCJ3aW5kb3ciLCJvbmxvYWQiXSwibWFwcGluZ3MiOiJBQUFBQSxjQUFjLElBRVIsU0FBU0MsRUFBUUMsRUFBU0MsR0FFL0JGLEVBQU9DLFFBQVVDLEVBQW9CLElBS2hDLFNBQVNGLEVBQVFDLEVBQVNDLEdBRS9CLFlBY0EsU0FBU0MsR0FBdUJDLEdBQU8sTUFBT0EsSUFBT0EsRUFBSUMsV0FBYUQsR0FBUUUsVUFBU0YsR0N6QnhGLEdBQUFHLEdBQUFMLEVBQUEsR0RlS00sRUFBU0wsRUFBdUJJLEdDZHJDRSxFQUFBUCxFQUFBLEdEa0JLUSxFQUFTUCxFQUF1Qk0sR0NqQnJDRSxFQUFBVCxFQUFBLEdEcUJLVSxFQUFRVCxFQUF1QlEsR0NuQmhDRSxFQUFNQyxTQUNGQyxFQUFVRixFQUFJRyxjQUFjLFlBQzVCQyxFQUFZSixFQUFJRyxjQUFjLGNBQzlCRSxFQUFBLE9BRUpDLEdBQU0sRUFFTkMsRUFBVSxXQUNWLEdBQUlDLEdBQVUsSUFDZCxFQUFBWCxjQUFLLE1BQU0sd0NBQXdDLG1DQUFtQyxTQUFTWSxHQUMzRkEsRUFBT0MsS0FBS0MsTUFBTUYsRUFDbEIsSUFBSUcsR0FBVUgsRUFBS0csT0FDbkIsSUFBaUIsTUFBZEgsRUFBS0ksS0FDSixHQUFHRCxFQUFRRSxPQUFTLEVBQUUsQ0FDbEIsSUFBSSxHQUFJQyxHQUFHLEVBQUdBLEVBQUlILEVBQVFFLE9BQVFDLElBQzlCUCxHQUFZLG1GQUdzQ0ksRUFBUUcsR0FBR0MsTUFBTSx1REFFN0JKLEVBQVFHLEdBQUdFLEdBQUcseUVBTXhEYixHQUFVYyxVQUFZVixFQUN0QkgsRUFBWUQsRUFBVWUsaUJBQWlCLE1BR3ZDQyxRQUVBbEIsR0FBUW1CLE1BQU1DLFFBQVUsWUFNNUJDLE9BQU1kLEVBQUtHLFlBS25CUSxFQUFhLFdBRWIsSUFBSSxHQUZlSSxHQUFBLFNBRVhULEdBQ0pWLEVBQVVVLEdBQUdVLGlCQUFpQixRQUFRLFNBQVNDLEdBQzNDLEdBQUlDLEdBQVNELEVBQU1DLFFBQVVELEVBQU1FLFdBQy9CQyxFQUFZekIsRUFBVWUsaUJBQWlCLE1BQU1MLE9BQzdDZ0IsRUFBUUgsRUFBT0csS0FDaUIsT0FBakNILEVBQU9JLFNBQVNDLGVBQXlCMUIsSUFDeENBLEdBQU0sR0FDTixFQUFBUCxlQUNJa0MsS0FBSyxVQUNMQyxLQUFLLGFBQ0xDLFFBQVEsWUFDSixFQUFBdEMsY0FBSyxNQUFNLHdDQUF3QyxxQ0FBdUNpQyxFQUFNLFNBQVNyQixHQUNyR0gsR0FBTSxFQUNORyxFQUFPQyxLQUFLQyxNQUFNRixHQUNELE1BQWRBLEVBQUtJLE1BQ0xSLEVBQVVVLEdBQUdxQixXQUFXQyxZQUFZaEMsRUFBVVUsSUFDMUNjLEVBQVUsR0FBTSxJQUNmM0IsRUFBUW1CLE1BQU1DLFFBQVUsV0FHNUIsRUFBQXZCLGVBQ0lrQyxLQUFNLFFBQ05DLEtBQU16QixFQUFLRyxhQUszQjBCLE9BQU8sV0FDSGhDLEdBQU0sUUFJcEIsSUFoQ0VTLEVBQUksRUFBR0EsRUFBRVYsRUFBVVMsT0FBUUMsSUFBSVMsRUFBL0JULEdBb0Nad0IsUUFBT0MsT0FBUyxZQUVaLEVBQUE3QyxnQkFFQVkiLCJmaWxlIjoiY291cG9uLmpzP3Y9YTJiYjZlZmYiLCJzb3VyY2VzQ29udGVudCI6WyJ3ZWJwYWNrSnNvbnAoWzBdLFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXG4vKioqLyB9LFxuLyogMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIF9sb2FkID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdHZhciBfbG9hZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2FkKTtcblx0XG5cdHZhciBfYWpheCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdFxuXHR2YXIgX2FqYXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWpheCk7XG5cdFxuXHR2YXIgX21zZyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdFxuXHR2YXIgX21zZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tc2cpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdHZhciBkb2MgPSBkb2N1bWVudCxcblx0ICAgIG5vX2RyYXcgPSBkb2MucXVlcnlTZWxlY3RvcignLm5vLWRyYXcnKSxcblx0ICAgIGNvdXBvbl91bCA9IGRvYy5xdWVyeVNlbGVjdG9yKCcuY291cG9uLXVsJyksXG5cdCAgICBjb3Vwb25fbGkgPSB2b2lkIDA7XG5cdFxuXHR2YXIgYnRuID0gdHJ1ZTtcblx0XG5cdHZhciBnZXRDYXJkID0gZnVuY3Rpb24gZ2V0Q2FyZCgpIHtcblx0ICAgIHZhciB1bF9odG1sID0gJyc7XG5cdCAgICAoMCwgX2FqYXgyLmRlZmF1bHQpKCdnZXQnLCAnaHR0cDovL210Lm1hbmdvY2l0eS5jb20vYWN0L2luZGV4LnBocCcsICdjPXdlaWNoYXRfb2F1dGgyJm09Z2V0X2FsbF9wcml6ZScsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cdCAgICAgICAgdmFyIG1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG5cdCAgICAgICAgaWYgKGRhdGEuY29kZSA9PT0gXCIxXCIpIHtcblx0ICAgICAgICAgICAgaWYgKG1lc3NhZ2UubGVuZ3RoID4gMCkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXNzYWdlLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdWxfaHRtbCArPSAnPGxpPicgKyAnPGRpdiBjbGFzcz1cImNhcmQgY291cG9uLWNhcmRcIj4nICsgJzxkaXYgY2xhc3M9XCJjYXJkLXByaWNlXCI+JyArICc8c3Ryb25nPjxpPu+/pTwvaT48aXRlbT4nICsgbWVzc2FnZVtpXS5wcml6ZSArICc8L2l0ZW0+PC9zdHJvbmc+JyArICc8c3Bhbj7njq/nkIPml4XmuLjljaE8YnIvPuS8mOaDoOWIuDwvc3Bhbj4nICsgJzxlbSB0aXRsZT0nICsgbWVzc2FnZVtpXS5pZCArICc+5rOo6ZSAPC9lbT4nICsgJzwvZGl2PicgKyAnPGRpdiBjbGFzcz1cImNhcmQtdGltZVwiPuWxleS8muacn+mXtOacieaViO+8iOivt+iBlOezu+eOsOWcuuS6uuWRmOWFkeaNou+8iTwvZGl2PicgKyAnPC9kaXY+JyArICc8L2xpPic7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBjb3Vwb25fdWwuaW5uZXJIVE1MID0gdWxfaHRtbDtcblx0ICAgICAgICAgICAgICAgIGNvdXBvbl9saSA9IGNvdXBvbl91bC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuXHRcblx0ICAgICAgICAgICAgICAgIC8v5Yig6Zmk5Y2h5Y23XG5cdCAgICAgICAgICAgICAgICByZW1vdmVDYXJkKCk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBub19kcmF3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblx0fTtcblx0XG5cdHZhciByZW1vdmVDYXJkID0gZnVuY3Rpb24gcmVtb3ZlQ2FyZCgpIHtcblx0ICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGkpIHtcblx0ICAgICAgICBjb3Vwb25fbGlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0ICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50LFxuXHQgICAgICAgICAgICAgICAgbGlfbGVuZ2h0ID0gY291cG9uX3VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykubGVuZ3RoLFxuXHQgICAgICAgICAgICAgICAgdGl0bGUgPSB0YXJnZXQudGl0bGU7XG5cdCAgICAgICAgICAgIGlmICh0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSAnZW0nICYmIGJ0bikge1xuXHQgICAgICAgICAgICAgICAgYnRuID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICAoMCwgX21zZzIuZGVmYXVsdCkoe1xuXHQgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjb25maXJtJyxcblx0ICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuehruWumuimgeWIoOmZpOS8mOaDoOWIuOWQl++8n1wiLFxuXHQgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfYWpheDIuZGVmYXVsdCkoJ2dldCcsICdodHRwOi8vbXQubWFuZ29jaXR5LmNvbS9hY3QvaW5kZXgucGhwJywgJ2M9d2VpY2hhdF9vYXV0aDImbT1jaGVja19wcml6ZSZpZD0nICsgdGl0bGUsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4gPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb2RlID09PSBcIjFcIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBvbl9saVtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvdXBvbl9saVtpXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpX2xlbmdodCAtIDEgPD0gMCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub19kcmF3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIF9tc2cyLmRlZmF1bHQpKHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FsZXJ0Jyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZGF0YS5tZXNzYWdlXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgICAgICAgICAgZmFpbGVkOiBmdW5jdGlvbiBmYWlsZWQoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGJ0biA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LCBmYWxzZSk7XG5cdCAgICB9O1xuXHRcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291cG9uX2xpLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgX2xvb3AoaSk7XG5cdCAgICB9XG5cdH07XG5cdFxuXHR3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXHQgICAgLy9sb2FkaW5nLi5cblx0ICAgICgwLCBfbG9hZDIuZGVmYXVsdCkoKTtcblx0ICAgIC8v6I635Y+W5Y2h5Y235YiX6KGoXG5cdCAgICBnZXRDYXJkKCk7XG5cdH07XG5cbi8qKiovIH1cbl0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvdXBvbi5qcz92PWEyYmI2ZWZmXG4gKiovIiwiaW1wb3J0IGxvYWRlciBmcm9tICcuL2xvYWQnO1xyXG5pbXBvcnQgYWpheCBmcm9tICcuL2FqYXgnO1xyXG5pbXBvcnQgbXNnIGZyb20gJy4vbXNnJztcclxuXHJcbmxldCBkb2MgPSBkb2N1bWVudCxcclxuICAgICAgICBub19kcmF3ID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5uby1kcmF3JyksXHJcbiAgICAgICAgY291cG9uX3VsID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5jb3Vwb24tdWwnKSxcclxuICAgICAgICBjb3Vwb25fbGk7XHJcblxyXG5sZXQgYnRuID0gdHJ1ZTtcclxuXHJcbmxldCBnZXRDYXJkID0gKCkgPT4ge1xyXG4gICAgbGV0IHVsX2h0bWwgPSAnJztcclxuICAgIGFqYXgoJ2dldCcsJ2h0dHA6Ly9tdC5tYW5nb2NpdHkuY29tL2FjdC9pbmRleC5waHAnLCdjPXdlaWNoYXRfb2F1dGgyJm09Z2V0X2FsbF9wcml6ZScsZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XHJcbiAgICAgICAgaWYoZGF0YS5jb2RlID09PSBcIjFcIil7XHJcbiAgICAgICAgICAgIGlmKG1lc3NhZ2UubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9IDA7IGkgPCBtZXNzYWdlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICB1bF9odG1sICs9ICAnPGxpPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyc8ZGl2IGNsYXNzPVwiY2FyZCBjb3Vwb24tY2FyZFwiPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsnPGRpdiBjbGFzcz1cImNhcmQtcHJpY2VcIj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyc8c3Ryb25nPjxpPu+/pTwvaT48aXRlbT4nK21lc3NhZ2VbaV0ucHJpemUrJzwvaXRlbT48L3N0cm9uZz4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyc8c3Bhbj7njq/nkIPml4XmuLjljaE8YnIvPuS8mOaDoOWIuDwvc3Bhbj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyc8ZW0gdGl0bGU9JyttZXNzYWdlW2ldLmlkKyc+5rOo6ZSAPC9lbT4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArJzwvZGl2PidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsnPGRpdiBjbGFzcz1cImNhcmQtdGltZVwiPuWxleS8muacn+mXtOacieaViO+8iOivt+iBlOezu+eOsOWcuuS6uuWRmOWFkeaNou+8iTwvZGl2PidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyc8L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyc8L2xpPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb3Vwb25fdWwuaW5uZXJIVE1MID0gdWxfaHRtbDtcclxuICAgICAgICAgICAgICAgIGNvdXBvbl9saSA9IGNvdXBvbl91bC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5Yig6Zmk5Y2h5Y23XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDYXJkKCk7IFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIG5vX2RyYXcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuICAgIFxyXG5sZXQgcmVtb3ZlQ2FyZCA9ICgpID0+IHtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpPGNvdXBvbl9saS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY291cG9uX2xpW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGxpX2xlbmdodCA9IGNvdXBvbl91bC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIHRpdGxlID0gdGFyZ2V0LnRpdGxlO1xyXG4gICAgICAgICAgICBpZih0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSAnZW0nICYmIGJ0bil7XHJcbiAgICAgICAgICAgICAgICBidG4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG1zZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTonY29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDpcIuehruWumuimgeWIoOmZpOS8mOaDoOWIuOWQl++8n1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWpheCgnZ2V0JywnaHR0cDovL210Lm1hbmdvY2l0eS5jb20vYWN0L2luZGV4LnBocCcsJ2M9d2VpY2hhdF9vYXV0aDImbT1jaGVja19wcml6ZSZpZD0nICsgdGl0bGUsZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGUgPT09IFwiMVwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBvbl9saVtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvdXBvbl9saVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigobGlfbGVuZ2h0LTEpIDw9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub19kcmF3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FsZXJ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbGVkOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgIC8vbG9hZGluZy4uXHJcbiAgICBsb2FkZXIoKTtcclxuICAgIC8v6I635Y+W5Y2h5Y235YiX6KGoXHJcbiAgICBnZXRDYXJkKCk7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2pzL2NvdXBvbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=