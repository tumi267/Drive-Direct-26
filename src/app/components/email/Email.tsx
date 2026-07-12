"use client";

import { useEmail } from "@/app/hooks/useEmail";
import { EmailProvider } from "@/app/libs/email";


export default function Email() {
  const {loading,connected,error,provider,email,password,setProvider,setEmail,setPassword,testConnection,} = useEmail();

  return (
    <div className="w-full max-w-md rounded-lg border border-gray-200 p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Connect Email
      </h2>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium">
          Provider
        </label>

        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value as EmailProvider)}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="gmail">Gmail</option>
          <option value="office365">Microsoft 365</option>
          <option value="outlook">Outlook</option>
          <option value="zoho">Zoho</option>
          <option value="custom">Custom SMTP</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium">
          Email Address
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="sales@dealer.co.za"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">
          Password / App Password
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <button
        type="button"
        onClick={testConnection}
        disabled={loading}
        className="w-full rounded-md bg-black px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Connecting..." : "Connect Email"}
      </button>

      {connected && (
        <p className="mt-4 text-sm text-green-600">
          ✅ Email connected successfully.
        </p>
      )}

      {error && (
        <p className="mt-4 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}