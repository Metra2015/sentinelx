import React, { useState } from 'react';
import API from '../utils/api';

export default function ScamScannerPage() {
  const [address, setAddress] = useState('');
  const [result, setResult] = useState(null);

  const scan = async () => {
    const res = await API.post('/scanner', { address });
    setResult(res.data);
  };

  return (
    <div>
      <h2>Scam Detector</h2>
      <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Token address" />
      <button onClick={scan}>Scan</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
