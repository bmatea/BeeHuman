const express = require("express");
const app = express();
const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyCsASTuDI1L9KdPgiCtXCN2kh-WbI5ZO78",
  authDomain: "beehuman-ffdfb.firebaseapp.com",
  databaseURL: "https://beehuman-ffdfb.firebaseio.com",
  projectId: "beehuman-ffdfb",
  storageBucket: "beehuman-ffdfb.appspot.com",
  messagingSenderId: "36920078482",
  appId: "1:36920078482:web:749b3aaf88579ec336364b"
}
firebase.initializeApp(config);



const users = [
  {
    id: 1,
    firstName: "Tin",
    lastName: "Ujević",
    image: "../../assets/bee_icon.jpg"
  },
  {
    id: 2,
    firstName: "Wislawa",
    lastName: "Szimborska",
    image: "../../assets/bee_icon.png"
  },
  {
    id: 3,
    firstName: "Carlos",
    lastName: "Ruiz Zafon",
    image: "../../assets/volunteer.jpg"
  }
];

const ads = [
  {
    id: 1,
    title: "Tražim čizme",
    description: "Traže se zimske čizme, ženski model, veličina 42. Od čvrstog materijala. text text text text text text",
    author: 1
  },
  {
    id: 2,
    title: "Trebam volontere",
    description: "Traže se volonteri za rad u parku prirode.",
    author: 2
  },
  {
    id: 3,
    title: "Poklanjam traperice",
    description: "Tamne ženske traperice, veličina 42, high-waist.",
    author: 3
  }
];



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/ads", (req, res) => {
  //return res.json(users);
  const donationsRef = firebase.database().ref('/donations_ads');
  donationsRef.on("value",
    function(snapshot) {
      res.json(snapshot.val());
      donationsRef.off('value');
    },
    function(errorObject) {
      res.send("Read failed: " + errorObject.code);
    }
  );
});

app.get("/ads/:id", (req, res) => {
  const donationsRef = firebase.database().ref('/donations_ads/' + id);

  donationsRef.on("value",
    function(snapshot) {
      res.json(snapshot.val());
      donationsRef.off('value');
    },
    function(errObj) {
      res.send("Error: " + errObj.code);
    }
  );
});

app.get("/users/:id", (req, res) => {
  const donationsRef = firebase.database().ref('/users/' + req.params.id);

  donationsRef.on("value",
    function(snapshot) {
      res.json(snapshot.val());
      donationsRef.off('value');
    },
    function(errObj) {
      res.send("Error: " + errObj.code);
    }
  );
});

app.get("/users", (req,res) => {
  const donationsRef = firebase.database().ref('/users');
  donationsRef.on("value",
    function(snapshot) {
      res.json(snapshot.val());
      donationsRef.off('value');
    },
    function(errorObject) {
      res.send("Read failed: " + errorObject.code);
    }
  );
});

app.get("/pending_donations", (req,res) => {
  const donationsRef = firebase.database().ref('/pending_donations');
  donationsRef.on("value",
    function(snapshot) {
      res.json(snapshot.val());
      donationsRef.off('value');
    },
    function(errorObject) {
      res.send("Read failed: " + errorObject.code);
    }
  );
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
