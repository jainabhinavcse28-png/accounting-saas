"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CompanySetupPage() {
  const [companyName, setCompanyName] = useState("");
  const [gst, setGst] = useState("");
  const [address, setAddress] = useState("");
  const [financialYear, setFinancialYear] =
    useState("");

  const router = useRouter();

  const handleSave = () => {
    if (
      !companyName ||
      !address ||
      !financialYear
    ) {
      alert("Please fill required fields");
      return;
    }

    localStorage.setItem(
  "companyCreated",
  "true"
);

alert("Company Created");

router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-[450px] rounded-lg bg-white p-6 shadow-lg">

        <h1 className="mb-5 text-center text-2xl font-bold text-blue-700">
          Company Setup
        </h1>

        <label className="mb-1 block text-black">
          Company Name
        </label>

        <input
          type="text"
          placeholder="Enter Company Name"
          value={companyName}
          onChange={(e) =>
            setCompanyName(e.target.value)
          }
          className="mb-4 w-full rounded border p-2 text-black placeholder:text-gray-500"
        />

        <label className="mb-1 block text-black">
          GSTIN (Optional)
        </label>

        <input
          type="text"
          placeholder="Enter GSTIN"
          value={gst}
          onChange={(e) =>
            setGst(e.target.value)
          }
          className="mb-4 w-full rounded border p-2 text-black placeholder:text-gray-500"
        />

        <label className="mb-1 block text-black">
          Address
        </label>

        <input
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
          className="mb-4 w-full rounded border p-2 text-black placeholder:text-gray-500"
        />

        <label className="mb-1 block text-black">
          Financial Year
        </label>

        <select
          value={financialYear}
          onChange={(e) =>
            setFinancialYear(e.target.value)
          }
          className="mb-5 w-full rounded border p-2 text-black placeholder:text-gray-500"
        >
          <option value="">
            Select Financial Year
          </option>

          <option value="2025-26">
            2025-26
          </option>

          <option value="2026-27">
            2026-27
          </option>
        </select>

        <button
          onClick={handleSave}
          className="w-full rounded bg-blue-600 p-2 text-white "
        >
          Save Company
        </button>
      </div>
    </div>
  );
}