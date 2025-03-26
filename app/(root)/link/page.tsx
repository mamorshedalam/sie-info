export default function Page() {
  const data = [
    {
      title: "Student Portal",
      url: "http://jwxt.wit.edu.cn/jsxsd/",
    },
    {
      title: "Converged Portal",
      url: "https://ehall.wit.edu.cn/EIP/nonlogin/homePage.htm",
    },
    {
      title: "International Student Service System",
      url: "https://wit.at0086.cn/StuApplication/Login.aspx",
    },
    {
      title: "Tuition payment platform",
      url: "http://cwwsjf.wit.edu.cn/wsjf/",
    },
  ];
  return (
    <section className="space-y-3 md:px-6 px-3 md:py-9 py-5">
      {data &&
        data.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 w-full bg-white shadow-lg shadow-black/5 rounded-xl md:px-5 px-4 py-3"
          >
            <p>{item.title} :</p>
            <a
              href={item.url}
              className="underline text-blue-500 anywhere-words"
              target="_black"
            >
              {item.url}
            </a>
          </div>
        ))}
    </section>
  );
}
