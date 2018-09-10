import run from './gen'

let isRunning = false;

const init = () =>  {
  listen()
  play();
}

function listen () {
  document.getElementById('head').addEventListener('click', function() {
    if (isRunning) return
    play()
  })
}

function play () {
  const head = document.getElementById('head')
  const history = run('Only 1 thing.2 do.3 words.4 you.I love you.831143').history
  isRunning = true;
  let i = 0;
  history.forEach((text, i) => {
    setTimeout(function () {
      head.innerText = text
      if (++i === history.length) isRunning = false;
    }, i * 30)
  })
}

init()
