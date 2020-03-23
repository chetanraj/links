import React from 'react';

//! Components
import Link from './components/Link';

//! CSS
import './App.css';

function App() {
  return (
    <>
      <img class="user-thumbnail" alt="Chetan Raj" src="https://avatars3.githubusercontent.com/u/1386629?s=460&amp;v=4"></img>
      <div className="links">
        <Link href="https://chetanraj.in" label="My portfolio" />
        <Link href="https://snpt.netlify.com/" label="Snpt" />
        <Link href="https://www.instagram.com/javascriptessentials/" label="Instagram [JavaScript Essentials]" />
        <Link href="https://medium.com/@chtn" label="Medium" />
        <Link href="https://twitter.com/chetan_raj" label="Twiiter" />
        <Link href="https://medium.com/jsessentials/build-a-restful-api-using-hapijs-and-mongoose-4903590c5663" label="Build a RESTful API using hapijs and mongoose" />
        <Link href="https://medium.com/jsessentials/how-gridsome-works-with-github-pages-aeacaf6f3622" label="How Gridsome works with GitHub Pages" />
        <Link href="https://www.instagram.com/chetzdesigns/" label="Instagram [Web Design]" />
      </div>
    </>
  );
}

export default App;
