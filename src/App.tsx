import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Layout = React.lazy(() => import('./pages/Layout'));
const Asset = React.lazy(() => import('./pages/Asset/tambahAset'));
const Vendor = React.lazy(() => import('./pages/Asset/tambahVendor'));
const DataAset = React.lazy(() => import('./pages/Asset/dataAset'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<DataAset />} />
          <Route path="/tambah-vendor" element={<Vendor />} />
          <Route path="/tambah-aset" element={<Asset />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
