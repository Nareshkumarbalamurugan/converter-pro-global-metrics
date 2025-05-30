
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <header className="bg-blue-800 text-white py-5 text-center shadow-lg">
        <h1 className="text-3xl font-bold">ConverterPro</h1>
        <p className="text-blue-100 mt-1">Made by BKND Groups</p>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            All-in-One Unit Converter
          </h2>
          <p className="text-gray-600">
            Convert between different units easily and accurately
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Converter Categories */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">🌍</div>
            <h3 className="font-semibold text-lg mb-2">Area Converter</h3>
            <p className="text-gray-600 text-sm">
              Convert between square meters, feet, acres, hectares, cent, bigha, gunta and more
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">📏</div>
            <h3 className="font-semibold text-lg mb-2">Length Converter</h3>
            <p className="text-gray-600 text-sm">
              Convert between meters, feet, inches, kilometers and more
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">⚖️</div>
            <h3 className="font-semibold text-lg mb-2">Weight Converter</h3>
            <p className="text-gray-600 text-sm">
              Convert between kilograms, pounds, ounces, tons and more
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">🌡️</div>
            <h3 className="font-semibold text-lg mb-2">Temperature Converter</h3>
            <p className="text-gray-600 text-sm">
              Convert between Celsius, Fahrenheit, Kelvin and Rankine
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">💵</div>
            <h3 className="font-semibold text-lg mb-2">Currency Converter</h3>
            <p className="text-gray-600 text-sm">
              Live currency conversion with real-time exchange rates
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">💧</div>
            <h3 className="font-semibold text-lg mb-2">Volume Converter</h3>
            <p className="text-gray-600 text-sm">
              Convert between liters, gallons, cups, milliliters and more
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">⏱️</div>
            <h3 className="font-semibold text-lg mb-2">Time Converter</h3>
            <p className="text-gray-600 text-sm">
              Convert between seconds, minutes, hours, days, weeks and more
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="font-semibold text-lg mb-2">Speed Converter</h3>
            <p className="text-gray-600 text-sm">
              Convert between m/s, km/h, mph, knots and more
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">💻</div>
            <h3 className="font-semibold text-lg mb-2">Digital Storage</h3>
            <p className="text-gray-600 text-sm">
              Convert between bytes, KB, MB, GB, TB and more
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">🔋</div>
            <h3 className="font-semibold text-lg mb-2">Energy Converter</h3>
            <p className="text-gray-600 text-sm">
              Convert between joules, calories, kilowatt-hours and more
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">🧪</div>
            <h3 className="font-semibold text-lg mb-2">Pressure Converter</h3>
            <p className="text-gray-600 text-sm">
              Convert between Pascal, Bar, PSI, atmosphere and more
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">🔌</div>
            <h3 className="font-semibold text-lg mb-2">Power Converter</h3>
            <p className="text-gray-600 text-sm">
              Convert between watts, kilowatts, horsepower and more
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">🧱</div>
            <h3 className="font-semibold text-lg mb-2">Density Converter</h3>
            <p className="text-gray-600 text-sm">
              Convert between kg/m³, g/cm³, lb/ft³ and more
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">🎚️</div>
            <h3 className="font-semibold text-lg mb-2">Fuel Consumption</h3>
            <p className="text-gray-600 text-sm">
              Convert between km/l, l/100km, mpg (US/UK)
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">📐</div>
            <h3 className="font-semibold text-lg mb-2">Angle Converter</h3>
            <p className="text-gray-600 text-sm">
              Convert between degrees, radians, gradians and turns
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">🪜</div>
            <h3 className="font-semibold text-lg mb-2">Height Converter</h3>
            <p className="text-gray-600 text-sm">
              Convert between feet, inches, centimeters, meters and hands
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-blue-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            <a href="mailto:kamaleshkumarbalamurugan@gmail.com" className="text-blue-200 hover:text-white">
              Contact: kamaleshkumarbalamurugan@gmail.com
            </a>
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#about" className="text-blue-200 hover:text-white">About</a>
            <a href="#privacy" className="text-blue-200 hover:text-white">Privacy</a>
            <a href="#terms" className="text-blue-200 hover:text-white">Terms</a>
          </div>
          <p className="mt-4 text-sm text-blue-200">
            &copy; 2024 ConverterPro by BKND Groups. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
