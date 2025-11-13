import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"   style={{ backgroundImage: "/ChatGPT Image Nov 14, 2025, 12_46_38 AM.png')" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Section */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              APPOINTMENT
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Book Your Appointment for Better Construction
            </h1>
            <p className="text-lg text-white mb-12">
              Quick. Easy. Hassle-free.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">
                  123 Wellness Street, New York, NY 10001
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">+1 (800) 123-4567</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">contact@flowdoc.com</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">
                  Mon — Sat: 8:00 AM — 8:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-semibold text-gray-900 mb-2">
                  Select Department
                </label>
                <select
                  id="department"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent text-gray-400 appearance-none bg-white cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23000000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                  }}
                >
                  <option>Choose a department</option>
                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Renovation</option>
                  <option>Architecture</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-gray-900 mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="date"
                      placeholder="Select preferred date"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent text-gray-400 placeholder-gray-400"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8333 3.33333H4.16667C3.24619 3.33333 2.5 4.07952 2.5 5V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V5C17.5 4.07952 16.7538 3.33333 15.8333 3.33333Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.3333 1.66667V5.00001" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.66667 1.66667V5.00001" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.5 8.33333H17.5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-semibold text-gray-900 mb-2">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="time"
                      placeholder="Select preferred time"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent text-gray-400 placeholder-gray-400"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 5V10L13.3333 11.6667" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Briefly describe your concern"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent text-gray-900 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-5 h-5 rounded border-gray-300 text-gray-900 focus:ring-emerald-300 mt-0.5 cursor-pointer"
                  defaultChecked
                />
                <label htmlFor="terms" className="text-sm text-gray-900">
                  I agree to the{' '}
                  <a href="#" className="underline hover:text-emerald-600">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="underline hover:text-emerald-600">
                    Terms of Service
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#000] text-white font-semibold py-4 rounded-full hover:bg-gray-900 transition-colors duration-200"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}