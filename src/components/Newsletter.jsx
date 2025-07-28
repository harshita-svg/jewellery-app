const Newsletter = () => {
  return (
    <section className="bg-gradient-to-r from-pastelPeach via-pastelLavender to-pastelBlue py-12 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
        Stay in Sync with the Stars ✨
      </h2>
      <p className="italic text-slate-700 mb-6">
        Join our cosmic circle and get exclusive access to celestial drops,
        intuitive picks, and radiant offers.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-6 py-3 rounded-full shadow-sm focus:outline-none text-slate-700"
        />
        <button className="bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-black transition">
          Subscribe
        </button>
      </div>
    </section>
  );
};
export default Newsletter;
