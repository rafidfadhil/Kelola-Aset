// tambahAset.tsx
import React, { useState } from "react";
import Layout from "../Layout";
import CardInput from "../../components/CardInput";
import Button from "../../components/Button";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TambahAset = () => {
  const [imagePreview, setImagePreview] = useState("");
  const [fileName, setFileName] = useState("");

  const [startDate, setStartDate] = useState<Date | null>(new Date());

  // Handler untuk perubahan tanggal
  const handleDateChange: ReactDatePickerProps["onChange"] = (date: Date) => {
    setStartDate(date);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      if (file.type.startsWith("image")) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target && e.target.result) {
            setImagePreview(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
        setFileName(file.name);
      } else {
        setImagePreview("");
        setFileName("");
        alert("Please select an image file.");
      }
    }
  };

  return (
    <Layout>
      <div className="p-8">
        <div className="bg-gray-800 rounded shadow-lg p-8 text-white">
          <form>
            {/* Bagian Identitas Aset menggunakan CardInput */}
            <CardInput title="Identitas Aset">
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
                  <label htmlFor="kategoriAset" className="block font-medium">
                    Kategori Aset *
                  </label>
                  <select
                    id="kategoriAset"
                    className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-gray-900"
                  >
                    <option>Pilih jenis kategori aset</option>
                    <option value="asetLama">Aset Lama</option>{" "}
                    {/* Opsi untuk aset lama */}
                    <option value="asetBaru">Aset Baru</option>{" "}
                    {/* Opsi untuk aset baru */}
                  </select>
                </div>
              </div>
            </CardInput>
            {/* Bagian Detail Aset menggunakan CardInput */}
            <CardInput title="Detail Aset">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="merkAset" className="block font-medium">
                    Merek Aset *
                  </label>
                  <input
                    type="text"
                    id="merkAset"
                    placeholder="Masukkan Merek Aset"
                    className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="noSeri" className="block font-medium">
                    No. Seri / Kode Produksi
                  </label>
                  <input
                    type="text"
                    id="noSeri"
                    placeholder="Masukkan No. Seri / Kode Produksi"
                    className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="tahunProduksi" className="block font-medium">
                    Tahun Produksi
                  </label>
                  <input
                    type="text"
                    id="tahunProduksi"
                    placeholder="Masukkan tahun produksi"
                    className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="deskripsiAset" className="block font-medium">
                    Deskripsi Aset
                  </label>
                  <input
                    type="text"
                    id="deskripsiAset"
                    placeholder="Masukkan Deskripsi aset"
                    className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-gray-900"
                  />
                </div>
              </div>
            </CardInput>
            <CardInput title="Dokumen Aset">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-12 w-12 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7h18M3 12h18m-9 5h9"
                      />
                    </svg>
                  )}
                </div>

                <div className="ml-4 flex items-center p-2 rounded">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-green-500 hover:text-green-600 border border-green-500 font-medium py-2 px-6 rounded bg-white"
                  >
                    Choose File
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </label>
                  <span className="ml-2 text-sm text-gray-500" id="file-chosen">
                    {imagePreview ? fileName : "No File Chosen"}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Anda bisa mengunggah satu foto utama aset di sini.
              </p>
            </CardInput>
            <CardInput title="Vendor Aset">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="namaVendor" className="block font-medium">
                    Nama Vendor *
                  </label>
                  <select
                    id="namaVendor"
                    className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-gray-900"
                  >
                    <option>Pilih vendor</option>
                    <option value="olahragaMantap">Olahraga Mantap</option>
                    <option value="basketRing">Basket Ring</option>
                  </select>

                  <label
                    htmlFor="jumlahAsetMasuk"
                    className="block font-medium mt-4"
                  >
                    Jumlah Aset Masuk *
                  </label>
                  <input
                    type="text"
                    id="jumlahAsetMasuk"
                    placeholder="Masukkan jumlah aset masuk"
                    className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="infoVendor" className="block font-medium">
                    Informasi vendor / no telepon
                  </label>
                  <input
                    type="text"
                    id="infoVendor"
                    placeholder="Masukkan informasi vendor"
                    className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-gray-900"
                  />

                  <label
                    htmlFor="tglAsetMasuk"
                    className="block font-medium mt-4"
                  >
                    Tgl Aset Masuk *
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-gray-900"
                    dateFormat="MMMM d, yyyy"
                    wrapperClassName="date-picker"
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

export default TambahAset;
