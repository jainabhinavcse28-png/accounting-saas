"use client";

import { useEffect, useState } from "react";

export default function CustomersPage() {
  const [customers, setCustomers] =
    useState<any[]>([]);

  const [customerName, setCustomerName] =
    useState("");

  const [customerEmail, setCustomerEmail] =
    useState("");

  const [customerPhone, setCustomerPhone] =
    useState("");

  const [customerGst, setCustomerGst] =
    useState("");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [editIndex, setEditIndex] =
    useState<number | null>(null);

  useEffect(() => {
    const savedCustomers =
      localStorage.getItem(
        "customers"
      );

    if (savedCustomers) {
      setCustomers(
        JSON.parse(
          savedCustomers
        )
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "customers",
      JSON.stringify(customers)
    );
  }, [customers]);

  const handleAddCustomer = () => {
    if (
      !customerName ||
      !customerEmail
    ) {
      alert(
        "Please fill required fields"
      );
      return;
    }

    const newCustomer = {
      name: customerName,
      email: customerEmail,
      phone: customerPhone,
      gst: customerGst,
    };

    if (editIndex !== null) {
      const updatedCustomers = [
        ...customers,
      ];

      updatedCustomers[
        editIndex
      ] = newCustomer;

      setCustomers(
        updatedCustomers
      );

      setEditIndex(null);
    } else {
      setCustomers([
        ...customers,
        newCustomer,
      ]);
    }

    setCustomerName("");
    setCustomerEmail("");
    setCustomerPhone("");
    setCustomerGst("");
  };

  const handleDeleteCustomer = (
    indexToDelete: number
  ) => {
    const confirmDelete =
      confirm(
        "Are you sure you want to delete this customer?"
      );

    if (!confirmDelete) {
      return;
    }

    const updatedCustomers =
      customers.filter(
        (_, index) =>
          index !== indexToDelete
      );

    setCustomers(
      updatedCustomers
    );
  };

  const handleEditCustomer = (
    indexToEdit: number
  ) => {
    const customer =
      customers[indexToEdit];

    setCustomerName(
      customer.name
    );

    setCustomerEmail(
      customer.email
    );

    setCustomerPhone(
      customer.phone
    );

    setCustomerGst(
      customer.gst
    );

    setEditIndex(
      indexToEdit
    );
  };

  const filteredCustomers =
    customers.filter(
      (customer) =>
        customer.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">

      <div className="mb-8 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-8 text-white shadow-xl">
        <h1 className="text-4xl font-bold">
          Customers Management
        </h1>

        <p className="mt-2 text-blue-100">
          Manage your customers professionally
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-xl">
          <h2 className="text-lg font-medium">
            Total Customers
          </h2>

          <p className="mt-2 text-4xl font-bold">
            {customers.length}
          </p>
        </div>

      </div>

      <div className="mb-8 rounded-3xl bg-white p-6 shadow-xl">

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {editIndex !== null
              ? "Edit Customer"
              : "Add Customer"}
          </h2>

          <button
            onClick={
              handleAddCustomer
            }
            className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            {editIndex !== null
              ? "Update Customer"
              : "Add Customer"}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) =>
              setCustomerName(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black shadow-sm outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={customerEmail}
            onChange={(e) =>
              setCustomerEmail(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black shadow-sm outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Phone"
            value={customerPhone}
            onChange={(e) =>
              setCustomerPhone(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black shadow-sm outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="GST"
            value={customerGst}
            onChange={(e) =>
              setCustomerGst(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black shadow-sm outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <input
        type="text"
        placeholder="🔍 Search Customer"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(
            e.target.value
          )
        }
        className="mb-6 w-full rounded-2xl border border-gray-300 bg-white p-4 text-black shadow-lg outline-none focus:border-blue-500"
      />

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

        <table className="w-full">

          <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <tr>
              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-left">
                GST
              </th>

              <th className="p-4 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.length ===
            0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-8 text-center text-gray-500"
                >
                  No customers found
                </td>
              </tr>
            ) : (
              filteredCustomers.map(
                (
                  customer,
                  index
                ) => (
                  <tr
                    key={index}
                    className="border-b transition hover:bg-blue-50"
                  >
                    <td className="p-4 font-medium text-gray-800">
                      {
                        customer.name
                      }
                    </td>

                    <td className="p-4 text-gray-700">
                      {
                        customer.email
                      }
                    </td>

                    <td className="p-4 text-gray-700">
                      {
                        customer.phone
                      }
                    </td>

                    <td className="p-4 text-gray-700">
                      {
                        customer.gst
                      }
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() =>
                          handleEditCustomer(
                            index
                          )
                        }
                        className="mr-2 rounded-lg bg-yellow-500 px-4 py-2 text-white transition hover:scale-105"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteCustomer(
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