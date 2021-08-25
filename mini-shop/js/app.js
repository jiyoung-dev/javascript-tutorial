// items 리스트 모두 불러오기 (막힘)
// json을 저렇게 작성하는게 맞는지?
function loadItems(){
  return fetch('data/data.json')
    // 받아온 데이터가 성공적이라면 json으로 반환 
    .then(response => response.json())
    .then(json => json.items); 
}

// main
loadItems()
  .then(items => {
    console.log(items);
    // displayItems(items);
    // setEventListeners(items)
  })
  .catch(console.log);