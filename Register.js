<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial, Helvetica, sans-serif;}
*{box-sizing: border-box;}

/* Button used to open the contact form - fixed at the bottom of the page */
.open-button {
  background-color:black;
  color: white;
  padding: 16px 30px;
  border: none;
  cursor: pointer;
  opacity: 1.0;
  position: center;
  bottom: 30px;
  right: 30px;
  width: 250px;
}

/* The popup form - hidden by default */
.form-popup {
  display: none;
  position: center;
  bottom: 0;
  height: 100px;
  right: 15px;
  border: 3px solid #f1f1f1;
  z-index: 9;
}


/* Add styles to the form container */
.form-container {
  max-width: 250px;
  padding: 10px;
  background-color: white;
}

/* Full-width input fields */
.form-container input[type=text], .form-container input[type=type] {
  width: 100%;
  right: 100%;
  height: 100%;
  padding: 20px;
  margin: 10px 0 22px ;
  border: none;
  background: #f1f1f1;
}

/* When the inputs get focus, do something */
.form-container input[type=text]:focus, .form-container input[type=PhoneNumber]:focus {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}

/* Set a style for the submit/login button */
.form-container .btn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom:10px;
  opacity: 0.8;
}

/* Add a red background color to the cancel button */
.form-container .cancel {
  background-color: red;
}

/* Add some hover effects to buttons */
.form-container .btn:hover, .open-button:hover {
  opacity: 1;
}
</style>
</head>
<body>
<center>
<h1>Registration Form</h1>
</center>
<p>Click on the signup button to Register the form.</p>
<center>
<button class="open-button" onclick="openForm()" >signup</button>
</center>
<div class="form-popup" id="myForm">
<center>
  <form action="/action_page.php" class="form-container">
    <h1>Login</h1>
    <lable for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" required>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="Phone number"><b>Phone number</b></label>
    <input type="text" placeholder="Enter Phone number" name="phone number" required>

    <button type="submit" class="btn">Login</button>
    <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
  </form>
</center>
</div>

<script>
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
</script>

</body>
</html>
