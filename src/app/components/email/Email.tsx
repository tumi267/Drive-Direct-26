"use client";

import { useEmail } from "@/app/hooks/useEmail";
import { EmailProvider } from "@/app/libs/email";
import { ticketProps } from "@/app/types/tickets";
import { useEffect } from "react";

export default function Email({clientmail,ticketId,createdById}:ticketProps) {
  const {loading,connected,error,provider,setProvider,setcreatedById,testConnection,handleSendEmail,updateMail,mail,setMail,setTicketid} = useEmail();
  useEffect(() => {
    setMail((prev) => ({
      ...prev,
      to: clientmail,
    }))
    setTicketid(ticketId)
    setcreatedById(createdById)
  }, [clientmail])
  return (
    <div className="w-full rounded-lg border border-gray-200 p-6 grid grid-cols-2 gap-5">
      <div >
      <h2 className="mb-6 text-xl font-semibold">
        Test Email Connection
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
      <div>
        <h2>Send Email</h2>

        <form onSubmit={(e)=>{e.preventDefault();
        handleSendEmail({...mail})
          }}>
            <input
  placeholder="To"
  value={mail.to}
  onChange={(e) =>
    updateMail("to", e.target.value)
  }
/>
<br/>
          <input
  placeholder="Subject"
  value={mail.subject}
  onChange={(e) =>
    updateMail("subject", e.target.value)
  }
/>
<br/>
<textarea
  value={mail.message}
  onChange={(e) =>
    updateMail("message", e.target.value)
  }
/>
          <br/>
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
}