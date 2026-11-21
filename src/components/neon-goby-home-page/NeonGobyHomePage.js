import React from "react";

const NeonGobyHomePage = () => {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", color: "#222", background: "#fcfcfd" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #091e3a 0%, #173860 50%, #0099cc 100%)",
          color: "#fff",
          padding: "5rem 1.5rem 4rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Logo / Badge */}
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "24px",
              background: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
              boxShadow: "0 10px 25px rgba(0, 153, 204, 0.35)",
            }}
          >
            <svg
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>

          <h1 style={{ fontSize: "2.8rem", fontWeight: "800", marginBottom: "1rem", letterSpacing: "-0.5px" }}>
            Neon Goby
          </h1>

          <p style={{ fontSize: "1.2rem", maxWidth: "620px", margin: "0 auto 2.2rem", color: "#e0f2fe", lineHeight: "1.6" }}>
            A fast, intelligent, and lightweight productivity application built to streamline your daily workflows with seamless synchronization.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#/neon-goby-privacy-policy"
              style={{
                background: "#38bdf8",
                color: "#0f172a",
                padding: "0.85rem 1.6rem",
                borderRadius: "10px",
                fontWeight: "600",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(56, 189, 248, 0.4)",
                transition: "all 0.2s ease",
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#/neon-goby-terms-of-service"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                padding: "0.85rem 1.6rem",
                borderRadius: "10px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </section>

      {/* Overview / About Banner */}
      <section style={{ padding: "3.5rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "2.5rem 2rem",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            border: "1px solid #f1f5f9",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1rem", color: "#0f172a" }}>
            About Neon Goby
          </h2>
          <p style={{ lineHeight: "1.7", color: "#475569", fontSize: "1.05rem" }}>
            Neon Goby is engineered to deliver a focused, intuitive, and secure environment. Designed by Samier Uddin Ahammad Shovo, it connects with modern cloud ecosystems to keep your preferences, states, and activities instantly available across your devices.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1.2rem",
              background: "#f0f9ff",
              borderLeft: "4px solid #0284c7",
              borderRadius: "0 8px 8px 0",
              color: "#0369a1",
              fontSize: "0.95rem",
              lineHeight: "1.5",
            }}
          >
            <strong>Google OAuth Transparency:</strong> When signing in with Google, Neon Goby only accesses standard profile data (such as your name and email address) necessary to securely authenticate your identity and personalize your workspace. We strictly comply with the Google API Services User Data Policy.
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: "1rem 1.5rem 4rem", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "2rem", textAlign: "center", color: "#0f172a" }}>
          Key Highlights
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              title: "Secure Authentication",
              desc: "Effortlessly sign in via Google OAuth with state-of-the-art token security and industry-standard protocols.",
            },
            {
              title: "Cloud Synchronization",
              desc: "Instant syncing ensures your preferences and saved data are always accessible wherever you go.",
            },
            {
              title: "Privacy First",
              desc: "Your data is strictly safeguarded. We never sell your personal information or use it for third-party advertising.",
            },
            {
              title: "Speed & Performance",
              desc: "Built with modern architecture to deliver blistering fast interactions and minimal latency.",
            },
            {
              title: "Clean & Intuitive",
              desc: "A distraction-free, elegant user interface built for clarity, accessibility, and high productivity.",
            },
            {
              title: "Always In Control",
              desc: "Full transparency over your data with simple one-click options to manage access or request account deletion.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: "1.75rem",
                borderRadius: "14px",
                background: "#fff",
                border: "1px solid #f1f5f9",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.5rem", color: "#0f172a" }}>
                {item.title}
              </h3>
              <p style={{ color: "#64748b", lineHeight: "1.6", margin: 0, fontSize: "0.95rem" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "1rem 1.5rem 4rem", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "2rem", textAlign: "center", color: "#0f172a" }}>
          Frequently Asked Questions
        </h2>

        <div style={{ display: "grid", gap: "1.5rem" }}>
          <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", border: "1px solid #f1f5f9" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#0f172a", marginBottom: "0.5rem" }}>
              Why does Neon Goby use Google Sign-In?
            </h3>
            <p style={{ lineHeight: "1.6", color: "#475569", margin: 0 }}>
              Google Sign-In provides a secure, passwordless authentication experience. It allows you to log in reliably without creating or managing separate passwords, while keeping your account protected by Google&apos;s advanced security infrastructure.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", border: "1px solid #f1f5f9" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#0f172a", marginBottom: "0.5rem" }}>
              Does Neon Goby share or sell my Google data?
            </h3>
            <p style={{ lineHeight: "1.6", color: "#475569", margin: 0 }}>
              No. We strictly adhere to the Google API Services User Data Policy. Your data is never sold, never shared with third-party advertisers, and never accessed by humans except for specific troubleshooting or legal compliance requirements.
            </p>
          </div>

          <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", border: "1px solid #f1f5f9" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#0f172a", marginBottom: "0.5rem" }}>
              How can I delete my data or revoke access?
            </h3>
            <p style={{ lineHeight: "1.6", color: "#475569", margin: 0 }}>
              You can disconnect Neon Goby at any time via your Google Account Permissions page. To request permanent deletion of all data associated with your profile, contact us at <a href="mailto:samieruashovo@gmail.com" style={{ color: "#0284c7" }}>samieruashovo@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "2.5rem 1.5rem",
          background: "#0f172a",
          color: "#94a3b8",
          textAlign: "center",
          fontSize: "0.9rem",
        }}
      >
        <p style={{ margin: 0, color: "#e2e8f0", fontWeight: "500" }}>
          © {new Date().getFullYear()} Neon Goby • Samier Uddin Ahammad Shovo
        </p>

        <div style={{ marginTop: "0.8rem", display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <a href="#/neon-goby-privacy-policy" style={{ color: "#38bdf8", textDecoration: "none" }}>
            Privacy Policy
          </a>
          <span style={{ color: "#475569" }}>•</span>
          <a href="#/neon-goby-terms-of-service" style={{ color: "#38bdf8", textDecoration: "none" }}>
            Terms of Service
          </a>
          <span style={{ color: "#475569" }}>•</span>
          <a href="mailto:samieruashovo@gmail.com" style={{ color: "#38bdf8", textDecoration: "none" }}>
            Contact Support
          </a>
        </div>
      </footer>
    </div>
  );
};

export default NeonGobyHomePage;
