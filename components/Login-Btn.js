import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <>
        <div className="group relative">
          {session.user.image && (
            <img
              src={session.user.image}
              alt="user-image"
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
            />
          )}
          <span className="absolute left-0 -bottom-8 hidden group-hover:block bg-gray-800 text-white p-2 rounded-md text-sm">
            {session.user.email}
          </span>
        </div>
        <button
          className="bg-gray-800 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-500 transition-colors outline-none focus:outline-none border-none shadow-none ring-0 focus:ring-0"
          onClick={() => signOut()}
        >
          Cerrar sesión
        </button>
      </>
    );
  }
  return (
    <>
      <br />
      <button
        className="bg-gray-800 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-500 transition-colors outline-none focus:outline-none border-none shadow-none ring-0 focus:ring-0"
        onClick={() => signIn()}
      >
        Iniciar sesión
      </button>
    </>
  );
}
