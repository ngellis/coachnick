export default function Footer() {
  return (
    <footer className="border-t mt-auto" style={{
      backgroundColor: "var(--charcoal)",
      borderColor: "var(--stone)"
    }}>
      <div className="footer-container text-sm text-center"
           style={{ color: "var(--cream)" }}>
        © {new Date().getFullYear()} Coach Nick. All rights reserved.
      </div>
    </footer>
  );
}
