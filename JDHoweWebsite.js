export default function JDHoweWebsite() {
  return (
    <div className="bg-white text-gray-800">
      <header className="bg-gray-900 text-white p-6 shadow-xl">
        <h1 className="text-4xl font-bold tracking-wide">JD HOWE Remodels and Construction</h1>
        <p className="text-xl mt-2">Trusted Craftsmanship. Timeless Results.</p>
      </header>

      <section className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl shadow-md p-6 bg-gray-100">
          <h2 className="text-2xl font-semibold">New Construction</h2>
          <p className="mt-2">From ground-up builds to custom homes—we do it all with precision and pride.</p>
        </div>
        <div className="rounded-2xl shadow-md p-6 bg-gray-100">
          <h2 className="text-2xl font-semibold">Remodels & Renovations</h2>
          <p className="mt-2">Transform your kitchen, bathroom, or whole home with our expert team.</p>
        </div>
        <div className="rounded-2xl shadow-md p-6 bg-gray-100">
          <h2 className="text-2xl font-semibold">Additions</h2>
          <p className="mt-2">Need more space? We design and build seamless home additions.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-8">
        <h2 className="text-3xl font-bold mb-4">Why Choose JD HOWE?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Licensed & insured</li>
          <li>Over a decade of hands-on experience</li>
          <li>Clear communication and honest pricing</li>
          <li>Attention to detail in every project</li>
        </ul>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white shadow p-4">
            <img src="/kitchen-remodel.jpg" alt="Kitchen Remodel" className="rounded-lg" />
            <h3 className="mt-2 font-semibold">Modern Kitchen Upgrade</h3>
          </div>
          <div className="rounded-xl bg-white shadow p-4">
            <img src="/bathroom-reno.jpg" alt="Bathroom Renovation" className="rounded-lg" />
            <h3 className="mt-2 font-semibold">Spa-Style Bathroom</h3>
          </div>
          <div className="rounded-xl bg-white shadow p-4">
            <img src="/home-addition.jpg" alt="Home Addition" className="rounded-lg" />
            <h3 className="mt-2 font-semibold">Seamless Home Expansion</h3>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 p-8">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Something Great</h2>
        <form className="grid gap-4 max-w-xl mx-auto">
          <input type="text" placeholder="Name" className="p-3 rounded border" />
          <input type="email" placeholder="Email" className="p-3 rounded border" />
          <textarea placeholder="Tell us about your project..." rows="4" className="p-3 rounded border"></textarea>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </section>

      <footer className="bg-gray-900 text-white text-center p-6 mt-8">
        <p>&copy; 2025 JD HOWE Remodels and Construction. All rights reserved.</p>
      </footer>
    </div>
  );
}