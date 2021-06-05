# Mouse Event Tutorial

> https://ko.javascript.info/mouse-events-basics 참고

## shift, alt, ctrl, meta 프로퍼티

- `shiftKey`: Shift 키
- `altKey`: Alt 키
- `ctrlKey`: Ctrl 키

마우스 이벤트가 발생하는 도중에 해당키가 함께 눌러지면, 프로퍼티 값은 true이다.

```html
<button id="button">Alt, Shift 키를 누른 상태에서 클릭해주세요!</button>
<script>
  button.onclick = function (event) {
    if (event.altKey && event.shiftKey) {
      alert('클릭되었습니다!');
    }
  };
</script>
```

위의 버튼은 Alt+Shift 키와 마우스를 동시에 클릭했을때만 동작한다.

## clientX, clientY, pageX, pageY

클라이언트 좌표인 `clientX`와 `clientY`는 웹문서를 기준으로 각각 왼쪽에서 얼마나 떨어져있는지, 위에서 얼마나 떨어져있는지를 나타내며, 스크롤되어도 변하지 않는다. 만약, 500px x 500px 크기의 창에서 마우스 커서를 왼쪽 위에 위치하면, 스크롤 여부와 상관없이 clientX, clientY 값이 0이다. 커서를 정 가운데에 옮기면? 250 값을 가지게 되는것.  
반면, `pageX`와 `pageY`는 창 왼쪽 위를 기준으로 얼마나 떨어져있는지 나타내며, 스크롤하면 값이 변한다.

## oncopy event

콘텐츠를 보호하기 위해, 복사와 붙여넣기를 막으려면 `oncopy`이벤트를 사용하면 된다.

```html
<div
  oncopy="alert('불법 복제를 예방하기 복사 기능을 막아놓았습니다!');return false"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis
  ultrices lacus ut dictum. Class aptent taciti sociosqu ad litora torquent per
  conubia nostra, per inceptos himenaeos.
</div>
```

위의 글자를 선택하고 우클릭 복사 혹은 ctrl+c 하게되면, 복사 허용이 안된다는 alert 메시지가 뜨는것을 확인할 수 있다.

## Example: 선택 가능한 리스트

- 요소를 클릭하면 해당 요소가 선택(.selected 클래스 추가)되고, 나머지 요소들은 선택 해제됩니다.
- Ctrl키(Mac에서 Cmd키)를 누른 상태에서 요소를 클릭하면 해당 요소는 원래처럼 선택, 선택 해제되지만 다른 요소들의 상태는 변하지 않습니다(중복 요소 선택 기능).

```css
.selected {
  background: #0f0;
}

li {
  cursor: pointer;
}
```

먼저, selected시에 텍스트의 백그라운드 색상이 바뀌도록 설정, li태그안에 포함된 요소에 마우스를 갖다대면 포인트로 바뀌도록 지정해주었다.

```html
<ul id="ul">
  <li>React</li>
  <li>Angular</li>
  <li>Vue</li>
  <li>Svelte</li>
  <li>Blazor</li>
</ul>
```

ul이라는 id를 가진 텍스트들을 클릭하면, 색상이 바뀌고, 다른 요소들을 클릭하면 기존의 클릭색상을 사라지게 만들것이다.

이를 구현하기 위해 자바스크립트에서 다음과 같은 메서드가 필요하다.

- `toggle()`: 토글은 add와 remove 메서드가 합쳐진 개념으로, 스위티를 on/off 하는것과 유사하다. click이벤트에 classList를 이용해서 toggle로 css에서 지정한 클래스명을 on/off 처리한다.
- `add()`: 지정한 클래스 값을 추가
- `remove()`: 지정한 클래스 값을 제거

```javascript
function toggleSelect(li) {
  li.classList.toggle('selected');
}
```

이렇게 toggle() 메서드를 사용하면, 이벤트가 동작할때마다 생기거나, 사라지는 것을 반복한다.

```javascript
function singleSelect(li) {
  let selected = ul.querySelectorAll('.selected');
  for (let elem of selected) {
    elem.classList.remove('selected');
  }
  li.classList.add('selected');
}
```

한번 클릭할때마다 remove 또는 add를 구현하기 위해 작성한 함수.  
`for ... of` 반복문은 ES6에 추가된 새로운 컬렉션 전용 반복구문.  
위의 코드에서 `let elem of selected` 라고 했으므로 elem안에 selected 모든 객체들을 담겨진것. 이경우에 remove()를 수행하면 해당 요소에 걸린 selected가 제거되므로 백그라운드 색상이 사라지는것. 그게 아니라면 add('selected')를 통해 selected을 추가해준다.

```javascript
ul.onclick = function (event) {
  if (event.target.tagName != 'LI') return;
  if (event.ctrlKey || event.metaKey) {
    toggleSelect(event.target);
  } else {
    singleSelect(event.target);
  }
};
```

ctrl키와 동시에 클릭했을때를 나타낸 부분.  
toggle('selected')를 실행할 toggleSelect라는 함수를 만들었고 ctrl키가 눌렸을때, 해당 함수를 실행, 그게 아니라면 기본 singleSelect 함수를 실행시키면 된다.  
<br>
onclick이벤트만 알았지, 키와 동시에 눌러서 이벤트 동작시키는 기능 구현하는 것이랑, 자동으로 끄고 켜주는 toggle()메서드 등등 생각보다 복잡했다!
