import Link from "next/link";
import { useRouter } from "next/router";
import LoginBtn from "../Login-Btn";
import React from "react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Buscar Cartas", href: "/search" },
];
/*
const AdminNavigation = () => {
  return (
    <nav className="admin-navigation">
      <ul className="menu">
        <li>
          <a href="#dashboard">Panel de Control</a>
        </li>
        <li>
          <a href="#user-management">Gestión de Usuarios</a>
        </li>
        <li>
          <a href="#content-management">Gestión de Contenido</a>
        </li>
        <li>
          <a href="#settings">Configuraciones</a>
        </li>
        <li>
          <a href="#reports">Reportes y Análisis</a>
        </li>
      </ul>
    </nav>
  );
};*/

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-[#0a0d14] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-500">MTG</span>
              <span className="text-2xl font-bold">Commander</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    router.pathname === item.href
                      ? "text-green-500"
                      : "text-white hover:text-green-400"
                  } transition-colors duration-200 text-lg`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <LoginBtn />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
