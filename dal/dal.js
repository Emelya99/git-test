// First request
function getListTest(listSize, onDataProcessing) {
    if (workList.childNodes.length >= 1) {
        workList.innerHTML = '';
        worktext.innerHTML = '';
    }
    axios(`https://625187db2dc339451d2ef136.mockapi.io/instagramItems?page=1&limit=${listSize}`)
        .then(function (response) {
            onDataProcessing(response);
        });
}