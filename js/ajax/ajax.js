const workList = document.querySelector('#work');
const workBtn = document.querySelector('#work-btn');
const workInput = document.querySelector('#work-input');
workBtn.addEventListener('click',getInstagramItems);

function getInstagramItems() {
  if( workList.childNodes.length >= 1 ){
    workList. innerHTML = '';
  }
  axios(`https://625187db2dc339451d2ef136.mockapi.io/instagramItems?page=1&limit=${workInput.value}`)
  .then(function (response) {
    itemsArr = response.data.items;
    itemsArr.map(el => {
      let li = document.createElement('li');
      li.append(el.alt);
      workList.appendChild(li);
    } )
  });
}