import React, { useState } from 'react';
import QRCode from 'qrcode';

function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQrcode(url);
      }
    );
  };

  return (
    <div className=" bg-slate-800 text-white h-[100vh]  text-center">
      <h1 className=" pt-10 pb-10 text-center text-3xl font-semibold md:text-5xl">
        QR Code Generator
      </h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full max-w-sm py-4 px-2 rounded-md mr-3 mb-2 text-black"
      />

      <button
        onClick={GenerateQRCode}
        className="text-gray-900 text-lg cursor-pointer p-2 hover:text-white bg-blue-500 rounded-md hover:bg-blue-700 transition font-semibold ease-out delay-150"
      >
        Generate
      </button>
      {qrcode && (
        <>
          <img
            src={qrcode}
            alt=""
            className="block w-full max-w-xs h-auto my-8 mx-auto"
          />
          <a
            href={qrcode}
            download="qrcode.png"
            className="text-gray-900 text-lg cursor-pointer p-2 hover:text-white bg-blue-500 rounded-md hover:bg-blue-700 transition font-semibold ease-out delay-150"
          >
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
