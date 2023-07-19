import React from "react";

export default function Footer() {
  return (
    <footer className="footer mt-5 ">
      <div className="container">
        <p className="text-center">
           {new Date().getFullYear()} A Simple CRUD Web-App Made with Spring Boot and ReactJS<br></br> &copy; Jhonn Vincent Arcipe
        </p>
      </div>
    </footer>
  );
}
