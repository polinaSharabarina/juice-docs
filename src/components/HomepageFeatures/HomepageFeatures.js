import React from 'react';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import stackmanlogo from '../../../static/img/stackmanager.png';
import DownloadButton from './DownloadButton/DownloadButton';
import { SMDownloadList } from "../../../static/constants";


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" >
        <div className="row">
          <div className="col">
            <div className="text--center padding-horiz--md">
              <img src={stackmanlogo} className={styles.featureSvg} />
            </div>
            <div className="text--center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <h3> Data Science Stack Manager</h3>
              <DownloadButton list={SMDownloadList} />
              <br />
              <Link to="/downloads">
                All downloads
              </Link>
              <p style={{ width: '60%', paddingTop: '10px' }}>
                The Z by HP Data Science Stack Manager is a one-stop destination for selecting and installing popular data science tools.
              </p>
              <div className={styles.listTextDiv}>
                <ul>
                  <li>
                    Slash configuration times
                  </li>
                  <li>
                    Customize your environment anytime
                  </li>
                  <li>
                    Curate your ideal software stack
                  </li>
                  <li>
                    Leverage top developer tools and containers
                  </li>
                </ul>
              </div>

            </div>
            <div className={styles.buttonDiv}>
              <Link className={styles.textBtn}
                to="/docs/stackmanager/intro">
                <span>Learn More </span>
              </Link>
              <Link className={styles.othertextBtn}
                to="/docs/stackmanager/setup/reqs">
                System Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
