import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [text, setText] = useState();
  // const [format, setFormat] = useState('png');
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
            href="https://williamplays0402.com/"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText('WilliamPlays0402');
              let w = window.open(
                'https://williamplays0402.com/',
                '_blank',
                'popup'
              );
              // setTimeout(() => {
              window.focus();
              w.close();
              // }, 100);
            }}
            target="_blank"
            className={styles.card}
          >
            <h3>Allow access to clipboard &rarr;</h3>
            <p>
              Opens homepage and tries to write to clipboard. Then closes the
              tab.
            </p>
          </a>
          {/* <div
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
            <h3>Copy School Email &rarr;</h3>
            <p>Copy Email Address to clipboard!</p>
          </div> */}
          <a
            href="https://portal.office.com/"
            target="_blank"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText('peltonvi@student.eursc.eu');
              let w = window.open('https://portal.office.com/', '_blank');
            }}
            className={styles.card}
          >
            <h3>Office &rarr;</h3>
            <p>Click here for office.</p>
          </a>
          <a
            href="https://williamplays0402.github.io/homework-tracker/"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText('peltonen.vili@gmail.com');
              window.open(
                'https://williamplays0402.github.io/homework-tracker/',
                '_blank'
              );
            }}
            target="_blank"
            className={styles.card}
          >
            <h3>Homework &rarr;</h3>
            <p>Open Homework tracker (sets username to clipboard).</p>
          </a>
          <a
            href="https://sms.eursc.eu/"
            target="_blank"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText('peltonvi@student.eursc.eu');
              let w = window.open('https://sms.eursc.eu/', '_blank');
            }}
            className={styles.card}
          >
            <h3>SMS &rarr;</h3>
            <p>Open sms.</p>
          </a>
          <a
            href="https://scratch.mit.edu/"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText('WilliamPlays0402');
              window.open('https://scratch.mit.edu/', '_blank');
            }}
            target="_blank"
            className={styles.card}
          >
            <h3>Scratch &rarr;</h3>
            <p>Open SCRATCH (sets username to clipboard).</p>
          </a>
          <a
            href="https://stackblitz.com/"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText('me@williamplays0402.com');
              window.open('https://stackblitz.com/', '_blank');
            }}
            target="_blank"
            className={styles.card}
          >
            <h3>Stackblitz &rarr;</h3>
            <p>Open Stackblitz (sets email to clipboard).</p>
          </a>
          <a
            href="https://github.com/login/"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText('me@williamplays0402.com');
              window.open('https://github.com/login/', '_blank');
            }}
            target="_blank"
            className={styles.card}
          >
            <h3>Github &rarr;</h3>
            <p>Open Github (sets email to clipboard).</p>
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
                  a.download = 'output.txt';
                  document.body.appendChild(a);
                  a.click();
                  alert(
                    'Your file is downloading. Make sure not to save using NOTEPAD. Use NP++'
                  );
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
                setText(e.target.value);
              }}
            />
            <button
              className={styles.card}
              style={{ padding: '10px', display: 'inline-block' }}
              onClick={() => {
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
              }}
            >
              Create File
            </button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>Viljami's homepage</footer>
    </div>
  );
}
