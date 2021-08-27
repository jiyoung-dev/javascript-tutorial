// items 리스트 모두 불러오기
function loadItems(){
  return fetch('data/data.json')
    // 받아온 데이터가 성공적이라면 json으로 반환 
    .then(response => response.json())
    .then(json => json.items); 
}

// items -> html상에 표시
function displayItems(items){
  const ul = document.querySelector('.items');
  // items 내의 모든 요소에 대해 createHTML 함수를 호출해, 새로운 배열 반환
  ul.innerHTML = items.map(item => createHTML(item)).join('');
}

// items 리스트 담은 li태그 반환
function createHTML(item){
  return `
  <li>
    <img src=${item.image} alt=${item.type} class="item_thumb">
    <span class="item_description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

// Button 이벤트 
function onButtonClick(event, items){
  // HTML 요소로부터 data 어트리뷰트 값 불러오기  
  const key = event.target.dataset.key;
  const value = event.target.dataset.value;

  // .btn 영역 클릭시 null인경우 undefined로 값이 저장되는 경우, 무시 
  if(key == null || value == null){
    return; 
  }

  displayItems(items.filter(item => item[key] === value)) ;

}

// filtering 이벤트 함수 
function setEventListeners(items){
  const logo = document.querySelector('.logo');
  const button = document.querySelector('.btn');
  logo.addEventListener('click', () => displayItems(items));
  button.addEventListener('click', event => onButtonClick(event, items));
}

// main
loadItems()
  .then(items => {
    console.log(items);
    displayItems(items);
    setEventListeners(items)
  })
  .catch(console.log('error'));