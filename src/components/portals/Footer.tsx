import { Link } from 'react-router';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-600">
          <div>© {year} Arenas Group of Schools. All rights reserved.</div>
          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-gray-900 transition-colors">
              Terms
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-900 transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer