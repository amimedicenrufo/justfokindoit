import React from "react";
import { useSession, signIn } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return (
      <div>
        <p>You need to be authenticated to view this page.</p>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1>Panel de Control</h1>
      <section className="statistics-overview">
        <h2>Resumen General de Estadísticas</h2>
        {/* Add statistics overview content here */}
      </section>
      <section className="important-metrics">
        <h2>Gráficos y Métricas Importantes</h2>
        {/* Add important metrics content here */}
      </section>
      <section className="recent-activity">
        <h2>Actividad Reciente</h2>
        {/* Add recent activity content here */}
      </section>
    </div>
  );
};

export default Dashboard;
