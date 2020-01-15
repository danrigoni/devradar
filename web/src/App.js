import React, { useState, useEffect } from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

// component: isolated block of HTML, CSS, JS, which does not interfere with the rest of the application
// property: information that a Father component passes to the Child component
// state: information held by the component (remember: immutability)

function App() {
  const [latitude, setLatitude] =  useState('')
  const [longitude, setLongitude] =  useState('')


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude)
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []) 

  return (
    <div id="app">
      <aside>
        <strong>Sing up</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">GitHub Username</label>
            <input name="github_username" id="github_username" required />
          </div>


          <div className="input-block">
            <label htmlFor="techs">Techs</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
              type="number" 
              name="latitude" 
              id="latitude" 
              required 
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
            />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
              type="number" 
              name="longitude" 
              id="longitude" 
              required 
              value={longitude} 
              onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          
          <button type="submit">Save</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/59850567?s=460&v=4" alt="Carlos Daniel Rigoni"/>
              <div className="user-info">
                <strong>Carlos Daniel Rigoni</strong>
                <span>Node.js, ReactJS, React Native</span>

              </div>
            </header>
            <p>Passionate about technologies, lover of innovation and automation using Node.JS, React and React Native.</p>
            <a href="https://github.com/danrigoni">Access github profile</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/59850567?s=460&v=4" alt="Carlos Daniel Rigoni"/>
              <div className="user-info">
                <strong>Carlos Daniel Rigoni</strong>
                <span>Node.js, ReactJS, React Native</span>

              </div>
            </header>
            <p>Passionate about technologies, lover of innovation and automation using Node.JS, React and React Native.</p>
            <a href="https://github.com/danrigoni">Access github profile</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/59850567?s=460&v=4" alt="Carlos Daniel Rigoni"/>
              <div className="user-info">
                <strong>Carlos Daniel Rigoni</strong>
                <span>Node.js, ReactJS, React Native</span>

              </div>
            </header>
            <p>Passionate about technologies, lover of innovation and automation using Node.JS, React and React Native.</p>
            <a href="https://github.com/danrigoni">Access github profile</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/59850567?s=460&v=4" alt="Carlos Daniel Rigoni"/>
              <div className="user-info">
                <strong>Carlos Daniel Rigoni</strong>
                <span>Node.js, ReactJS, React Native</span>

              </div>
            </header>
            <p>Passionate about technologies, lover of innovation and automation using Node.JS, React and React Native.</p>
            <a href="https://github.com/danrigoni">Access github profile</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
