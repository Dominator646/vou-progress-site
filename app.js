import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
doc,
onSnapshot
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "ТВОЙ_KEY",
  authDomain: "PROJECT.firebaseapp.com",
  projectId: "PROJECT_ID"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const fill = document.getElementById("fill");
const percent = document.getElementById("percent");
const title = document.getElementById("title");
const online = document.getElementById("onlineCount");
const status = document.getElementById("serverStatus");
const almost = document.getElementById("almostReady");

setTimeout(()=>{
    document.getElementById("loading").style.display="none";
},2500);

onSnapshot(doc(db,"site","progress"),(snap)=>{

    const data = snap.data();

    fill.style.width = data.percent + "%";

    percent.innerText = data.percent + "%";

    title.innerText = data.title;

    online.innerText = data.online;

    status.innerText = data.status;

    if(data.percent >= 90){
        almost.style.display = "block";
    }else{
        almost.style.display = "none";
    }

});
