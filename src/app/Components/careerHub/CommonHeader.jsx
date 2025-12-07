export default function CommonHeader({ title, subtitle }) {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-blue-900 text-white py-24 text-center shadow-lg mt-16 px-4">
      <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
      <p className="mt-2 text-lg md:text-xl">{subtitle}</p>
    </header>
  );
}
