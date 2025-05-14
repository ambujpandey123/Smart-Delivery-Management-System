"use client"
import { useState } from 'react';
import axios from 'axios';

export default function PartnersPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    areas: '',
    shiftStart: '',
    shiftEnd: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/partners', {
        name: form.name,
        email: form.email,
        phone: form.phone,
        areas: form.areas.split(',').map(area => area.trim()),
        shift: {
          start: form.shiftStart,
          end: form.shiftEnd
        },
        status: 'active',
        currentLoad: 0,
        metrics: {
          rating: 5,
          completedOrders: 0,
          cancelledOrders: 0
        }
      });
      setMessage('Partner added successfully!');
      setForm({ name: '', email: '', phone: '', areas: '', shiftStart: '', shiftEnd: '' });
    } catch (err) {
      setMessage('Error adding partner');
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Delivery Partner</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
        <input
          type="text"
          name="areas"
          placeholder="Service Areas (comma-separated)"
          value={form.areas}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
        <div className="flex gap-2">
          <input
            type="time"
            name="shiftStart"
            value={form.shiftStart}
            onChange={handleChange}
            className="w-1/2 border p-2"
            required
          />
          <input
            type="time"
            name="shiftEnd"
            value={form.shiftEnd}
            onChange={handleChange}
            className="w-1/2 border p-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Partner
        </button>
      </form>
      {message && <p className="mt-4 text-red-400">{message}</p>}
    </div>
  );
}
