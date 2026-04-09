export function Footer() {
  return (
    <footer className="py-8 relative">
      <div className="accent-line mb-8" />
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()}{' '}
            <span className="text-foreground font-medium">Shivaram Nallapati</span>
            . All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with{' '}
            <span className="text-accent font-medium">React</span>
            {' & '}
            <span className="text-accent font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
