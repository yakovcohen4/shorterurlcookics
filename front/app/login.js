import './styles/style.css';

let username;
const divShort = document.getElementById('shorturl');

/******************* SING UP *******************/
// const singupNavBtn = document.getElementById('singup-nav-btn');
const singupBtn = document.getElementById('singup-btn');
const singupform = document.querySelector('#singup-form');
const switchSingUpBtn = document.querySelector('#switch-singup');

// switch Btn sing up in NAVBAR
switchSingUpBtn.addEventListener('click', () => {
  // loginform.classList.toggle() = 'none';
  singupform.style.display = 'none';
  loginform.style.display = 'flex';
});
// Btn Sing up in NAVBAR
// singupNavBtn.addEventListener('click', () => {
//   singupform.style.display = 'flex';
//   loginform.style.display = 'none';
// });
// Btn sing up in Form
singupBtn.addEventListener('click', async () => {
  const usernameEl = document.getElementById('username-singup');
  const password = document.getElementById('password-singup').value;
  singupform.style.display = 'none';
  // message(usernameEl);
  username = usernameEl.value;
  singup(username, password);
  // try {
  //   const response = await axios.post('api/newUser', {
  //     userName: username,
  //     passWord: password,
  //   });
  //   console.log('הצליח להירשם לאתר ');
  // } catch {
  //   errormessage(error);
  // }
});
/******************* SING UP *******************/

/******************* LOG IN *******************/
// const loginNavBtn = document.getElementById('login-nav-btn');
const loginBtn = document.getElementById('login-btn');
const loginform = document.querySelector('#login-form');
const switchLogInBtn = document.querySelector('#switch-login');

// switch Btn log in in NAVBAR
switchLogInBtn.addEventListener('click', () => {
  // loginform.classList.toggle() = 'none';
  loginform.style.display = 'none';
  singupform.style.display = 'flex';
});
// Btn log in in NAVBAR
// loginNavBtn.addEventListener('click', () => {
//   loginform.style.display = 'flex';
//   singupform.style.display = 'none';
// });
// Btn log in in Form
loginBtn.addEventListener('click', () => {
  const usernameEl = document.getElementById('username-login');
  const passwordEl = document.getElementById('password-login');
  username = usernameEl.value;
  login(username, passwordEl.value);

  //   loginform.style.display = 'none';
  // message(username);
});
/******************* LOG IN *******************/

async function singup(username, passWord) {
  try {
    const response = await axios.post('api/newUser', {
      userName: username,
      passWord: passWord,
    });
    // console.log(response);
    console.log('הצליח להירשם לאתר ');
    // message(username);
    setTimeout(() => {
      loginform.style.display = 'flex';
    }, 2000);
    // if ()
  } catch (error) {
    // console.log(error);
    errormessage(error);
  }
}

async function login(username, passWord) {
  try {
    const response = await axios.post('api/login', {
      userName: username,
      passWord: passWord,
    });
    window.location.replace(response.data); // open home page
    console.log('הצליח להיכנס');
    // message(username);
    // if ()
  } catch (error) {
    console.log(error);
    errormessage(error);
  }
}

// ************* messege **************//
// ************* messege **************//

// error fun
function errormessage(error) {
  divShort.style.paddingBottom = '1em';
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('message');

  const errspan = document.createElement('span');
  errspan.textContent = error.response.data.error;
  errspan.setAttribute('id', 'errspan');

  errorMessage.appendChild(errspan);
  divShort.appendChild(errorMessage);

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-loader-btn');
  closeBtn.textContent = 'close';
  closeBtn.addEventListener('click', () => {
    document.querySelector('.message').remove();
  });
  errorMessage.appendChild(closeBtn);

  setTimeout(() => {
    if (divShort.hasChildNodes()) {
      divShort.removeChild(errorMessage);
    }
  }, 4000);
}

function message(username) {
  const messageEl = document.getElementById('message');
  const message = document.createElement('div');
  message.classList.add('message2');

  // const username = username;
  // const password = passwordEl.value;
  message.textContent = `Hello ${username} ,wellcome to Rebrand.`;
  messageEl.appendChild(message);

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-loader-btn');
  closeBtn.textContent = 'close';
  closeBtn.addEventListener('click', () => {
    document.querySelector('.message2').remove();
  });
  message.appendChild(closeBtn);

  setTimeout(() => {
    if (messageEl.hasChildNodes()) {
      messageEl.removeChild(message);
    }
  }, 4000);
  // if (messageEl.hasChildNodes()) {
  // }
}
