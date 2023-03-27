import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error occurred while sending form data:", error);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full  bg-transparent dark:bg-transparent border-0 border-b-2 border-blue appearance-none focus:outline-none focus:ring-0 focus:border-blue peer"
          placeholder=" "
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label
          htmlFor="name"
          className="absolute duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Name
        </label>
      </div>
      <div className="relative">
        <input
          type="email"
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full  bg-transparent dark:bg-transparent border-0 border-b-2 border-blue appearance-none focus:outline-none focus:ring-0 focus:border-blue peer"
          placeholder=" "
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label
          htmlFor="email"
          className="absolute duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Email Address
        </label>
      </div>
      <div className="relative">
        <textarea
          id="message"
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full  bg-transparent border-0 border-b-2 border-blue appearance-none focus:outline-none focus:ring-0 focus:border-blue peer"
          placeholder=" "
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <label
          htmlFor="message"
          className="absolute duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue peer-focus:dark:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Message
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue text-white hover:bg-opacity-75 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Send
      </button>
      {submitted && (
        <p>
          Thanks for contacting me! <br /> You will get a response soon before
          you say Lorem Ipsum Dolor😎
        </p>
      )}
    </form>
  );
}
