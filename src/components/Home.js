import React from "react";

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Gambar */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Cheesecake"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Konten */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Mighty Super Cheesecake
          </h2>
          <p className="text-gray-600">
            Look no further for a creamy and ultra-smooth classic cheesecake
            recipe. You can never deny the simple decadence.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
