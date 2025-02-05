import React, { useState, useEffect } from 'react';
import styles from './DownloadPageFeatures.module.css';
import Link from '@docusaurus/Link';
import { Avatar } from '@mui/material';
import { useHistory } from '@docusaurus/router';
import { Button } from '@mui/material';
import aihelixtile from '../../../static/img/aistudiohelixtile.png';
import stackmanlogo from '../../../static/img/stackmanager.png';
import { SMDownloadList, AIStudioLoadingDownloadList, AIStudioDownloadInfo } from "../../../static/constants";

function DButton({ props }) {

  const history = useHistory();

  return (
    <div>
      <div className={styles.colDownload}>
        <Link to={props.href} className={styles.link} onClick={e => { if (props.disabled) { e.preventDefault(); } }}
          style={{ cursor: props.disabled ? 'default' : 'auto' }} aria-disabled={props.disabled}
        >
          <Button variant="contained" className={styles.downloadBtn}
            sx={{
              width: '440px',
              background: '#410099',
              '&:hover': { backgroundColor: '#5400c7', transform: 'scale(1.05, 1.05) translate3d(0,0,0)' },
              '&:disabled': { backgroundColor: '#410099 !important' },
              color: '#ffffff !important',
              borderStyle: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
            disabled={props.disabled}
            onClick={() => {
              if (props.disabled) { return; }
              history.push(props.url);
              dataLayer.push({ event: 'e_document', documentAction: 'download', documentID: props.documentID, documentType: props.documentType });
            }}
            size="large">
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', minHeight: '70px' }}>
              <div>
                <Avatar className={styles.downloadIcon} sx={{ fontSize: '50px' }} variant='square' src={props.logo} alt={props.logoTitle} />
              </div>
              <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                {<p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}> {props.disabled ? props.info : "Download"}</p>}
                <p style={{ color: '#ffffff', margin: 0, fontSize: '11px' }}>{props.description}</p>
              </div>
            </div>
          </Button>
        </Link>
      </div><br /><br />
    </div>

  );
}

export default function DownloadPageFeatures() {

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
              <img src={aihelixtile} className={styles.aihelixfeatureImgLogo} />
            </div>
            <div className="text--center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <h3> AI Studio </h3><br />
              {encounteredError ? errorElement : AIDownloadInfo.map((ele) =>
                <DButton key={ele.os} props={ele} />
              )}
              <p style={{ width: '69%' }}>
                <span>
                  An easy, simple, and safe way to create, collaborate, and deploy on-premises AI projects.
                </span>
                <br />
                <Link to="https://reinvent.hp.com/AIStudios-Contact-Sales?jumpid=va_us_mu_mk_hc_r12139_aw_x_11824">
                  Contact Sales
                </Link>
              </p>

            </div>
          </div>
          <div className="col">
            <div className="text--center padding-horiz--md">
              <img src={stackmanlogo} className={styles.featureImgLogo} />
            </div>
            <div className="text--center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <h3> Data Science Stack Manager</h3><br />
              {SMDownloadList.map((ele) =>
                <DButton key={ele.title} props={ele} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
