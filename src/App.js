import "./App.css";
import Project from "./components/Project";
import Navbar from "./components/navbar";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="vertical-icon">
          <svg 
            className="social-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-name="&lt;Group&gt;"
            >
              <rect
                width="21"
                height="21"
                x="1.5"
                y="1.5"
                data-name="&lt;Path&gt;"
                rx="5.48"
                ry="5.48"
              />
              <circle cx="12" cy="12" r="5.5" data-name="&lt;Path&gt;" />
              <circle cx="18" cy="5" r=".5" data-name="&lt;Path&gt;" />
            </g>
          </svg>
          <svg
            className="social-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-name="&lt;Group&gt;"
            >
              <path
                d="M12 .5a11.5 11.5 0 0 0-9.54 17.92L.5 23.5l5.23-1.87A11.5 11.5 0 1 0 12 .5Z"
                data-name="&lt;Path&gt;"
              />
              <path
                d="M9.5 14.5c1.3 1.3 4.17 3 5.5 3a2.53 2.53 0 0 0 2.5-2v-1s-1.23-.6-2-1-2 1-2 1A6.52 6.52 0 0 1 11 13a6.52 6.52 0 0 1-1.5-2.5s1.4-1.23 1-2-1-2-1-2h-1a2.53 2.53 0 0 0-2 2.5c0 1.33 1.7 4.2 3 5.5Z"
                data-name="&lt;Path&gt;"
              />
            </g>
          </svg>
          <svg
            className="social-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g data-name="&lt;Group&gt;">
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 3.5a13.62 13.62 0 0 0 10 5c-.26-1.06-.28-3.94 1.74-5.14a5.24 5.24 0 0 1 2.76-.86A4.65 4.65 0 0 1 19.91 4a10.5 10.5 0 0 0 3-1.14 4.57 4.57 0 0 1-2 2.57 8.77 8.77 0 0 0 2.66-.66 9.3 9.3 0 0 1-2.38 2.43c.71 6.37-5 14.29-13.12 14.29a14.76 14.76 0 0 1-7.5-2 9.3 9.3 0 0 0 7-2 5.82 5.82 0 0 1-5-3.5c1 .32 1.95.48 2.5 0A5.41 5.41 0 0 1 1 9a3.51 3.51 0 0 0 2.5 1A5 5 0 0 1 2 3.5Z"
                data-name="&lt;Path&gt;"
              />
            </g>
          </svg>
          <svg
            className="social-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g data-name="&lt;Group&gt;">
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 1.5H3A1.5 1.5 0 0 0 1.5 3v18A1.5 1.5 0 0 0 3 22.5h8.5v-8h-2v-3h2v-2a4 4 0 0 1 4-4h3v3h-3a1 1 0 0 0-1 1v2h4l-.5 3h-3.5v8H21a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 21 1.5Z"
                data-name="&lt;Path&gt;"
              />
            </g>
          </svg>
          <svg
            className="social-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-name="&lt;Group&gt;"
            >
              <circle cx="6" cy="6" r="1.5" data-name="&lt;Path&gt;" />
              <path d="M4.5 9.5h3v10h-3z" data-name="&lt;Rectangle&gt;" />
              <path
                d="M15.5 9.5a3.6 3.6 0 0 0-3 1.5V9.5h-3v10h3V14c0-1.66.89-2.5 2-2.5s2 .84 2 2.5v5.5h3V14c0-2.73-1.5-4.5-4-4.5Z"
                data-name="&lt;Path&gt;"
              />
              <rect
                width="21"
                height="21"
                x="1.5"
                y="1.5"
                data-name="&lt;Rectangle&gt;"
                rx="1.5"
                ry="1.5"
              />
            </g>
          </svg>
          <svg
            className="social-icon"
            stroke="#cccccc"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g data-name="Github 1">
              <g data-name="&lt;Group&gt;">
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 .5A11.5 11.5 0 0 0 .5 12a11.82 11.82 0 0 0 9 11.5v-3h-1c-2.62 0-3.54-4-5-4 2.79 0 3.33 2 5 2a.89.89 0 0 0 1-1v-.35c-2.91-.82-5-3-5-5.65a5.26 5.26 0 0 1 1.57-3.66A3.16 3.16 0 0 1 6.5 4.5 5.26 5.26 0 0 1 8.88 6a9.14 9.14 0 0 1 6.24 0 5.26 5.26 0 0 1 2.38-1.5 3.16 3.16 0 0 1 .43 3.34 5.26 5.26 0 0 1 1.57 3.66c0 2.74-2.29 5-5.42 5.76a4.68 4.68 0 0 1 .42 2.24v4a11.82 11.82 0 0 0 9-11.5A11.5 11.5 0 0 0 12 .5Z"
                  data-name="&lt;Path&gt;"
                />
              </g>
            </g>
          </svg>
          <div className="social-icon-vl"></div>
        </div>
        <div className="App">
          <Profile />
          <About />
          <Project />
          <Contact />
        </div>

        <aside className="vertcal-content-end">
          <p className="mail-info">patidarmukesh123@gmail.com</p>
          <div className="social-icon-vl-end"></div>
        </aside>
      </div>
    </>
  );
}

export default App;
