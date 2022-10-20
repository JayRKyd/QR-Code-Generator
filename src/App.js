import {useCallback, useState } from 'react';
import './App.css';

function App() {
 const [qrImg, setQrCode] = useState("");
 const [active, setQrCodeStatus] = useState("");

const generateQR = useCallback((formEvent) => {
  formEvent.preventDefault()
  const qrValue = formEvent.target.elements['qr_code'].value.trim()
  if(!qrValue) return
  setQrCode(`http://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`)
  setQrCodeStatus('active')
}, []);

const inputChange = useCallback(event => {
  if(event.target.value === '') setQrCodeStatus('inActive');
}, []);

return (
  <div className={ `wrapper ${active} === 'active' ? "wrapper active" : "wrapper" `}>
    <header>
      <h1>QR Code Generator</h1>
      <p>Paste a URL or enter text to create QR code</p>
    </header>
    <form class="form" onSubmit={generateQR}>
      <input onChange={inputChange} type="text" id="qr_code" name="qr_code" spellCheck="false" placeholder="Enter text or URL" />
      <button type="submit">Generate QR Code</button>
    </form>
    <div class="qr-code">
      <img src={qrImg} alt="qr-code" />
    </div>
  </div>
)
}

export default App;
