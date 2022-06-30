// First request
const workList = document.querySelector('#work');
const workBtn = document.querySelector('#work-btn');
const worktext = document.querySelector('#work-text');
const workInput = document.querySelector('#work-input');

workBtn.addEventListener('click', () => {
  const promise = getListTest(workInput.value);
  promise.then(onDataProcessing);
});

function onDataProcessing(response) {
  let itemsArr = response.data.items;
  let count = response.data.count;
  if (workList.childNodes.length >= 1) {
    workList.innerHTML = '';
    worktext.innerHTML = '';
  }
  if (workInput.value > count) {
    worktext.append(`Максимальное количество: ${count}`);
  }
  itemsArr.map(el => {
    let li = document.createElement('li');
    li.append(el.alt);
    workList.appendChild(li);
  })
}