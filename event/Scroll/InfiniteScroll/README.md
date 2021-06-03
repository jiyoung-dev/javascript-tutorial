# infinite scroll tutorial

> https://www.youtube.com/watch?v=9WQBaQs1hC8 참고

<br>

### 무한스크롤에 필요한 객체들

- `window.innerHeight` : 브라우저에서 실제로 표시되고있는 영역의 높이 (현재 사용자가 보고있는 영역의 높이를 말함)
- `window.scrollY` : 스크롤이 얼마나 이동했는지 pixel단위로 나타냄 (0부터 시작, 스크롤을 내릴수록 증가한다)
- `document.body.offsetHeight` : 요소의 실제 높이를 의미 (보이는 영역 + 가려진 영역) 즉, 콘텐츠에 지정되어있는 높이를 모두 합친것

<img src="https://user-images.githubusercontent.com/61649201/120344692-c8d43c00-c334-11eb-9be6-dc0ad2595b09.png" width="80%"> <br><br>

예제에서 박스 두개를 수직배치, 각각의 높이를 500px로 지정했다. 이때, 실제 콘텐츠의 높이를 나타내는 `document.body.offsetHeiht`는 1000px이 된다.<br><br>
구현은 어떻게할까?
표시되는 영역 + 스크롤값이 콘텐츠의 전체 높이보다 크다면 더이상 내려갈 곳이 없다는 의미이다 -> 그때마다 새로운 요소를 추가함으로써 무한 스크롤을 구현할 수 있는것!<br><br>
평소에 궁금했던 이벤트였는데 생각보다 간단하다..!

```javascript
var count = 2;
    // onscroll 이벤트 발생시
    window.onscroll = function() {
      // (실제 표시된 영역의 크기 + 스크롤이 이동한 거리) 가 실제 content의 높이보다 같거나 커지는 경우
      // box의 높이가 1000px인데, 스크롤을 그 이상 내리는 경우를 의미함
      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        var toAdd = document.createElement("div");
        // 새로운 box 요소들을 추가한다
        toAdd.classList.add("box");
        toAdd.textContent = `${++count}번째 블록`
        document.querySelector('section').appendChild(toAdd);
      }
      // console.log(window.scrollY);
```

### 실행결과

<img src = "https://user-images.githubusercontent.com/61649201/120346913-c5da4b00-c336-11eb-9d71-24d0df4e3339.gif" width="70%">
