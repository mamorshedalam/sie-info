export default function Page() {
  const data = [
    {
      id: 1,
      name: "Taobao",
      url: "/taobao.png",
    },
    {
      id: 2,
      name: "Pinduoduo",
      url: "/panduoduo.png",
    },
    {
      id: 3,
      name: "Meituan",
      url: "/meituan.png",
    },
    {
      id: 4,
      name: "Chaoxing",
      url: "/chaoshing.png",
    },
    {
      id: 5,
      name: "Ding talk",
      url: "/dingtalk.png",
    },
    {
      id: 6,
      name: "Amap",
      url: "/amap.png",
    },
    {
      id: 7,
      name: "Baidu Map",
      url: "/baidu.jpg",
    },
  ];
  return (
    <section className="x-page-container">
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Apps You Need :</h2>
        <div className="flex flex-wrap justify-between w-full">
          {data.map((item) => (
            <div key={item.id} className="mb-4 text-center">
              <p className="font-medium">{item.name}</p>
              <img
                src={item.url}
                alt="app qr"
                className="w-24 h-24 mt-2 mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
