import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold">Marvel Wiki</h4>
          <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Marvel Wiki. Todos los derechos
            reservados.
          </div>
        </div>

        <div>
          <a
            href="https://www.marvel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-red-500"
          >
            Web oficial de Marvel
          </a>
        </div>

        <div className="flex items-center gap-4 text-xl">
          <a
            href="https://www.instagram.com/todo_marvel_?igsh=MWNmcXd5aXRldXUzYg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 flex  gap-2"
            title="Instagram"
          >
            <FaInstagram className="text-2xl" />
            <span className="text-sm">@Todo_Marvel_</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
