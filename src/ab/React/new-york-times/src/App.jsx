import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <i className="bx bx-dots-horizontal-rounded" />
            </li>
            <li>
              <i className="bx bx-transfer-alt bx-rotate-90" />
            </li>
            <li>
              <i className="bx bxs-moon" />
            </li>
          </ul>
        </nav>
        <header>
          <div>
            <i className="bx bx-search-alt" />
            <i className="bx bxs-bell" />
          </div>
          <h1>The New York Times</h1>
          <div>
            <button>SIGN IN</button>
            <button>SUBSCRIBE</button>
          </div>
        </header>
        <nav>
          <div>
            <p>Thursday</p>
            <time className="date">May 21,2020</time>
          </div>
          <ul>
            <li>
              <a href="#">World</a>
            </li>
            <li>
              <a href="#">Politics</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Opinion</a>
            </li>
            <li>
              <a href="#">Tech</a>
            </li>
            <li>
              <a href="#">Science</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
            <li>
              <a href="#">Arts</a>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="#">Style</a>
            </li>
            <li>
              <a href="#">Food</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Magazine</a>
            </li>
          </ul>
          <i className="bx bx-dots-horizontal-rounded" />
        </nav>
        <nav>
          <h2>Business</h2>
          <ul>
            <li>
              <a href="#">Tech</a>
            </li>
            <li>
              <a href="#">Econ</a>
            </li>
            <li>
              <a href="#">Media</a>
            </li>
            <li>
              <a href="#">Money</a>
            </li>
            <li>
              <a href="#">DealBook</a>
            </li>
          </ul>
        </nav>
        <section>
          <div>
            <article>
              <img
                alt="yellow background and a people jumped"
                src="img/article1.png"
              />
              <div className="Subtitle">
                <span>TECH FIX</span>
                <time className="date">May 20,2020</time>
              </div>
              <h3>Everything You Need to Know About Slow Internet Speeds</h3>
              <p>
                Our Crummy connections are the biggest tech headache in the
                pandemic. Here's a comprehensive guide to do about them.
              </p>
              <a className="links" href="#">
                Continue Reading
              </a>
            </article>
            <article>
              <h4>Latest News</h4>
              <div className="Subtitle">
                <span>The upshot</span>
                <time className="date">May 19, 2020</time>
              </div>
              <h5>
                A Wave of Small Business Closures Is on the Way. Can Washington
                Stop It?
              </h5>
              <a className="links" href="#">
                Continue Reading
              </a>
              <div className="Subtitle">
                <span>NEW ANALYSIS</span>
                <time className="date">May 19, 2020</time>
              </div>
              <h5>
                Coronavirus Shut Down the 'Experience Economy.' Can It Come
                Back?
              </h5>
              <a className="links" href="#">
                Continue Reading
              </a>
              <br />
              <i className="bx bx-circle icon" />
              <i className="bx bxs-circle icon" />
              <i className="bx bxs-circle icon" />
            </article>
            <article>
              <h4>Fast Forward</h4>
              <div>
                <div>
                  <h6>
                    Another Grim Tally of U.S. Unemployement Is Exoected: Live
                    Business Updates
                  </h6>
                  <img
                    alt="an alley somewhere in the world"
                    src="img/fast1.png"
                  />
                  <p className="subscript">
                    Live stock Market News Darling the Coronavirus Pandemic
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h6>
                    Another Grim Tally of U.S. Unemployement Is Exoected: Live
                    Business Updates
                  </h6>
                  <img
                    alt="a building located in the United States"
                    src="img/fast2.png"
                  />
                  <p className="subscript">
                    Live stock Market News Darling the Coronavirus Pandemic
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h6>
                    Another Grim Tally of U.S. Unemployement Is Exoected: Live
                    Business Updates
                  </h6>
                  <img
                    alt="thoughtful journalist about the topic being talked about"
                    src="img/fast3.png"
                  />
                  <p className="subscript">
                    Live stock Market News Darling the Coronavirus Pandemic
                  </p>
                </div>
              </div>
              <a className="links" href="#">
                Show All
              </a>
            </article>
          </div>
        </section>
        <section>
          <nav>
            <div>
              <p>MARKET SNAPSHOT</p>
              <time className="date">6:07 AM</time>
            </div>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Americas</a>
              </li>
              <li>
                <a href="#">Europe</a>
              </li>
              <li>
                <a href="#">Asia</a>
              </li>
              <li>
                <a href="#">Commodities</a>
              </li>
            </ul>
          </nav>
        </section>
      </body>
    </>
  );
}

export default App;
