//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");

    function send() {
          msg = document.getElementById("sendinput").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like: 0
          })

          document.getElementById("sendinput").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data[ 'name' ];
         message = message_data[ 'message' ];
         like = message_data[ 'like' ];
         name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
         message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
         like_button = "<button class = 'btn btn-warning' id = " + firebase_message_id + " value = " + like + " onclick = 'updateLike(this.id)'>";
         span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like : " + like + "</span></button><hr>";

         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML = row;


//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
function directToRoomLists() {
      window.location = "kwitter_room.html";
}
function updateLike() {
      console.log("Clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}