import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import styles from '../../styles/modal.module.css';
import { Links } from '../contents';

class Navmodal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className={styles.backdropStyle}>
        <div className={styles.modalStyle}>
          <div className={styles.logo}>
            <a href="/">{'<Allan/>'}</a>
          </div>
          <div className={styles.navlinks}>
            {Links.map((link) => (
              <li>
                <a href={link.url}>
                  <link.icons /> {link.name}
                </a>
              </li>
            ))}
          </div>

          <div className="footer">
            <button className={styles.closebtn} onClick={this.props.onClose}>
              <FaTimes />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Navmodal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Navmodal;
