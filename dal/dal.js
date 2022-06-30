// First request
function getListTest(listSize) {
    const promise = axios.get(`https://625187db2dc339451d2ef136.mockapi.io/instagramItems?page=1&limit=${listSize}`);
    return promise;
}