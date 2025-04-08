import React, { useState, useEffect } from 'react';
import API from '../utils/api';

export default function TradesPage() {
  const [trades, setTrades] = useState([]);
  const [symbol, setSymbol] = useState('');
  const [qty, setQty] = useState('');
  const [price, setPrice] = useState('');

  const fetchTrades = async () => {
    const res = await API.get('/trades');
    setTrades(res.data);
  };

  const addTrade = async () => {
    await API.post('/trades', { symbol, quantity: Number(qty), price: Number(price) });
    setSymbol(''); setQty(''); setPrice('');
    fetchTrades();
  };

  useEffect(() => { fetchTrades(); }, []);

  return (
    <div>
      <h2>Trades</h2>
      <input value={symbol} onChange={e => setSymbol(e.target.value)} placeholder="Symbol" />
      <input value={qty} onChange={e => setQty(e.target.value)} placeholder="Qty" />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
      <button onClick={addTrade}>Add</button>
      <ul>
        {trades.map(t => (
          <li key={t.id}>{t.symbol}: {t.quantity} @ {t.price}</li>
        ))}
      </ul>
    </div>
  );
}
