// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCvI1utDc3W7x5v6NIyX-RzUBu62AxS8PA",
    authDomain: "let-s-chat-app-df000.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-df000-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-df000",
    storageBucket: "let-s-chat-app-df000.appspot.com",
    messagingSenderId: "186489687761",
    appId: "1:186489687761:web:cc1eb31e4dcde030c17ff0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function Logoutid(){
    window.location.replace("index.html");
}

roomname = localStorage.getItem("Room");
Username = localStorage.getItem("NameUsers")

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        Name : Username,
        Message : msg,
        Like : 0

    });

    document.getElementById("msg").value=" ";
}