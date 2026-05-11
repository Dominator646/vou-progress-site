import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
doc,
setDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
getAuth,
GoogleAuthProvider,
signInWithPopup
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyCJcsgC32QfBE-iOL2Aarxy2VlASTtUwJI",
  authDomain: "server-e07cf.firebaseapp.com",
  projectId: "server-e07cf"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

document.getElementById("login")
.onclick = async ()=>{

    const provider =
    new GoogleAuthProvider();

    await signInWithPopup(auth,provider);

    alert("Logged");
};

document.getElementById("save")
.onclick = async ()=>{

    await setDoc(doc(db,"site","progress"),{

        percent:Number(
            document.getElementById("percent").value
        ),

        title:
        document.getElementById("title").value,

        online:Number(
            document.getElementById("online").value
        ),

        status:
        document.getElementById("status").value

    });

    alert("Saved");

};
