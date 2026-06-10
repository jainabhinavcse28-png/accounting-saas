"use client";

import { useEffect, useState } from "react";

export default function VendorsPage() {
  const [vendors, setVendors] =
    useState<any[]>([]);

  const [vendorName, setVendorName] =
    useState("");

  const [companyName, setCompanyName] =
    useState("");

  const [vendorEmail, setVendorEmail] =
    useState("");

  const [vendorPhone, setVendorPhone] =
    useState("");

  const [vendorGst, setVendorGst] =
    useState("");

  const [vendorAddress, setVendorAddress] =
    useState("");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [editIndex, setEditIndex] =
    useState<number | null>(null);

  useEffect(() => {
    const savedVendors =
      localStorage.getItem(
        "vendors"
      );

    if (savedVendors) {
      setVendors(
        JSON.parse(savedVendors)
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "vendors",
      JSON.stringify(vendors)
    );
  }, [vendors]);

  const handleAddVendor = () => {
    if (
      !vendorName ||
      !companyName ||
      !vendorEmail
    ) {
      alert(
        "Please fill required fields"
      );
      return;
    }

    const newVendor = {
      name: vendorName,
      company: companyName,
      email: vendorEmail,
      phone: vendorPhone,
      gst: vendorGst,
      address: vendorAddress,
    };

    if (editIndex !== null) {
      const updatedVendors = [
        ...vendors,
      ];

      updatedVendors[
        editIndex
      ] = newVendor;

      setVendors(
        updatedVendors
      );

      setEditIndex(null);
    } else {
      setVendors([
        ...vendors,
        newVendor,
      ]);
    }

    setVendorName("");
    setCompanyName("");
    setVendorEmail("");
    setVendorPhone("");
    setVendorGst("");
    setVendorAddress("");
  };

  const handleDeleteVendor = (
    indexToDelete: number
  ) => {
    const confirmDelete =
      confirm(
        "Are you sure you want to delete this vendor?"
      );

    if (!confirmDelete) {
      return;
    }

    const updatedVendors =
      vendors.filter(
        (_, index) =>
          index !== indexToDelete
      );

    setVendors(
      updatedVendors
    );
  };

  const handleEditVendor = (
    indexToEdit: number
  ) => {
    const vendor =
      vendors[indexToEdit];

    setVendorName(vendor.name);
    setCompanyName(
      vendor.company
    );
    setVendorEmail(vendor.email);
    setVendorPhone(vendor.phone);
    setVendorGst(vendor.gst);
    setVendorAddress(
      vendor.address
    );

    setEditIndex(indexToEdit);
  };

  const filteredVendors =
    vendors.filter(
      (vendor) =>
        vendor.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        vendor.company
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100 p-8">

      <div className="mb-8 rounded-3xl bg-gradient-to-r from-slate-800 to-indigo-900 p-8 text-white shadow-2xl">
        <h1 className="text-4xl font-bold">
          Vendor Management
        </h1>

        <p className="mt-2 text-slate-300">
          Manage suppliers and
          business vendors
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">

        <div className="rounded-3xl bg-gradient-to-r from-slate-700 to-indigo-800 p-6 text-white shadow-xl">
          <h2 className="text-lg font-medium">
            Total Vendors
          </h2>

          <p className="mt-2 text-4xl font-bold">
            {vendors.length}
          </p>
        </div>

      </div>

      <div className="mb-8 rounded-3xl bg-white p-6 shadow-2xl">

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {editIndex !== null
              ? "Edit Vendor"
              : "Add Vendor"}
          </h2>

          <button
            onClick={
              handleAddVendor
            }
            className="rounded-xl bg-gradient-to-r from-slate-700 to-indigo-800 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            {editIndex !== null
              ? "Update Vendor"
              : "Add Vendor"}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Vendor Name"
            value={vendorName}
            onChange={(e) =>
              setVendorName(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black shadow-sm outline-none focus:border-indigo-500"
          />

          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) =>
              setCompanyName(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black shadow-sm outline-none focus:border-indigo-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={vendorEmail}
            onChange={(e) =>
              setVendorEmail(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black shadow-sm outline-none focus:border-indigo-500"
          />

          <input
            type="text"
            placeholder="Phone"
            value={vendorPhone}
            onChange={(e) =>
              setVendorPhone(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black shadow-sm outline-none focus:border-indigo-500"
          />

          <input
            type="text"
            placeholder="GSTIN"
            value={vendorGst}
            onChange={(e) =>
              setVendorGst(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black shadow-sm outline-none focus:border-indigo-500"
          />

          <input
            type="text"
            placeholder="Address"
            value={vendorAddress}
            onChange={(e) =>
              setVendorAddress(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black shadow-sm outline-none focus:border-indigo-500"
          />

        </div>
      </div>

      <input
        type="text"
        placeholder="🔍 Search Vendor"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(
            e.target.value
          )
        }
        className="mb-6 w-full rounded-2xl border border-gray-300 bg-white p-4 text-black shadow-lg outline-none focus:border-indigo-500"
      />

      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">

        <table className="w-full">

          <thead className="bg-gradient-to-r from-slate-700 to-indigo-800 text-white">
            <tr>
              <th className="p-4 text-left">
                Vendor
              </th>

              <th className="p-4 text-left">
                Company
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-left">
                GSTIN
              </th>

              <th className="p-4 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredVendors.length ===
            0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="p-8 text-center text-gray-500"
                >
                  No vendors found
                </td>
              </tr>
            ) : (
              filteredVendors.map(
                (
                  vendor,
                  index
                ) => (
                  <tr
                    key={index}
                    className="border-b transition hover:bg-slate-50"
                  >
                    <td className="p-4 font-medium text-gray-800">
                      {vendor.name}
                    </td>

                    <td className="p-4 text-gray-700">
                      {
                        vendor.company
                      }
                    </td>

                    <td className="p-4 text-gray-700">
                      {vendor.email}
                    </td>

                    <td className="p-4 text-gray-700">
                      {vendor.phone}
                    </td>

                    <td className="p-4 text-gray-700">
                      {vendor.gst}
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() =>
                          handleEditVendor(
                            index
                          )
                        }
                        className="mr-2 rounded-lg bg-amber-500 px-4 py-2 text-white transition hover:scale-105"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteVendor(
                            index
                          )
                        }
                        className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:scale-105"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}