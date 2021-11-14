import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
//? function 
  const getPreferedTheme = () => {
    //* save the theme to local storage and get it back to the theme state
    let theme = "light-theme";

    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    }
    return theme;
  };

  //? state
  const [theme, setTheme] = useState(getPreferedTheme());

  //* whenever theme changes, run the function and save the prefered theme to local storage
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  //? function
  const changeTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  //? main return
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Overreacted</h1>
          <button className="btn" onClick={changeTheme}>
            theme
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
