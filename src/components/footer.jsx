export default function Footer() {
  return (
    <footer className="py-6 border-t border-slate-800 mt-20">
      <div className="text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Radyf. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
