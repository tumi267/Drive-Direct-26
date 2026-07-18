import { useCallback, useState } from "react";
import { sendEmail, testEmailConnection } from "../services/email.service";
import type {EmailConnection,SendEmailOptions} from "../libs/email/types";
import { EmailProvider } from "../libs/email";

export function useEmail() {
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [provider, setProvider] = useState<EmailProvider>("gmail");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ticketId,setTicketid]=useState('');
  const [mail, setMail] = useState({
    to: "",
    subject: "",
    message: "",
  })
  const updateMail = (
    field: keyof typeof mail,
    value: string
  ) => {
    setMail((prev) => ({
      ...prev,
      [field]: value,
    }))
  }
  const connection: EmailConnection = {provider,email, password,};
  const testConnection = useCallback(async () => {
    setLoading(true);
    setError(null);

    
    try {
      await testEmailConnection( provider);

      setConnected(true);

      return true;
    } catch (err) {
      setConnected(false);
      setError(err instanceof Error? err.message: "Connection failed.");
      return false;
    } finally {
      setLoading(false);
    }
  }, [connection]);

  const handleSendEmail = useCallback(
    async (options: SendEmailOptions) => {
      setLoading(true);
      setError(null);
      try {
        await sendEmail( provider,ticketId, options);
        return true;
      } catch (err) {
        setError(
          err instanceof Error? err.message: "Failed to send email."
        );
        return false;
      } finally {
        setLoading(false);
      }
    },
    [connection]
  );

  return {loading,connected,error,provider,updateMail,mail,setMail,setProvider,testConnection,handleSendEmail,setTicketid
  };
}