export default function Home() {
  return (
    <section className="relative bg-blue-500 text-white md:p-4 p-2 max-w-[1500px] w-full mx-auto">
      <img
        src="/hero-bg.jpg"
        alt="Hero image"
        className="h-[calc(100vh-2rem)] object-cover md:rounded-2xl rounded-lg"
      />
      <div className="absolute bottom-0 left-0 max-w-[540px] w-full md:p-4 p-2 bg-blue-500 md:rounded-tr-2xl">
        <h1>
          Wuhan Institute
          <br />
          of
          <br />
          Technology
        </h1>
        <p className="lg:text-3xl md:text-2xl text-base font-medium mt-2">School of International Studies</p>
      </div>
    </section>
  );
}
