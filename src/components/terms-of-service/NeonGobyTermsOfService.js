import React from "react";

const NeonGobyTermsOfService = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6", color: "#333", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      <header style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: "1.5rem", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "700", color: "#111827", margin: 0 }}>
          Neon Goby Terms of Service
        </h1>
        <p style={{ color: "#6b7280", marginTop: "0.5rem", fontSize: "0.95rem" }}>
          Effective Date: {new Date().toISOString().split("T")[0]}
        </p>
      </header>

      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the <strong>Neon Goby</strong> application (the &quot;Application&quot; or &quot;Service&quot;), developed and operated by <strong>Samier Uddin Ahammad Shovo</strong> (&quot;Service Provider&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
      </p>

      <p>
        By downloading, accessing, or using the Application, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, do not use the Application.
      </p>

      <h2 style={{ fontSize: "1.4rem", fontWeight: "600", marginTop: "2rem", color: "#1f2937" }}>
        1. Use of the Service
      </h2>
      <p>
        Neon Goby is provided for your personal or authorized business use in accordance with these Terms. You agree to use the Application only for lawful purposes and in compliance with all applicable local, national, and international laws.
      </p>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer, decompile, disassemble, or derive source code from the Application.</li>
        <li>Interfere with, disrupt, or compromise the integrity or security of the Service or its related systems.</li>
        <li>Use automated scripts, bots, spiders, or scrapers to access or extract data from the Service without permission.</li>
        <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
        <li>Use the Service in any manner that violates the rights of any third party or applicable regulations.</li>
      </ul>

      <h2 style={{ fontSize: "1.4rem", fontWeight: "600", marginTop: "2rem", color: "#1f2937" }}>
        2. User Accounts &amp; Authentication
      </h2>
      <p>
        Some features of Neon Goby may require authentication via Google OAuth or third-party identity providers. You are responsible for safeguarding your login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access to your account.
      </p>

      <h2 style={{ fontSize: "1.4rem", fontWeight: "600", marginTop: "2rem", color: "#1f2937" }}>
        3. Intellectual Property Rights
      </h2>
      <p>
        All rights, title, and interest in and to Neon Goby (including software code, designs, graphics, text, trademarks, and logos) are and will remain the exclusive property of Samier Uddin Ahammad Shovo and applicable licensors. You are granted a limited, non-exclusive, non-transferable, revocable license to use the Application for its intended purpose.
      </p>

      <h2 style={{ fontSize: "1.4rem", fontWeight: "600", marginTop: "2rem", color: "#1f2937" }}>
        4. Third-Party Services
      </h2>
      <p>
        The Application may integrate with or link to third-party services (such as Google OAuth, Firebase, and cloud hosting infrastructure). These third-party services operate under their own terms and policies. The Service Provider is not responsible or liable for any third-party services, content, or practices.
      </p>

      <h2 style={{ fontSize: "1.4rem", fontWeight: "600", marginTop: "2rem", color: "#1f2937" }}>
        5. Disclaimer of Warranties
      </h2>
      <p>
        THE APPLICATION IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
      </p>

      <h2 style={{ fontSize: "1.4rem", fontWeight: "600", marginTop: "2rem", color: "#1f2937" }}>
        6. Limitation of Liability
      </h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE SERVICE PROVIDER BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF THE APPLICATION.
      </p>

      <h2 style={{ fontSize: "1.4rem", fontWeight: "600", marginTop: "2rem", color: "#1f2937" }}>
        7. Termination
      </h2>
      <p>
        We reserve the right to suspend or terminate your access to the Application at any time, with or without cause, and without prior notice or liability. You may stop using the Application at any time and disconnect your account via your account settings.
      </p>

      <h2 style={{ fontSize: "1.4rem", fontWeight: "600", marginTop: "2rem", color: "#1f2937" }}>
        8. Changes to These Terms
      </h2>
      <p>
        We reserve the right to modify these Terms at any time. When changes occur, we will update the &quot;Effective Date&quot; at the top of this document. Continued use of the Application following such changes constitutes your acceptance of the new Terms.
      </p>

      <h2 style={{ fontSize: "1.4rem", fontWeight: "600", marginTop: "2rem", color: "#1f2937" }}>
        9. Governing Law
      </h2>
      <p>
        These Terms shall be governed by and construed in accordance with the applicable laws, without giving effect to any principles of conflicts of law.
      </p>

      <h2 style={{ fontSize: "1.4rem", fontWeight: "600", marginTop: "2rem", color: "#1f2937" }}>
        10. Contact Us
      </h2>
      <p>
        If you have any questions or concerns regarding these Terms, please reach out to us at:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:samieruashovo@gmail.com" style={{ color: "#2563eb", textDecoration: "none" }}>
          samieruashovo@gmail.com
        </a>
        <br />
        <strong>Developer:</strong> Samier Uddin Ahammad Shovo
      </p>
    </div>
  );
};

export default NeonGobyTermsOfService;
