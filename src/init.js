

(() => {
  const paths = {
    register: './templates/register-template/register-template.html',
    login: './templates/login-template/login-template.html'
  }
  function listenEvents() {
    window.addEventListener('register-event', ({ detail }) => {
      console.log(detail);
      loadView(paths.login);
    })
    window.addEventListener('login-event', ({ detail }) => {
      console.log(detail);
    })
  }
  async function loadView(path) {
    const html = await (await fetch(path)).text();
    const main = document.getElementById('container');
    // Inserte su código aquí

  }

  loadView(paths.register);
  listenEvents();
})()