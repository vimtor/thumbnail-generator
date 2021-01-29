import React, {useRef} from 'react';
import {toPng} from 'html-to-image'
import download from 'downloadjs'
import kittenImage from './kitten.jpg'

import './App.css'

const App = () => {
  const ref = useRef<HTMLDivElement>(null)

  const handleClick = async () => {
    if (!ref.current) {
      return
    }

    const images = Array.from(ref.current.childNodes)
    let index = 1;

    for (const image of images) {
      const dataUrl = await toPng(image as HTMLElement)
      download(dataUrl, `file-${index}.png`)
      index += 1;
    }
  }

  return (
    <main>
      <button onClick={handleClick}>Download</button>
      <div style={{height: 1000}}></div>
      <div ref={ref}>
        {[1, 2, 3, 4].map(number => {
          return (
            <div key={number} className="input-container">
              <img height={200} src={kittenImage}/>
              <p>{number}</p>
            </div>
          )
        })}
      </div>
    </main>
  );
};

export default App;
