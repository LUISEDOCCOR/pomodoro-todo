export default function Home() {
  return (
    <header className="space-y-4">
      <hgroup className="space-y-1">
        <h1 className="text-2xl font-bold">Pomodoro To-Do</h1>
        <h2 className="text-lg">
          By{" "}
          <a
            className="font-semibold underline underline-offset-8 transition-colors hover:text-neutral-300"
            href="https://www.luiseduardocortes.xyz/"
            target="_blank"
          >
            Luis Eduardo Ocegueda Cortés
          </a>{" "}
          🇲🇽
        </h2>
      </hgroup>
      <p className="text-md font-mono">
        La técnica Pomodoro es una herramienta simple y efectiva para mejorar la
        productividad, que te permite trabajar en bloques de tiempo de 25
        minutos, seguidos de pausas cortas. Aumenta tu enfoque, evita
        distracciones y logra más en menos tiempo, manteniendo un equilibrio
        saludable entre trabajo y descanso. ¡Empieza hoy a optimizar tu tiempo
        con Pomodoro!
      </p>
    </header>
  );
}
