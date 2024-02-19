import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
//import toast from "react-hot-toast";

export default function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMsg] = useState("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMsg(event.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const apiKeyId = import.meta.env.VITE_USR_ID;
    const data = {
      from_name: username,
      from_email: email,
      from_msg: message,
    };
    emailjs.send(serviceId, templateId, data, apiKeyId).then(
      () => {
        toast.success("Email sent successfully!", { duration: 3000 });
      },
      (error) => {
        console.log("FAILED...", error.text);
        toast.error("Email sending FAILED!", { duration: 3000 });
      }
    );
  };
  //
  return (
    <>
      <div className="grid justify-center items-center m-5">
        <div className="flex flex-col p-6 w-full mt-10 md:w-80 border rounded-md border-gray-800">
          <form method="Post" onSubmit={onSubmit}>
            <input
              className="border-solid mb-4 w-full border rounded-md p-3 text-blue-800"
              placeholder="Your Name..."
              type="text"
              name="usrName"
              id="usrName"
              property="usrName"
              autoComplete="off" // Set autocomplete to "off"
              onChange={handleUsernameChange}
            />
            <input
              className="mx-auto border-solid mb-4 w-full border rounded-md text-blue-800 p-3"
              placeholder="Your Email..."
              type="email"
              name="email"
              id="email"
              required
              property="email"
              autoComplete="off" // Set autocomplete to "off"
              onChange={handleEmailChange}
            />
            <textarea
              className="border-solid mb-4 w-full border rounded-md p-3 h-32 resize-none text-blue-800"
              placeholder="Your Message..."
              name="msg"
              maxLength={120}
              id="msg"
              property="msg"
              autoComplete="off" // Set autocomplete to "off"
              onChange={handleMessageChange}
              required
            />
            <div className="text-center">
              <button
                className="border px-3 py-2 rounded-md active:bg-slate-300 hover:bg-slate-100 text-xl text-gray-900"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}