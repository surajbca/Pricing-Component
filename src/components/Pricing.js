import React from "react";

const Pricing = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-400">
            Choose a plan that suits your needs.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pricing Card 1 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 bg-white dark:bg-gray-700">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              Basic Plan
            </h3>
            <p className="mt-4 text-2xl font-extrabold text-gray-900 dark:text-white">
              $10/mo
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="ml-3 text-base leading-6 text-gray-500 dark:text-gray-300">
                  Feature 1
                </p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="ml-3 text-base leading-6 text-gray-500 dark:text-gray-300">
                  Feature 2
                </p>
              </li>
            </ul>
            <div className="mt-8">
              <div className="rounded-lg shadow-md">
                <a
                  href="#"
                  className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>

          {/* Pricing Card 2 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 bg-white dark:bg-gray-700">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              Pro Plan
            </h3>
            <p className="mt-4 text-2xl font-extrabold text-gray-900 dark:text-white">
              $30/mo
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="ml-3 text-base leading-6 text-gray-500 dark:text-gray-300">
                  Feature 1
                </p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="ml-3 text-base leading-6 text-gray-500 dark:text-gray-300">
                  Feature 2
                </p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="ml-3 text-base leading-6 text-gray-500 dark:text-gray-300">
                  Feature 3
                </p>
              </li>
            </ul>
            <div className="mt-8">
              <div className="rounded-lg shadow-md">
                <a
                  href="#"
                  className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>

          {/* Pricing Card 3 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 bg-white dark:bg-gray-700">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              Enterprise Plan
            </h3>
            <p className="mt-4 text-2xl font-extrabold text-gray-900 dark:text-white">
              $60/mo
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="ml-3 text-base leading-6 text-gray-500 dark:text-gray-300">
                  Feature 1
                </p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="ml-3 text-base leading-6 text-gray-500 dark:text-gray-300">
                  Feature 2
                </p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="ml-3 text-base leading-6 text-gray-500 dark:text-gray-300">
                  Feature 3
                </p>
              </li>
            </ul>
            <div className="mt-8">
              <div className="rounded-lg shadow-md">
                <a
                  href="#"
                  className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
