export default function TipsSection({ tips }) {
  return (
    <section className="max-w-5xl mx-auto px-6 space-y-10 py-6">
      {tips.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3 text-blue-900">
            {index + 1}. {item.title}
          </h2>

          {item.image && (
            <div className="flex justify-center my-6">
              <img
                src={item.image}
                alt={item.title}
                className="max-w-full w-[650px] rounded-xl shadow-md"
              />
            </div>
          )}

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {item.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
