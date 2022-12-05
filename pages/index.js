import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [text, setText] = useState();
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Viljami's Homepage</h1>

        <p className={styles.description}>
          If you are not Viljami, why are you here?
        </p>

        <div className={styles.grid}>
          <a
            href="https://portal.office.com/"
            target="_blank"
            className={styles.card}
          >
            <h3>Office &rarr;</h3>
            <p>Click here for office.</p>
          </a>

          <div
            className={styles.card}
            onClick={() => {
              navigator.clipboard.writeText('peltonvi@student.eursc.eu').then(
                () => {
                  console.log('success');
                },
                (e) => {
                  console.error(e);
                }
              );
            }}
          >
            <h3>Copy Email &rarr;</h3>
            <p>Copy Email Address to clipboard!</p>
          </div>

          <a
            href="https://sms.eursc.eu/"
            target="_blank"
            className={styles.card}
          >
            <h3>SMS &rarr;</h3>
            <p>Open sms.</p>
          </a>

          <div
            className={styles.card}
            onClick={() => {
              document.getElementById('fileOpen').click();
            }}
          >
            <input
              id="fileOpen"
              type="file"
              style={{ display: 'none' }}
              onChange={(e) => {
                let fr = new FileReader();
                fr.readAsText(e.target.files[0]);
                fr.addEventListener('load', (data) => {
                  let file = new Blob([fr.result.toString()]);
                  const url = window.URL.createObjectURL(file);
                  const a = document.createElement('a');
                  a.style.display = 'none';
                  a.href = url;
                  // the filename you want
                  a.download = 'output';
                  document.body.appendChild(a);
                  a.click();
                  window.URL.revokeObjectURL(url);
                });
              }}
            />
            <h3>Upload File &rarr;</h3>
            <p>To download as TXT</p>
          </div>
          <div
            className={styles.card}
            onClick={() => {
              document.getElementById('text').click();
            }}
          >
            
            <h3>Create File &rarr;</h3>
            <p>Create a File with Content: {text}</p>
            <input
              id="text"
              type="text"
              className={styles.card}
              style={{ padding: '10px', display: 'inline-block' }}
              onChange={(e) => {
                setText(e.target.value)
              }}
            />
            <button 
              className={styles.card}
              style={{ padding: '10px', display: 'inline-block' }} 
              onClick={ () => {
                let file = new Blob([text]);
                const url = window.URL.createObjectURL(file);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                // the filename you want
                a.download = 'output';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
              }}>
                Create File
            </button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>Viljami's homepage</footer>
    </div>
  );
}
