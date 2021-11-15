// import "./styles/index.scss";
import "./styles/style.css";

const shortbtn = document.getElementById("submit")
shortbtn.addEventListener("click", shortApi);

const divShort = document.getElementById("shorturl");
const divLoader = document.getElementById("loader");
const divNewUrl = document.getElementById("newurl");

async function shortApi(){
    const longUrl = document.getElementById("url_input");
    divShort.style.display = "block";

    try{
        let response = await axios.post("/api",{
            "longUrl":longUrl.value
        })

        newURL(response.data);
        longUrl.value = "";
    }
    catch(error){
        longUrl.value = "";
        // removeAllChildNodes(divShort);
        errormessage(error)
    }
}

// error fun 
function newURL(response) {

    const newURL = document.createElement('div');
    const url = document.createElement("span");

    divShort.style.paddingBottom = "1em";
    newURL.setAttribute("id", "newurl");
    newURL.classList.add("message");

    url.textContent = `${response}`;
    url.setAttribute("id", "url");
    newURL.appendChild(url);
    divShort.appendChild(newURL)
    
    const buttons = document.createElement("span");
    buttons.setAttribute("class" ,"buttons");

    // copy
    const copyBtn = document.createElement("button");
    copyBtn.classList.add('close-loader-btn');
    copyBtn.textContent = "copy";
    copyBtn.addEventListener("click", ()=>{
        const copyText = document.getElementById("newurl").textContent; // text
        const url = copyText.split('copy')[0];
        navigator.clipboard.writeText(url);                             // copy url
    });
    buttons.appendChild(copyBtn);

    // show 
    const sticBtn = document.createElement("button");
    sticBtn.classList.add('close-loader-btn');
    sticBtn.textContent = "show statics";
    sticBtn.addEventListener("click", showData);
    buttons.appendChild(sticBtn);

    newURL.appendChild(buttons)
}

// error fun 
function errormessage(error) {

    divShort.style.paddingBottom = "1em";
    const errorMessage = document.createElement('div')
    errorMessage.classList.add("message");

    const errspan = document.createElement("span");
    errspan.textContent = error.response.data.error;
    errspan.setAttribute("id", "errspan");
    
    errorMessage.appendChild(errspan);
    divShort.appendChild(errorMessage);
    
    const closeBtn = document.createElement("button");
    closeBtn.classList.add('close-loader-btn')
    closeBtn.textContent = "close";
    closeBtn.addEventListener("click", ()=> {
        document.querySelector(".message").remove()
    });
    errorMessage.appendChild(closeBtn);
    
    setTimeout(()=>{
        divShort.removeChild(errorMessage)
    },4000)
    
}

// show my stic
async function showData(){
    const idEl = document.getElementById("url");
    const id = idEl.textContent.split("api/")[1];

    // const divNewUrl = document.getElementById("newurl");

    // if(divNewUrl.hasChild())
    // if (document.getElementsByClassName("divstatics")){
    //     document.getElementsByClassName("divstatics").remove();
    // }

    const divNewUrl = document.getElementById("newurl")
    // removeAllChildNodes(div)
    try {
        const response = await axios.get(`/api/statistic/${id}`)
        const data = (response.data);
        const div = document.createElement("div");
        div.setAttribute("class","divstatics")
    
        div.innerText=(`Creation Date: ${data.date}  
        Redirect Count: ${data.redirectCount}`);
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