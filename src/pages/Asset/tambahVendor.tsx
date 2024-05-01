// tambahAset.tsx
import React, { useState } from "react";
import Layout from "../Layout";
import CardInput from "../../components/CardInput";
import Button from "../../components/Button";

const TambahVendor = () => {
  return (
    <Layout>
      <div className="p-8">
        <div className="bg-gray-800 rounded shadow-lg p-8 text-white">
          <form>
            <CardInput title="Identitas Vendor">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="namaAset" className="block font-medium">
                    Nama Aset *
                  </label>
                  <input
                    type="text"
                    id="namaAset"
                    placeholder="Masukkan Nama Aset"
                    className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-medium">
                    No Telpon *
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Masukkan No Telpon"
                    className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-gray-900"
                  />
                </div>
              </div>
            </CardInput>

            <CardInput title="Detail Aset">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="alamatVendor" className="block font-medium">
                    Alamat Vendor
                  </label>
                  <input
                    type="text"
                    id="alamatVendor"
                    placeholder="Masukkan Alamat Vendor"
                    className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="jenisVendor" className="block font-medium">
                    Jenis Vendor
                  </label>
                  <input
                    type="text"
                    id="jenisVendor"
                    placeholder="Masukkan Jenis Vendor"
                    className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-gray-900"
                  />
                </div>
              </div>
            </CardInput>

            <div className="flex justify-end mt-4">
              <Button label="Save" onClick={() => {}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default TambahVendor;
