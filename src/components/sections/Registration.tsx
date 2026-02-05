import React, { useState } from "react";
import { Check, AlertCircle } from "lucide-react";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section
      id="register"
      className="py-20 md:py-32 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 dark:from-gray-950 dark:via-purple-950 dark:to-gray-950 relative overflow-hidden transition-colors"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Don't Miss Out
            </h2>
            <p className="text-lg text-purple-200 dark:text-purple-300 mb-8 leading-relaxed">
              Join 2000+ college students for the most exciting tech event of
              the year. Early bird tickets are available now with 30% discount!
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                "Access to all 100+ workshops and talks",
                "Networking with industry professionals",
                "Free meals and refreshments",
                "Event merchandise and goodies",
                "Certificate of participation",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="p-6 bg-white/10 dark:bg-white/5 backdrop-blur rounded-xl border border-white/20">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-white">₹299</span>
                <span className="text-lg text-purple-300 line-through">
                  ₹499
                </span>
              </div>
              <p className="text-purple-200 dark:text-purple-300 text-sm">
                Early bird price (Limited slots)
              </p>
            </div>
          </div>

          {/* Right Content - Registration Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Register Today
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Get your ticket and secure your spot
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              {/* College Input */}
              <div>
                <label
                  htmlFor="college"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  College/University
                </label>
                <input
                  type="text"
                  id="college"
                  placeholder="Your institution"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-300">
                      Registration submitted!
                    </p>
                    <p className="text-green-700 dark:text-green-400 text-sm">
                      Check your email for ticket details.
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105"
              >
                Get My Ticket Now
              </button>

              {/* Terms */}
              <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                By registering, you agree to our{" "}
                <a
                  href="#"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Privacy Policy
                </a>
              </p>
            </form>

            {/* Social Proof */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                Join Students From
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "IIT Delhi",
                  "BITS Pilani",
                  "Ashoka Univ",
                  "DU",
                  "VIT",
                  "JIIT",
                ].map((college, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                  >
                    {college}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur border border-white/20 rounded-xl p-8">
            <h4 className="text-lg font-bold text-white mb-3">
              Will I get a refund?
            </h4>
            <p className="text-purple-200 dark:text-purple-300 text-sm">
              Yes, 100% refund available till 2 days before the event. No
              questions asked.
            </p>
          </div>
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur border border-white/20 rounded-xl p-8">
            <h4 className="text-lg font-bold text-white mb-3">
              What if I can't attend?
            </h4>
            <p className="text-purple-200 dark:text-purple-300 text-sm">
              You'll get access to recorded sessions and resource materials for
              3 months.
            </p>
          </div>
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur border border-white/20 rounded-xl p-8">
            <h4 className="text-lg font-bold text-white mb-3">
              Any group discounts?
            </h4>
            <p className="text-purple-200 dark:text-purple-300 text-sm">
              Yes! Groups of 5+ get 20% off. Contact us at group@v2fest.com
            </p>
          </div>
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur border border-white/20 rounded-xl p-8">
            <h4 className="text-lg font-bold text-white mb-3">
              Need a college pass?
            </h4>
            <p className="text-purple-200 dark:text-purple-300 text-sm">
              Event organizers can register with a special code. Email
              organizers@v2fest.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
