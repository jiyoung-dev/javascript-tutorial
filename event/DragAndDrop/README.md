# drag and drop tutorial

> 모던 자바스크립트 p776 참고

<br>

### 마우스 이벤트 객체종류

- `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseenter`, `mouseleave`

### 프로퍼티 종류

- 마우스 포인터의 좌표 프로퍼티: `screenX/screenY`, `clientX/clientY`, `pageX/pageY`, `offsetX/offsetY`
- 버튼정보 프로퍼티: `altKey`, `ctrlKey`, `shiftKey`, `button`

### 드래그 앤 드롭 예제

1. DOM요소를 마우스로 드래그한다 -> 이때 마우스를 누른 상태를 `mousedown`, 이동시키는 것을 `mousemove`
2. DOM요소가 새로운 위치로 이동되고, 마우스 버튼을 떼면 종료한다 -> `mouseup`이벤트가 발생한 시점에 종료됨

위의 세가지 객체들로 요소를 자유롭게 드래그앤 드롭 시킬 수 있는것!!

<img src="https://user-images.githubusercontent.com/61649201/120218830-42a4f080-c275-11eb-8b22-9c2bb3406a98.png" width="40%"> <br>
<img src="https://user-images.githubusercontent.com/61649201/120218843-46d10e00-c275-11eb-97d2-89c91bc8355f.png" width="40%">

위와같이 박스를 이동시킨다고 가정할때, 마우스가 처음 element위에 올라가는 좌표정보를 clientX, clientY에 담고 드래그할때마다 달라지는 포인터좌표를 비교해서 드래그 대상의 이동거리를 계산하는 것이다. 그림을 그려보니까 금방 이해가 갔다.<br><br>
<img src="https://user-images.githubusercontent.com/61649201/120218815-3e78d300-c275-11eb-9c63-855939738eca.png" width="70%">

가장 처음의 마우스 포인터 좌표를 (30px, 30px), 이동한 후에 좌표를 (100px, 70px)라고 가정한다면 x축은 70px, y축은 40px 이동한것이다. 나중 위치에서 처음 위치를 빼면된다. 코드로 구현하려면?

```javascript
// box: 드래그 대상요소
const $box = document.querySelector('.box');
// 드래그 시작시점의 마우스 포인터 위치 (0, 0)
const initailMousePos = { x: 0, y: 0 };
// 오프셋: 이동할 거리
const offset = { x: 0, y: 0 };
// mousemove 이벤트 핸들러
const move = e => {
  // 오프셋 = 현재 마우스 포인터좌표 - 드래그 시작 시점의 마우스 포인터좌표
  offset.x = e.clientX - initailMousePos.x;
  offset.y = e.clientY - initailMousePos.y;
  // translate3d() -> 3D공간에서 element의 위치를 지정해주는 CSS함수
  // transform: translate3d(0)이 가장 가운데위치 (x,y,z)축에 길이를 설정해주면 그만큼 상대적으로 이동함
  $box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
};
```

`offset.x = e.clientX - initailMousePos.x; offset.y = e.clientY - initailMousePos.y;` -> 박스의 이동거리를 구현한 부분이다. <br>
`이동거리 offset = 이동한후 좌표 e.client - 처음위치 initailMousePos`
<br>
좌표는 계속 변경되므로 `${offset.x}px` 객체로 받아준 모습 <br><br>

### 마우스 이벤트처리

```javascript
// mousedown 이벤트가 발생하면 드래그 시작 시점의 마우스포인터 좌표를 저장
$box.addEventListener('mousedown', e => {
  // 드래그 시작시점의 포인터좌표를 (e.clientX, e.clientY)저장한다
  // 최소 한번이상 드래그한 경우, move에서 해당 translate3d으로 이동한 상태이므로 offset.x와 offset.y를 빼준다
  initailMousePos.x = e.clientX - offset.x;
  initailMousePos.y = e.clientY - offset.y;

  // mousedown 이벤트가 발생한 상태에서 mousemove 이벤트가 발생하면 box 요소를 이동시킨다
  document.addEventListener('mousemove', move);
});

// mouseup 이벤트 발생시, mousemove 이벤트 제거 -> 이동을 멈춘다
document.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', move);
});
```

- `mousedown`은 마우스로 누른 상태를 의미하므로 가장 처음좌표를 핸들링한다. 이때 clientX와 clientY가 뷰포트(웹페이지의 가시영역을 기준으로한 좌표)를 나타내는것. 이동거리 offset을 0,0 이라고 초기화했었다.
- `mosuemove`는 드래그해서 이동중인 상태를 나타냄. 따라서 move를 그대로 실행시켜준다.
- `mouseup`은 마우스를 떼면 드롭되면서 이동이 중지되는것. `removeEventListener()`를 사용하면 된다.
