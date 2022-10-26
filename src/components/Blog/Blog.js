import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
      <div>
        <div className="blog">
          <h5>What is `cors`?</h5>
          <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request.
          </p>
        </div>
        <div className="blog">
          <h5>
            Why are you using `firebase`? What other options do you have to
            implement authentication?
          </h5>
          <p>
            Firebase Authentication aims to make building secure authentication
            systems easy, while improving the sign-in and onboarding experience
            for end users. It provides an end-to-end identity solution,
            supporting email and password accounts, phone auth, and Google,
            Twitter, Facebook, and GitHub login, and more.FirebaseUI provides a
            customizable, open source, drop-in auth solution that handles the UI
            flows for signing in users.
          </p>
        </div>
        <div className="blog">
          <h5>How does the private route work?</h5>
          <p>
            Private Routes vary based on the Apps, For example, Dashboard, User
            Profile, App Settings, Home etc. In simple words, These routes can
            be accessed only after login. The constraints for Public and Private
            routes are that Public routes should not be accessed after login and
            Private routes should not be accessible before login.
          </p>
        </div>
        <div className="blog">
          <h5>What is Node? How does Node work?</h5>
          <p>
            Node.js is a JavaScript runtime environment that achieves low
            latency and high throughput by taking a “non-blocking” approach to
            serving requests. In other words, Node.js wastes no time or
            resources on waiting for I/O requests to return. In the traditional
            approach to creating web servers, for each incoming request or
            connection the server spawns a new thread of execution or even forks
            a new process to handle the request and send a response.
            Conceptually, this makes perfect sense, but in practice it incurs a
            great deal of overhead.
          </p>
        </div>
      </div>
    );
};

export default Blog;