# Up/down button tutorial

> https://ko.javascript.info/task/updown-button 참고

<br>

스크롤을 내리면 왼쪽 상단에 top 버튼이 생기고,
클릭시 페이지 가장 상단으로 이동시키려고 한다.

### 필요한 메서드

- `scrollTo()` : window 객체의 scrollTo 메서드는 문서를 지정된 좌표로 스크롤시켜주는 메서드이다. (window 생략가능)

```javascript
arrowTop.onclick = function () {
  window.scrollTo(pageXOffset, 0);
  // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
};

window.addEventListener('scroll', function () {
  arrowTop.hidden = pageYOffset < document.documentElement.clientHeight;
});
```

Up 버튼은 초기상태에서는 안보이고, 특정 지점까지 아래로 스크롤하면 나타나도록 해야한다.  
따라서 엘리먼트 내부 높이보다 스크롤한 거리가 짧을때, arrowTop을 hidden처리해준것.<br><br>

<img src = "https://user-images.githubusercontent.com/61649201/120667620-a1ae7380-c4c8-11eb-8fda-1aefd945505d.png" width="70%">
