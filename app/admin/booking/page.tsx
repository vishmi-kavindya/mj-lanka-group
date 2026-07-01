'use client';
import { useEffect, useState } from 'react';

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('/api/booking') // අපේ අර GET API එකට කතා කරනවා
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Bookings</h1>
      <div className="bg-white rounded-2xl shadow p-6">
       <table className="w-full text-left border-collapse">
  <thead>
    <tr className="bg-gray-100">
      <th className="p-4 border-b">Name</th>
      <th className="p-4 border-b">Phone</th>
      <th className="p-4 border-b">Date</th>
      <th className="p-4 border-b">Time</th>
      <th className="p-4 border-b">Email</th>
      <th className="p-4 border-b">Asset Type</th>
    </tr>
  </thead>
  <tbody>
    {bookings.map((b: any) => (
      <tr key={b._id} className="hover:bg-gray-50 border-b">
        <td className="p-4">{b.fullName}</td>
        <td className="p-4">{b.phone}</td>
        <td className="p-4">{b.preferredDate || "N/A"}</td>
        <td className="p-4">{b.preferredTime || "N/A"}</td>
        <td className="p-4">{b.email}</td>
        <td className="p-4">{b.assetType || "N/A"}</td>
      </tr>
    ))}
  </tbody>
</table>
      </div>
    </div>
  );
}