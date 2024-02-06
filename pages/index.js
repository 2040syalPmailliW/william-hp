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
          <a
            href="https://www.figma.com/login/"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText('me@williamplays0402.com');
              window.open('https://www.figma.com/login', '_blank');
            }}
            target="_blank"
            className={styles.card}
          >
            <h3>Figma &rarr;</h3>
            <p>Open Figma (sets email to clipboard).</p>
          </a>
          <a
            href="https://monkeytype.com/"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(
                '{"theme":"rainbow_trail","themeLight":"serika","themeDark":"serika_dark","autoSwitchTheme":false,"customTheme":false,"customThemeColors":["#323437","#e2b714","#e2b714","#646669","#2c2e31","#d1d0c5","#ca4754","#7e2a33","#ca4754","#7e2a33"],"favThemes":[],"showKeyTips":true,"showLiveWpm":true,"showTimerProgress":true,"smoothCaret":"medium","quickRestart":"tab","punctuation":false,"numbers":false,"words":10,"time":30,"mode":"words","quoteLength":[1],"language":"english","fontSize":4,"freedomMode":false,"difficulty":"normal","blindMode":false,"quickEnd":true,"caretStyle":"default","paceCaretStyle":"default","flipTestColors":false,"layout":"qwertz","funbox":"none","confidenceMode":"off","indicateTypos":"below","timerStyle":"mini","colorfulMode":false,"randomTheme":"off","timerColor":"main","timerOpacity":"1","stopOnError":"off","showAllLines":false,"keymapMode":"react","keymapStyle":"staggered","keymapLegendStyle":"dynamic","keymapLayout":"overrideSync","keymapShowTopRow":"always","fontFamily":"Roboto_Mono","smoothLineScroll":true,"alwaysShowDecimalPlaces":false,"alwaysShowWordsHistory":true,"singleListCommandLine":"manual","capsLockWarning":true,"playSoundOnError":"1","playSoundOnClick":"4","soundVolume":"1.0","startGraphsAtZero":true,"showOutOfFocusWarning":true,"paceCaret":"off","paceCaretCustomSpeed":100,"repeatedPace":true,"pageWidth":"125","accountChart":["on","on","on","on"],"minWpm":"off","minWpmCustomSpeed":100,"highlightMode":"letter","typingSpeedUnit":"wpm","ads":"off","hideExtraLetters":false,"strictSpace":false,"minAcc":"off","minAccCustom":90,"showLiveAcc":true,"showLiveBurst":true,"monkey":false,"repeatQuotes":"typing","oppositeShiftMode":"off","customBackground":"","customBackgroundSize":"cover","customBackgroundFilter":[0,1,1,1,1],"customLayoutfluid":"qwerty#dvorak#colemak","monkeyPowerLevel":"off","minBurst":"off","minBurstCustomSpeed":100,"burstHeatmap":false,"britishEnglish":true,"lazyMode":false,"showAverage":"both","tapeMode":"letter"}'
              );
              window.open('https://monkeytype.com/', '_blank');
            }}
            target="_blank"
            className={styles.card}
          >
            <h3>Monkeytype &rarr;</h3>
            <p>Open Monkeytype (sets settings to clipboard).</p>
          </a>
          <a
            href="https://www.google.com/login/"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText('schoolviljamipeltonen@gmail.com');
              window.open(
                'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&hl=de&ifkv=ASKXGp3IkyOgTgaNQlapFwwyo9Scc_AItSuRxKKIeNWKExHUCX8fYETa95pEf-4fvtfYB23i766hlg&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1611431571%3A1707221323897956&theme=glif',
                '_blank'
              );
            }}
            target="_blank"
            className={styles.card}
          >
            <h3>Google &rarr;</h3>
            <p>Open Google (sets email to clipboard).</p>
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
