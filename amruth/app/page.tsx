export default function HomePage() {
  return (
    <section className="flex flex-col justify-center items-center h-screen text-center bg-background-light dark:bg-background-dark transition-colors duration-500">
      <h1 className="text-5xl font-bold mb-4 text-text-light dark:text-text-dark">
        Hi, I’m <span className="text-primary">Amruth 👋</span>
      </h1>

      <p className="text-subtext-light dark:text-subtext-dark max-w-xl">
        I’m a creative full-stack developer who loves building modern web apps 
        with <span className="font-semibold text-primary">Next.js</span> and{" "}
        <span className="font-semibold text-primary">TypeScript</span>.
      </p>

      <button className="mt-8 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">
        View My Work
      </button>
    </section>
  );
}
