// app/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-900 bg-gray-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <p className="text-gray-500 text-sm mb-2">
          © 2026 Amer Mustafa
        </p>
        <p className="text-gray-600 text-xs">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}