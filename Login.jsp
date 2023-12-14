<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
  <title>Login </title>
<link rel="stylesheet" type="text/css" href="Stylesheet.css">
<script src="javascript.js"></script>

</head>
<h1 class="welcome-header">
  <img src="uca.jpeg" alt="UCA" class="header-image">
  Welcome To International student resources
</h1>


  <div class="login-container">
    <form id="loginForm">
      
      <h2 class="title">Login</h2>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button type="submit">Login</button>
      
    </form>
  </div>

 
</body>
</html>