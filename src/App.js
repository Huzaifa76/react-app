import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./components/About";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      showAlert(null);
    }, 2000);
  };

  const [darkButton, setDarkButton] = useState("Enable Dark Mode");

  useEffect(() => {
    document.body.style.backgroundColor = myStyle.backgroundColor;
    document.body.style.color = myStyle.color;
  }, [myStyle]);

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setDarkButton("Disable Dark Mode");
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install it Now";
      }, 1500);
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setDarkButton("Enable Dark Mode");
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          buttonMode={darkButton}
          darkMode={toggleStyle}
        />
        <Alert alert={alert} />

        <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the Text to Analyze" />}/>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
