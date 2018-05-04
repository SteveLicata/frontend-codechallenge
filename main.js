window.onload = function() {
  console.log("DOM content loaded");


  // function to open SIDENBAR
  function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementById("main").style.marginLeft = "150px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  };

  // function to close SIDEBAR
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  };

  // click event to open SIDEBAR
  var ham = document.getElementById("hamburger");
    ham.addEventListener('click', function(){
      openNav();
    });

  // click event to close SIDEBAR
  var closex = document.getElementById("closingx");
    closex.addEventListener('click', function(){
      closeNav();
    });


  // validation form submit button & click event
  var submitButton = document.querySelector('#button');
  submitButton.addEventListener('click', function(){
    formValidation();
  });


  // name validation function
  function nameValidation(){
    var name = document.querySelector('#inputname').value;
    console.log("Name: " + name);
    // checks if the name field is blank
    if (name == "") {
      alert("Please Enter A Valid Name.");
      return false;
    } else {
      return true;
    }
  };

  // phone validation function
  function phoneValidation(){
    var phone = document.querySelector('#inputnum').value;
    console.log("Phone: " + phone);
    // checks if number is blank (okay, not required field)
    if (phone == "") {
      return true;
    }
    // checks if the phone number is 10 digits
    if (phone.length != 10) {
      alert("Please Include Area Code.")
    }
    // checks if the phone number is a number
    if (!phone.match(/^[0-9]{10}$/)) {
      alert("Please Enter A Valid Phone Number.");
      return false;
    } else {
      return true;
    }
  };

    // email validation
  function emailValidation() {
    var email = document.querySelector('#inputemail').value;
    console.log("Email: " + email);
    // checks if the email field is blank
    if (email == "") {
      alert("Please Enter An Email Address.");
      return false;
      }
    // checks if the email is a valid email address
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      alert("Invalid Email.");
      return false;
    } else {
      return true;
    }
  };

  // subject
  function subjectValidation() {
    var subject = document.querySelector('#inputsubject').value;
    console.log("Subject: " + subject);
  };

  // message
  function messageValidation() {
    var message = document.querySelector('#inputmessage').value;
    console.log("Message: " + message);
  };


  // validation function
  function formValidation() {
    //checks if any of the validations are invalid and prompts user to fix errors
    if (!nameValidation() || !phoneValidation() || !emailValidation()) {
      alert("Please Fix Errors to Submit.")
      return false;
    }
    else {
      // if validation passes, user will be brought to new page with confirmation prompt
      document.form.action = "actionpage.html"
      return true;
    }
  };


}; // end DOM content loaded
