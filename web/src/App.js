import React from 'react';

import './global.css'
import './App.css'

// component: isolated block of HTML, CSS, JS, which does not interfere with the rest of the application
// property: information that a Father component passes to the Child component
// state: information held by the component (remember: immutability)

function App() {


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
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          
          <button type="submit">Save</button>
        </form>
      </aside>

      <main>

      </main>
    </div>
  );
}

export default App;
