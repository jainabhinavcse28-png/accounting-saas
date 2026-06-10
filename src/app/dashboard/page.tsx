"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();

useEffect(() => {
  const companyCreated =
    localStorage.getItem(
      "companyCreated"
    );

  if (!companyCreated) {
    router.push(
      "/company-setup"
    );
  }
}, []);
  return (
    <div className="flex min-h-screen bg-gray-100">

      <div className="w-64 bg-blue-700 p-5 text-white">
        <h1 className="mb-8 text-2xl font-bold">
          Dev Consultancy
        </h1>

        <ul className="space-y-3">
          <li>
            <Link
              href="/dashboard"
              className="block rounded p-2 hover:bg-blue-500"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/customers"
              className="block rounded p-2 hover:bg-blue-500"
            >
              Customers
            </Link>
          </li>

          <li>
            <Link
              href="/vendors"
              className="block rounded p-2 hover:bg-blue-500"
            >
              Vendors
            </Link>
          </li>

          <li>
            <Link
              href="/items"
              className="block rounded p-2 hover:bg-blue-500"
            >
              Items
            </Link>
          </li>

          <li>
            <Link
              href="/reports"
              className="block rounded p-2 hover:bg-blue-500"
            >
              Reports
            </Link>
          </li>
          <li>
  <Link
    href="/sales"
    className="block rounded p-2 hover:bg-blue-500"
  >
    Sales
  </Link>
</li>

<li>
  <Link
    href="/purchases"
    className="block rounded p-2 hover:bg-blue-500"
  >
    Purchases
  </Link>
</li>

<li>
  <Link
    href="/payments"
    className="block rounded p-2 hover:bg-blue-500"
  >
    Payments
  </Link>
</li>
        </ul>
      </div>

      <div className="flex-1 p-8">

        <h1 className="mb-6 text-3xl font-bold text-black">
          Dashboard
        </h1>

        <div className="mb-8 grid grid-cols-4 gap-4">

          <div className="rounded-lg bg-white p-5 shadow">
            <h2 className="text-gray-500">
              Revenue
            </h2>

            <p className="text-2xl font-bold text-black">
              ₹x
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 shadow">
            <h2 className="text-gray-500">
              Expenses
            </h2>

            <p className="text-2xl font-bold text-black">
              ₹x
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 shadow">
            <h2 className="text-gray-500">
              Profit
            </h2>

            <p className="text-2xl font-bold text-black">
              ₹x
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 shadow">
            <h2 className="text-gray-500">
              Outstanding
            </h2>

            <p className="text-2xl font-bold text-black">
              ₹x
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-lg bg-white p-5 shadow">
          <div className="mb-4 flex items-center justify-between">

            <h2 className="text-xl font-bold text-black">
              Sales Chart
            </h2>

            <button className="rounded bg-blue-600 px-4 py-2 text-white">
              Add Chart Later
            </button>

          </div>

          <div className="flex h-48 items-center justify-center rounded border border-dashed border-gray-300">
            <p className="text-gray-500">
              Chart will be added later
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">

          <div className="rounded-lg bg-white p-5 shadow">
            <h2 className="mb-4 text-xl font-bold text-black">
              Quick Actions
            </h2>

            <div className="space-y-3">
              <button className="w-full rounded bg-blue-600 p-2 text-white">
                Add Customer
              </button>

              <button className="w-full rounded bg-green-600 p-2 text-white">
                Create Invoice
              </button>
            </div>
          </div>

          <div className="rounded-lg bg-white p-5 shadow">
            <h2 className="mb-4 text-xl font-bold text-black">
              Recent Invoices
            </h2>

            <p className="text-gray-600">
              No recent invoices
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}