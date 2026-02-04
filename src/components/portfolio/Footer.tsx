export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Shivaram Nallapati. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with <span className="text-accent">React</span> & <span className="text-accent">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
