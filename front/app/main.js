// import "./styles/index.scss";
import './styles/style.css';

const shortbtn = document.getElementById('submit');
shortbtn.addEventListener('click', shortApi);

// const userNameEl = document.getElementById('username');
let username;

const divShort = document.getElementById('shorturl');
const divLoader = document.getElementById('loader');
const divNewUrl = document.getElementById('newurl');

/******************* SING UP *******************/
// const singupNavBtn = document.getElementById('singup-nav-btn');
// const singupBtn = document.getElementById('singup-btn');
// const singupform = document.querySelector('#singup-form');
// const switchSingUpBtn = document.querySelector('#switch-singup');

// switch Btn sing up in NAVBAR
// switchSingUpBtn.addEventListener('click', () => {
//   // loginform.classList.toggle() = 'none';
//   singupform.style.display = 'none';
//   loginform.style.display = 'flex';
// });
// Btn Sing up in NAVBAR
// singupNavBtn.addEventListener('click', () => {
//   singupform.style.display = 'flex';
//   loginform.style.display = 'none';
// });
// Btn sing up in Form
// singupBtn.addEventListener('click', async () => {
//   const usernameEl = document.getElementById('username-singup');
//   const password = document.getElementById('password-singup').value;
//   singupform.style.display = 'none';
// message(usernameEl);
// username = usernameEl.value;
// singup(username, password);
// try {
//   const response = await axios.post('api/newUser', {
//     userName: username,
//     passWord: password,
//   });
//   console.log('הצליח להירשם לאתר ');
// } catch {
//   errormessage(error);
// }
// });
/******************* SING UP *******************/

/******************* LOG IN *******************/
// const loginNavBtn = document.getElementById('login-nav-btn');
// const loginBtn = document.getElementById('login-btn');
// const loginform = document.querySelector('#login-form');
// const switchLogInBtn = document.querySelector('#switch-login');

// switch Btn log in in NAVBAR
// switchLogInBtn.addEventListener('click', () => {
// loginform.classList.toggle() = 'none';
//   loginform.style.display = 'none';
//   singupform.style.display = 'flex';
// });
// Btn log in in NAVBAR
// loginNavBtn.addEventListener('click', () => {
//   loginform.style.display = 'flex';
//   singupform.style.display = 'none';
// });
// Btn log in in Form
// loginBtn.addEventListener('click', () => {
//   const usernameEl = document.getElementById('username-login');
//   const passwordEl = document.getElementById('password-login');
//   username = usernameEl.value;
//   login(username, passwordEl.value);

//   loginform.style.display = 'none';
//   // message(username);
// });
/******************* LOG IN *******************/

// async function singup(username, passWord) {
//   try {
//     const response = await axios.post('api/newUser', {
//       userName: username,
//       passWord: passWord,
//     });
//     // console.log(response);
//     console.log('הצליח להירשם לאתר ');
//     message(username);
//     // if ()
//   } catch (error) {
//     errormessage(error);
//   }
// }

// async function login(username, passWord) {
//   try {
//     const response = await axios.post('api/login', {
//       userName: username,
//       passWord: passWord,
//     });
//     // console.log(response);
//     console.log('הצליח להיכנס');
//     message(username);
//     // if ()
//   } catch (error) {
//     errormessage(error);
//   }
// }

async function shortApi() {
  const longUrl = document.getElementById('url_input');
  // console.log(userNameEl.value);
  divShort.style.display = 'block';

  try {
    let response = await axios.post('/api', {
      userName: username,
      longUrl: longUrl.value,
    });
    newURL(response.data);
    longUrl.value = '';
  } catch (error) {
    longUrl.value = '';
    // removeAllChildNodes(divShort);
    errormessage(error);
  }
}

// error fun
function newURL(response) {
  const newURL = document.createElement('div');
  const url = document.createElement('span');

  divShort.style.paddingBottom = '1em';
  newURL.setAttribute('id', 'newurl');
  newURL.classList.add('message');

  url.textContent = `${response}`;
  url.setAttribute('id', 'url');
  newURL.appendChild(url);
  divShort.appendChild(newURL);

  const buttons = document.createElement('span');
  buttons.setAttribute('class', 'buttons');

  // copy
  const copyBtn = document.createElement('button');
  copyBtn.classList.add('close-loader-btn');
  copyBtn.textContent = 'copy';
  copyBtn.addEventListener('click', () => {
    const copyText = document.getElementById('newurl').textContent; // text
    const url = copyText.split('copy')[0];
    navigator.clipboard.writeText(url); // copy url
  });
  buttons.appendChild(copyBtn);

  // show
  const sticBtn = document.createElement('button');
  sticBtn.classList.add('close-loader-btn');
  sticBtn.textContent = 'show statics';
  sticBtn.addEventListener('click', showData);
  buttons.appendChild(sticBtn);

  newURL.appendChild(buttons);
}

// show my stic
async function showData() {
  const idEl = document.getElementById('url');
  const id = idEl.textContent.split('api/')[1];

  // const divNewUrl = document.getElementById("newurl");

  // if(divNewUrl.hasChild())
  // if (document.getElementsByClassName("divstatics")){
  //     document.getElementsByClassName("divstatics").remove();
  // }
  const divNewUrl = document.getElementById('newurl');
  const child = divNewUrl.querySelector('.divstatics');
  if (child) {
    divNewUrl.removeChild(child); // if statics showed remove
  }

  try {
    console.log(username);
    const response = await axios.get(`/api/statistic/${id}`);
    const data = response.data;
    const div = document.createElement('div');
    div.setAttribute('class', 'divstatics');

    div.innerText = `Creation Date: ${data.date}  
        Redirect Count: ${data.redirectCount}`;
    divNewUrl.appendChild(div);
  } catch (error) {
    console.log('err to show');
  }
}
// remove childs
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

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
