import React from 'react';
import Typical from 'react-typical';
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className='profile-menu'>
          <div className='Profile-name'>
            <h1 className='name-cont'>
              Ranjha
            </h1>
          </div>
          <div className='menu-container'>
            <ul>
              <li>
                Home
              </li>
              <li>
                About
              </li>
              <li>
                Resume
              </li>
              <li>
                ContactMe
              </li>
            </ul>

          </div>

        </div>
      <div className="profile-parent">

        <div className="profile-details">
          <div className="colz">
            <div className='colz-icon'>
            <a href="google.com">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="google.com">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="google.com">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="google.com">
              <i className="fa fa-github "></i>
            </a>
            </div>
            
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {''}
              Hello, I'M <span className="highlighted-text">Ranjha</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {' '}
              <h1>
                {' '}
                <Typical
                  loop={Infinity}
                  steps={[
                    'Ethusiastic Dev ',
                    2000,
                    'Full Stack Developer',
                    2000,
                    'MERN Stack Dev',
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'>
                {""}
                Hire Me{" "}

            </button>
            <a href='RanjhaResume.pdf' download="Ranjha RanjhaResume.pdf">
                <button className='btn highlighted-btn'>
                    Get Resume
                </button>
            </a>

          </div>
        </div>
        <div className='profile-picture'>
            <div className='profile-picture-background'>

            </div>

        </div>

      </div>
      
    </div>
    
  );
}
