import React, { useEffect, useState } from 'react';
import API from '../utils/api';

export default function AlertsPage() {
  const [alerts, setAlerts] = useState([]);
  const [symbol, setSymbol] = useState('');
  const [target, setTarget] = useState('');

  const fetchAlerts = async () => {
    const res = await API.get('/alerts');
    setAlerts(res.data);
  };

  const createAlert = async () => {
    await API.post('/alerts', { symbol, targetPrice: Number(target) });
    setSymbol('');
    setTarget('');
    fetchAlerts();
  };

  const deleteAlert = async (id) => {
    await API.delete(`/alerts/${id}`);
    fetchAlerts();
  };

  useEffect(() => { fetchAlerts(); }, []);

  return (
    <div>
      <h2>Alerts</h2>
      <input value={symbol} onChange={e => setSymbol(e.target.value)} placeholder="Symbol" />
      <input value={target} onChange={e => setTarget(e.target.value)} placeholder="Target Price" />
      <button onClick={createAlert}>Add Alert</button>
      <ul>
        {alerts.map(a => (
          <li key={a.id}>
            {a.symbol} @ {a.targetPrice}
            <button onClick={() => deleteAlert(a.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
