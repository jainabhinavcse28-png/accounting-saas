"use client";

import { useEffect, useState } from "react";

export default function ItemsPage() {
  const [items, setItems] =
    useState<any[]>([]);

  const [itemName, setItemName] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [stock, setStock] =
    useState("");

  const [gst, setGst] =
    useState("");

  const [unit, setUnit] =
    useState("");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [editIndex, setEditIndex] =
    useState<number | null>(null);

  useEffect(() => {
    const savedItems =
      localStorage.getItem(
        "items"
      );

    if (savedItems) {
      setItems(
        JSON.parse(savedItems)
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "items",
      JSON.stringify(items)
    );
  }, [items]);

  const handleAddItem = () => {
    if (
      !itemName ||
      !category ||
      !price
    ) {
      alert(
        "Please fill required fields"
      );
      return;
    }

    const newItem = {
      name: itemName,
      category,
      price,
      stock,
      gst,
      unit,
    };

    if (editIndex !== null) {
      const updatedItems = [
        ...items,
      ];

      updatedItems[
        editIndex
      ] = newItem;

      setItems(
        updatedItems
      );

      setEditIndex(null);
    } else {
      setItems([
        ...items,
        newItem,
      ]);
    }

    setItemName("");
    setCategory("");
    setPrice("");
    setStock("");
    setGst("");
    setUnit("");
  };

  const handleDeleteItem = (
    indexToDelete: number
  ) => {
    const confirmDelete =
      confirm(
        "Delete this item?"
      );

    if (!confirmDelete)
      return;

    const updatedItems =
      items.filter(
        (_, index) =>
          index !==
          indexToDelete
      );

    setItems(
      updatedItems
    );
  };

  const handleEditItem = (
    indexToEdit: number
  ) => {
    const item =
      items[indexToEdit];

    setItemName(item.name);
    setCategory(
      item.category
    );
    setPrice(item.price);
    setStock(item.stock);
    setGst(item.gst);
    setUnit(item.unit);

    setEditIndex(
      indexToEdit
    );
  };

  const filteredItems =
    items.filter(
      (item) =>
        item.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-8">

      <div className="mb-8 rounded-3xl bg-gradient-to-r from-emerald-700 to-teal-700 p-8 text-white shadow-xl">
        <h1 className="text-4xl font-bold">
          Inventory Management
        </h1>

        <p className="mt-2 text-emerald-100">
          Manage products and stock professionally
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white shadow-xl">
          <h2 className="text-lg font-medium">
            Total Items
          </h2>

          <p className="mt-2 text-4xl font-bold">
            {items.length}
          </p>
        </div>
      </div>

      <div className="mb-8 rounded-3xl bg-white p-6 shadow-xl">

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {editIndex !== null
              ? "Edit Item"
              : "Add Item"}
          </h2>

          <button
            onClick={
              handleAddItem
            }
            className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            {editIndex !== null
              ? "Update Item"
              : "Add Item"}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Item Name"
            value={itemName}
            onChange={(e) =>
              setItemName(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black"
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black"
          >
            <option value="">
              Select Category
            </option>
            <option value="Electronics">
              Electronics
            </option>
            <option value="Office Supplies">
              Office Supplies
            </option>
            <option value="Furniture">
              Furniture
            </option>
            <option value="Food">
              Food
            </option>
            <option value="Services">
              Services
            </option>
            <option value="Other">
              Other
            </option>
          </select>

          <input
            type="number"
            placeholder="Selling Price"
            value={price}
            onChange={(e) =>
              setPrice(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black"
          />

          <input
            type="number"
            placeholder="Stock Quantity"
            value={stock}
            onChange={(e) =>
              setStock(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black"
          />

          <input
            type="number"
            placeholder="GST %"
            value={gst}
            onChange={(e) =>
              setGst(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black"
          />

          <select
            value={unit}
            onChange={(e) =>
              setUnit(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-300 p-3 text-black"
          >
            <option value="">
              Select Unit
            </option>
            <option value="pcs">
              pcs
            </option>
            <option value="kg">
              kg
            </option>
            <option value="litre">
              litre
            </option>
            <option value="box">
              box
            </option>
            <option value="packet">
              packet
            </option>
          </select>

        </div>
      </div>

      <input
        type="text"
        placeholder="🔍 Search Item"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(
            e.target.value
          )
        }
        className="mb-6 w-full rounded-2xl border border-gray-300 bg-white p-4 text-black shadow-lg"
      />

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

        <table className="w-full">

          <thead className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            <tr>
              <th className="p-4 text-left">
                Item
              </th>
              <th className="p-4 text-left">
                Category
              </th>
              <th className="p-4 text-left">
                Price
              </th>
              <th className="p-4 text-left">
                GST
              </th>
              <th className="p-4 text-left">
                Stock
              </th>
              <th className="p-4 text-left">
                Unit
              </th>
              <th className="p-4 text-left">
                Status
              </th>
              <th className="p-4 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.length ===
            0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="p-8 text-center text-gray-500"
                >
                  No items found
                </td>
              </tr>
            ) : (
              filteredItems.map(
                (
                  item,
                  index
                ) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-emerald-50"
                  >
                    <td className="p-4 font-medium text-gray-800">
  {item.name}
</td>

<td className="p-4 text-gray-700">
  {item.category}
</td>

<td className="p-4 text-gray-700">
  ₹{item.price}
</td>

<td className="p-4 text-gray-700">
  {item.gst}%
</td>

<td className="p-4 text-gray-700">
  {item.stock}
</td>

<td className="p-4 text-gray-700">
  {item.unit}
</td>

                    <td className="p-4">
                      {Number(
                        item.stock
                      ) ===
                      0 ? (
                        <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">
                          Out of Stock
                        </span>
                      ) : Number(
                          item.stock
                        ) <=
                        5 ? (
                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                          Low Stock
                        </span>
                      ) : (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                          In Stock
                        </span>
                      )}
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() =>
                          handleEditItem(
                            index
                          )
                        }
                        className="mr-2 rounded-lg bg-amber-500 px-4 py-2 text-white"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteItem(
                            index
                          )
                        }
                        className="rounded-lg bg-red-500 px-4 py-2 text-white"
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