export default function Nav() {
  return (
    <header>
      <nav aria-label="Primary" className="px-6 py-5 md:px-10 md:py-6">
        <a href="/" className="inline-flex items-center">
          {/* Brand lockup — supplied asset, white on transparent */}
          <img
            src="/alusi-wordmark.png"
            alt="Alusi"
            width={800}
            height={320}
            className="h-9 w-auto md:h-10"
          />
        </a>
      </nav>
    </header>
  );
}
