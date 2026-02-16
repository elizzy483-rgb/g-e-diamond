import React from "react";

const services = [
  "Washing Machine Repairs",
  "Microwave Repairs",
  "Gas Cooker Repairs",
  "Heat Extractor Repairs"
];

const inputStyle: React.CSSProperties = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

export default function GEDiamondElectronics() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        background: "#f4f6f9",
        color: "#333"
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "#0b1f3a",
          color: "white",
          padding: "20px",
          textAlign: "center"
        }}
      >
        <h1 style={{ margin: 0 }}>G-E DIAMOND ELECTRONICS</h1>
        <p>Professional Home Appliance Repairs</p>
        <a
          href="https://wa.me/2348020548544"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#25D366",
            color: "white",
            padding: "12px 20px",
            borderRadius: "6px",
            textDecoration: "none",
            display: "inline-block",
            marginTop: "10px"
          }}
        >
          Chat on WhatsApp
        </a>
      </header>

      {/* Services */}
      <section style={{ width: "90%", maxWidth: "1100px", margin: "40px auto" }}>
        <h2>Our Services</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px"
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                textAlign: "center"
              }}
            >
              <h3 style={{ margin: 0 }}>{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Serve */}
      <section style={{ width: "90%", maxWidth: "1100px", margin: "40px auto" }}>
        <h2>Who We Serve</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px"
          }}
        >
          {["Homeowners", "Companies", "Students"].map((group, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
              }}
            >
              {group}
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section style={{ width: "90%", maxWidth: "700px", margin: "40px auto" }}>
        <h2>Book a Repair</h2>
        <form
          action="https://formsubmit.co/gediamondltd5@gmail.com"
          method="POST"
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input type="hidden" name="_cc" value="elizzy483@gmail.com" />
          <input
            type="hidden"
            name="_subject"
            value="New Repair Booking - G-E DIAMOND ELECTRONICS"
          />
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="Full Name"
            placeholder="Full Name"
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="Email"
            placeholder="Email Address"
            required
            style={inputStyle}
          />
          <input
            type="tel"
            name="Phone"
            placeholder="Phone Number"
            required
            style={inputStyle}
          />

          <select name="Service" required style={inputStyle}>
            <option value="">Select Service</option>
            <option>Washing Machine Repair</option>
            <option>Microwave Repair</option>
            <option>Gas Cooker Repair</option>
            <option>Heat Extractor Repair</option>
          </select>

          <textarea
            name="Issue"
            rows={4}
            placeholder="Describe the issue"
            required
            style={inputStyle}
          ></textarea>

          <button
            type="submit"
            style={{
              background: "#0b1f3a",
              color: "white",
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Submit Booking
          </button>
        </form>
      </section>

      {/* Blog Section */}
      <section style={{ width: "90%", maxWidth: "1100px", margin: "40px auto" }}>
        <h2>Maintenance Tips & Blog</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px"
          }}
        >
          {[
            "How to Maintain Your Washing Machine",
            "Microwave Safety Tips",
            "Gas Cooker Maintenance Guide"
          ].map((post, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
              }}
            >
              {post}
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section
        style={{
          padding: "50px 20px",
          background: "#f9f9f9",
          textAlign: "center"
        }}
      >
        <h2>Our Service Area – Ajah, Lagos</h2>
        <p>
          G-E Diamond Electronics proudly provides professional home appliance
          repair services in Ajah, Lagos, Nigeria.
        </p>

        <div style={{ margin: "30px 0" }}>
          <iframe
            src="https://www.google.com/maps?q=Ajah,Lagos,Nigeria&output=embed"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
            title="Ajah Lagos Location"
          ></iframe>
        </div>

        <a
          href="tel:08020548544"
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "14px 30px",
            background: "#000",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold"
          }}
        >
          Call Now: 08020548544
        </a>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#0b1f3a",
          color: "white",
          textAlign: "center",
          padding: "20px",
          marginTop: "40px"
        }}
      >
        <p>© 2026 G-E DIAMOND ELECTRONICS</p>
        <p>Phone: 08020548544</p>
      </footer>
    </div>
  );
}
