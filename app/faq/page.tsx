"use client";

import { useRouter } from "next/navigation";

export default function FAQ() {
  const router = useRouter();

  const faqs = [
    {
      question: "What is ShipVideo?",
      answer: "ShipVideo is a platform that helps you create and manage video content for your projects and applications.",
    },
    {
      question: "How do I get started?",
      answer: "You can get started by clicking the 'Click Me' button on the main page to see a demo video, or navigate to the Dashboard to explore more features.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a free trial period so you can explore all the features before committing to a paid plan. Check the Billing page for more details.",
    },
    {
      question: "What video formats are supported?",
      answer: "We support all major video formats including MP4, MOV, AVI, and WebM. The platform automatically optimizes videos for web delivery.",
    },
    {
      question: "How can I contact support?",
      answer: "You can reach out to our support team through the Dashboard or send us an email. We typically respond within 24 hours.",
    },
  ];

  return (
    <main
      style={{
        padding: 40,
        fontFamily: "sans-serif",
        maxWidth: 800,
        margin: "0 auto",
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#f5f5f5",
      }}
    >
      <h1 style={{ marginBottom: "30px", color: "#ffffff" }}>Frequently Asked Questions</h1>

      <div style={{ marginBottom: "40px" }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              padding: "20px",
              backgroundColor: "#111111",
              borderRadius: "8px",
              border: "1px solid #333333",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "10px",
                color: "#76b3ff",
                fontSize: "18px",
              }}
            >
              {faq.question}
            </h3>
            <p style={{ margin: 0, color: "#cccccc", lineHeight: "1.6" }}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#ffffff",
          color: "#000000",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e5e5e5")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
        onClick={() => router.push("/")}
      >
        Back to Home
      </button>
    </main>
  );
}
