var firebaseConfig = {
      apiKey: "AIzaSyCzV4w7G_Nxnl1oVIh7rmFgntOWofTEDis",
      authDomain: "kwitter-88c58.firebaseapp.com",
      databaseURL: "https://kwitter-88c58-default-rtdb.firebaseio.com",
      projectId: "kwitter-88c58",
      storageBucket: "kwitter-88c58.appspot.com",
      messagingSenderId: "926867913804",
      appId: "1:926867913804:web:8383d138b2c643d01e88e9",
      measurementId: "G-HPZV95CWV6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name;

    function addRoom() {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          })

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room name - " + Room_names);
       row = "<div class = 'chat_room' id = "+ Room_names +" onclick = 'redirectToChatRoom(this.id)'>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToChatRoom(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "kwitter.html";
}


