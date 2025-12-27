import React from "react";

const SlidefinityHomePage = () => {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", color: "#222" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #f6ddba, #E74E33)",
          color: "#fff",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <img
          src="./SlideFinity.png"
          alt="SlideFinity Logo"
          style={{ width: "120px", marginBottom: "1rem" }}
        />

        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem" }}>
          SlideFinity
        </h1>

        <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
          A modern, addictive take on the classic 2048 puzzle.
          Slide, merge, and push your limits endlessly.
        </p>

        <a
          href="https://play.google.com/store/apps/details?id=me.samiershovo.slidefinity"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#fff",
            color: "#E74E33",
            padding: "0.9rem 1.6rem",
            borderRadius: "10px",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Download on Google Play
        </a>
      </section>

      {/* Banner Section */}
      <section style={{ padding: "3rem 1.5rem", maxWidth: "1000px", margin: "0 auto" }}>
        <img
          src="./2048.png"
          alt="SlideFinity Gameplay Banner"
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        />
      </section>

      {/* Features */}
      <section
        style={{
          padding: "3rem 1.5rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "2rem", textAlign: "center" }}>
          Why SlideFinity?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            "Smooth and responsive gameplay",
            "Multiple board sizes and themes",
            "Achievements and leaderboards",
            "Minimal ads, maximum fun",
            "Offline playable",
            "Endless challenge mode",
            "Save and resume anytime",
            "Smart animations with satisfying tile merges",
            "Optimized for both phones and tablets",
          ].map((feature) => (
            <div
              key={feature}
              style={{
                padding: "1.5rem",
                borderRadius: "14px",
                background: "#f7f7fb",
                boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
              }}
            >
              <p style={{ fontWeight: "500", fontSize: "1rem" }}>{feature}</p>
            </div>
          ))}
        </div>
      </section>

       {/* FAQ / Info Section */}
      <section
        style={{
          padding: "3rem 1.5rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "2rem", textAlign: "center" }}>
          Frequently Asked Questions
        </h2>

        <div style={{ display: "grid", gap: "1.5rem" }}>
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600" }}>
              Does SlideFinity save my game progress?
            </h3>
            <p style={{ lineHeight: "1.6" }}>
              Yes. Your game progress is securely saved both in the cloud & locally. You can restore your
              progress, scores, and game state on another device, or even after uninstalling
              and reinstalling the app.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600" }}>
              When are achievements and leaderboard scores saved?
            </h3>
            <p style={{ lineHeight: "1.6" }}>
              Achievements and leaderboard scores are saved after a game ends — whether you
              win or lose. This ensures that every completed run is fairly recorded.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600" }}>
              Are leaderboards different for each board size?
            </h3>
            <p style={{ lineHeight: "1.6" }}>
              Yes. Each board size has its own leaderboard. You can compete separately in
              4×4, 5×5, 6×6, 7×7, and 8×8 boards, making every mode a unique challenge.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600" }}>
              Are achievements shared across board sizes?
            </h3>
            <p style={{ lineHeight: "1.6" }}>
              Yes. Achievements are global and apply to all board sizes. Once unlocked,
              they remain earned regardless of which board size you play.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "2rem 1.5rem",
          background: "#f2f2f7",
          textAlign: "center",
          fontSize: "0.9rem",
        }}
      >
        <p>© {new Date().getFullYear()} SlideFinity</p>

        <div style={{ marginTop: "0.5rem" }}>
          <a href="#/slide-finity-privacy-policy" style={{ marginRight: "1rem" }}>
            Privacy Policy
          </a>
          <a href="#/slide-finity-terms-of-service">Terms of Service</a>
        </div>
      </footer>
 


    </div>
  );
};

export default SlidefinityHomePage;
