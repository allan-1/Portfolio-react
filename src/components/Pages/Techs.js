import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

function Techs() {
  return (
    <div className="Tech">
      <div className="techstacks">
        <div className="intro">
          Here are a few technologies that I've been working with
        </div>
        <div className="techs">
          <div className="row">
            <div>
              <FaAngleRight /> Javascript
            </div>
            <div>
              <FaAngleRight /> Node.js
            </div>
            <div>
              <FaAngleRight /> React
            </div>
            <div>
              {' '}
              <FaAngleRight /> Wordpress
            </div>
            <div>
              {' '}
              <FaAngleRight /> Dart
            </div>
          </div>
          <div className="row">
            <div>
              <FaAngleRight /> Mongodb
            </div>
            <div>
              <FaAngleRight /> React Native
            </div>
            <div>
              <FaAngleRight /> Electron
            </div>
            <div>
              <FaAngleRight /> Firebase
            </div>
            <div>
              {' '}
              <FaAngleRight /> Flutter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techs;
