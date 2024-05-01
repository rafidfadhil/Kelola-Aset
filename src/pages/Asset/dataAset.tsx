import React, { useState } from "react";
import Layout from "../Layout";
import Button from "../../components/Button";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DataVendor = () => {
  // Data aset sementara
  const assets = [
    {
      foto: "https://placehold.jp/150x150.png",
      namaAset: "Bola Futsal",
      tanggalMasuk: "Feb 21, 2024",
      namaVendor: "Olahraga Mantap",
      kategori: "Aset Lama",
      jumlah: 20,
    },
    {
      foto: "https://placehold.jp/150x150.png",
      namaAset: "Bola Basket",
      tanggalMasuk: "Feb 24, 2024",
      namaVendor: "Joko Sport Olahraga",
      kategori: "Aset Baru",
      jumlah: 30,
    },
    {
        foto: "https://placehold.jp/150x150.png",
        namaAset: "Bola Basket",
        tanggalMasuk: "Feb 24, 2024",
        namaVendor: "Joko Sport Olahraga",
        kategori: "Aset Baru",
        jumlah: 30,
      },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = assets.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(assets.length / itemsPerPage);

  const changePage = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <div className="p-8">
        <div className="bg-gray-800 rounded shadow-lg p-8 text-white">
          <div className="flex justify-between my-4">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow bg-gray-50"
                placeholder="Search"
              />{" "}
              {/* Input untuk pencarian */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <Button label="Tambah Aset" onClick={() => {}} />
          </div>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Foto Aset
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama Aset
                </th>
                <th scope="col" className="px-6 py-3">
                  Tgl Aset Masuk
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama Vendor
                </th>
                <th scope="col" className="px-6 py-3">
                  Kategori
                </th>
                <th scope="col" className="px-6 py-3">
                  Jumlah Aset
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">
                    <img
                      src={asset.foto}
                      alt={asset.namaAset}
                      style={{ width: "80px", height: "50px" }} // Set width and height
                    />
                  </td>
                  <td className="px-6 py-4 text-white">{asset.namaAset}</td>
                  <td className="px-6 py-4 text-white">{asset.tanggalMasuk}</td>
                  <td className="px-6 py-4 text-white">{asset.namaVendor}</td>
                  <td className="px-6 py-4 text-white">
                    <div className="badge badge-outline">{asset.kategori} </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="badge badge-accent badge-outline">
                      {asset.jumlah}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-red-500 hover:text-red-700 mr-8">
                      <FontAwesomeIcon icon={faTrashAlt} /> {/* Delete icon */}
                    </button>
                    <button className="text-white hover:text-gray-300">
                      <FontAwesomeIcon icon={faPencilAlt} /> {/* Edit icon */}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center">
              <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage <= 1}
                className="mr-2 bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
            <div>
              <span>
                Page {currentPage} of {totalPages}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DataVendor;
