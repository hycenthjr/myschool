
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-gray-600">
          <p>© {year} Arenas Group of Schools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer