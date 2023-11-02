const firebaseConfig = {
    apiKey: "AIzaSyBxNW7KR-3__20AlCbhy6CYajfKngcH7EM",
    authDomain: "greensynthesis-pccoe.firebaseapp.com",
    databaseURL: "https://greensynthesis-pccoe-default-rtdb.firebaseio.com",
    projectId: "greensynthesis-pccoe",
    storageBucket: "greensynthesis-pccoe.appspot.com",
    messagingSenderId: "699072983221",
    appId: "1:699072983221:web:bbd0b9eb3141c04fdf8efc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference your database
  var GreenSynthesisDB = firebase.database().ref('GreenSynthesis');
  
  document.getElementById('contact-form').addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
    var name = getElementVal('name');
    var email = getElementVal('email');
    var phone = getElementVal('phone');
    var message = getElementVal('message');
    saveMessages(name, email, phone, message);
    //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contact-form").reset();
  }
  
  const saveMessages = (name, email, phone, message) => {
    var newGreenSynthesis = GreenSynthesisDB.push();
    newGreenSynthesis.set({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  