import { useEffect, useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const hCaptcha = form.querySelector(
      "textarea[name=h-captcha-response]",
    )?.value;
    if (!hCaptcha) {
      event.preventDefault();
      setResult("Please fill out captcha field");
      return;
    }
    setResult("Sending your message…");
    setSending(true);
    try {
      const formData = new FormData(form);

      formData.append("access_key", "74e48b9e-c561-4c25-993d-d76a4dda6963");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        setResult(res.message);
        form.reset();
        window.hcaptcha?.reset();
      } else {
        setResult(res.message);
      }
    } catch {
      setResult(
        "Could not send your message. Please try again or email me directly.",
      );
    } finally {
      setSending(false);
    }
  };

  function loadCaptcha() {
    if (document.getElementById("hcaptcha-script")) return;
    const script = document.createElement("script");
    script.id = "hcaptcha-script";
    script.async = true;
    script.src = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
    document.body.appendChild(script);
  }

  useEffect(() => {
    const contactSection = document.getElementById("contact");

    if (!contactSection || !("IntersectionObserver" in window)) {
      loadCaptcha();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadCaptcha();
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);
  return (
    <section id="contact">
      <h4>LET’S CONNECT</h4>
      <h2>Let’s build something useful.</h2>
      <p>
        Have a developer opportunity or a team I could contribute to? I would
        love to hear from you.
      </p>

      <form onSubmit={onSubmit}>
        <input
          type="hidden"
          name="subject"
          value="Weru Dennis — Portfolio enquiry"
        />

        <div className="contact-fields">
          <input
            type="text"
            aria-label="Your name"
            autoComplete="name"
            placeholder="Your name"
            required
            name="name"
          />

          <input
            type="email"
            aria-label="Your email"
            autoComplete="email"
            placeholder="Your email"
            required
            name="email"
          />
        </div>
        <textarea
          rows="6"
          aria-label="Your message"
          placeholder="Tell me about the opportunity"
          required
          name="message"
        ></textarea>
        <div
          className="h-captcha"
          data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
        ></div>
        <button disabled={sending} type="submit">
          {sending ? "Sending…" : "Send message"}
        </button>
        <p role="status" aria-live="polite">
          {result}
        </p>
        <a className="contact-email" href="mailto:werudennis19@gmail.com">
          werudennis19@gmail.com
        </a>
      </form>
    </section>
  );
}
