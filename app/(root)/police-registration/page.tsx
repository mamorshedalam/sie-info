export default function Page() {
  return (
    <section className="p-9 space-y-4">
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Police Station Location :</h2>
        <p>
          280 meters south of the intersection of Shangxue Road and the
          auxiliary road of Xiongchu Avenue
        </p>
        <a
          href="https://ditu.amap.com/place/B0J37ZERSJ"
          target="_black"
          className="underline text-blue-500 anywhere-words"
        >
          Amap location
        </a>
        <a
          href="https://j.map.baidu.com/f9/QdQK"
          target="_black"
          className="underline text-blue-500 anywhere-words"
        >
          Baidu Map location
        </a>
        <a
          href="https://maps.apple.com/place?auid=1118655455556403&lsp=57879"
          target="_black"
          className="underline text-blue-500 anywhere-words"
        >
          Apple Map location
        </a>
        <p className="flex items-center gap-2 mt-2">
          <span className="font-medium">Contact Number:</span>{" "}
          <a
            href="tel:027-87801110"
            className="underline text-blue-500 anywhere-words"
          >
            027 - 87801110
          </a>
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Navigate :</h2>
        <ul>
          <li>- Walk 505m to Xiongchu Avenue BRT Xiongjiazui Road Station</li>
          <li>- Get on bus (Friendship Avenue Shahu Direction)</li>
          <li>- Get off at the Chuping Road Station (1 stops after)</li>
          <li>- Walk 633m</li>
        </ul>
        <p className="mt-2"><span className="font-medium">Duration:</span> 45 minutes</p>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Working Hours :</h2>
        <p>
          14:00 - 17:00 PM on weekdays
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Required Documents :</h2>
        <ul>
          <li>1. Your valid passport</li>
          <li>2. The accommodation registration form provided by the school</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Precautions :</h2>
        <p>
          Carry the above - mentioned required materials and go to the
          designated police station. After arrival, follow the on - site
          instructions of the police station, queue up and wait for the
          registration formalities. During the processing, please truthfully
          provide relevant information and cooperate with the staff.
        </p>
      </div>
    </section>
  );
}
