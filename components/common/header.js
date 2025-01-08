import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Dudas", href: "/Como funciona" },
  { name: "Planes", href: "/Planes" },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-black text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              JUST FOKING DO IT
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    router.pathname === item.href
                      ? "text-orange-500"
                      : "text-white hover:text-gray-300"
                  } transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <button className="px-4 py-2 text-sm font-medium text-black bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white transition-colors duration-200">
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
