import React, { useState, useEffect } from 'react';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import stackmanlogo from '../../../static/img/stackmanager.png';
import aihelixtile from '../../../static/img/aistudiohelixtile.png'
import DownloadButton from './DownloadButton/DownloadButton';
import { SMDownloadList, AIStudioLoadingDownloadList, AIStudioDownloadInfo } from "../../../static/constants";


export default function HomepageFeatures() {

  const [AIDownloadInfo, setAIDownloadInfo] = useState(AIStudioLoadingDownloadList);
  const [encounteredError, setError] = useState(false);

  const errorElement = <div className={styles.downloadBtnError}>Error fetching download information. Please refresh or try again later.</div>

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await AIStudioDownloadInfo();
        console.log(fetchedData);
        setAIDownloadInfo(fetchedData);
      }
      catch {
        setError(true);
      }

    };
    fetchData();
  }, []);


  return (
    <section className={styles.features}>
      <div className="container" >
        <div className="row">

          <div className="col">
            <div className="text--center padding-horiz--md">
              <img src={aihelixtile} className={styles.aihelixfeatureSvg} />
            </div>
            <div className="text--center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <h3> AI Studio </h3>
              {encounteredError ? errorElement : <DownloadButton list={AIDownloadInfo} />}
              <br />
              <Link to="/downloads">
                All downloads
              </Link>
              <p style={{ width: '69%', paddingTop: '10px' }}>
                An easy, simple, and safe way to create, collaborate, and deploy on-premises AI projects.
              </p>
              <div className={styles.buttonDiv}>
                <Link className={styles.textBtn} style={{ margin: 0 }} to="https://reinvent.hp.com/AIStudios-Contact-Sales?jumpid=va_us_mu_mk_hc_r12139_aw_x_11824">
                  <span>Contact Sales</span>
                </Link>
              </div>

              <p style={{ width: '69%', paddingTop: '10px' }}>

              </p>
              <div className={styles.listTextDiv}>
                <ul>
                  <li>
                    Optimize GPU
                  </li>
                  <li>
                    Centralize projects
                  </li>
                  <li>
                    Jump start with templates
                  </li>
                  <li>
                    Collaborate across devices
                  </li>
                  <li>
                    Keep data, logic, and IP private
                  </li>
                </ul>
              </div>

            </div>
            <div className={styles.buttonDiv}>
              <Link className={styles.textBtn}
                to="/docs/aistudio/overview">
                <span>Learn More </span>
              </Link>
              <Link className={styles.othertextBtn}
                to="/docs/aistudio/setup/system-requirements">
                System Requirements
              </Link>
            </div>
          </div>
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
