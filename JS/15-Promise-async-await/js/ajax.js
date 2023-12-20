function ajax(url, resolve, reject) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  xhr.onload = function () {
    if (this.status == 200) {
      resolve(JSON.parse(this.response));
    } else {
      reject(this);
    }
  };
}
