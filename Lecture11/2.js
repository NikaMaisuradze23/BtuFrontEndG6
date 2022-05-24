function rect() {
    let div = document.createElement('div');
    div.innerText = document.getElementById('getText').innerText;
    document.body.appendChild(div);
    let rand = Math.floor(Math.random() * 10);
    rand.innerText = document.getElementById('getText').innerText;
    document.body.appendChild(rand);
  }