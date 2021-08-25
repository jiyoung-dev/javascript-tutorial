// items 리스트 모두 불러오기 (막힘)
// json을 저렇게 작성하는게 맞는지?
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

// main
loadItems()
  .then(items => {
    console.log(items);
    displayItems(items);
    // setEventListeners(items)
  })
  .catch(console.log('error'));