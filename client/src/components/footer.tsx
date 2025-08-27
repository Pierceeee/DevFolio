export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm" data-testid="text-copyright">
              &copy; {currentYear} Allen Lacoste
            </p>
          </div>
          <div className="flex space-x-6">
            <button 
              onClick={handleScrollToTop}
              className="text-muted-foreground hover:text-secondary text-sm transition-colors"
              data-testid="link-back-to-top"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
