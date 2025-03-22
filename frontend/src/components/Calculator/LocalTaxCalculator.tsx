import React, { useState } from "react";

const taxBrackets = [
  { limit: 150000, rate: 0, tax: 0 },
  { limit: 83333, rate: 6, tax: 0 },
  { limit: 41666, rate: 18, tax: 0 },
  { limit: 41666, rate: 24, tax: 0 },
  { limit: 41666, rate: 30, tax: 0 },
  { limit: Infinity, rate: 36, tax: 0 },
];

const LocalTaxCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [monthlyTax, setMonthlyTax] = useState(0);
  const [annualIncome, setAnnualIncome] = useState(0);
  const [annualTax, setAnnualTax] = useState(0);
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [taxDetails, setTaxDetails] = useState<
    { tax: number; limit: number; rate: number }[]
  >([]);

  const calculateTax = (income) => {
    let remainingIncome = income;
    let totalTax = 0;
    const details = taxBrackets.map((bracket, index) => {
      if (remainingIncome <= 0) return { ...bracket, tax: 0 };

      const taxableAmount = Math.min(remainingIncome, bracket.limit);
      const tax = (taxableAmount * bracket.rate) / 100;
      totalTax += tax;
      remainingIncome -= taxableAmount;

      return { ...bracket, tax };
    });

    setTaxDetails(details);
    return totalTax;
  };
  const handleIncomeChange = (e) => {
    const income = parseFloat(e.target.value) || 0;
    setMonthlyIncome(income);
    setAnnualIncome(income * 12);

    const tax = calculateTax(income);
    setMonthlyTax(tax);
    setAnnualTax(tax * 12);
    setMonthlyTotal(income - tax);
  };

  const resetCalculator = () => {
    setMonthlyIncome(0);
    setMonthlyTax(0);
    setAnnualIncome(0);
    setAnnualTax(0);
    setMonthlyTotal(0);
    setTaxDetails([]);
  };
  return (
    <div>
      {/* Local Tax Calculator */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white ">
        <div className="bg-gray-800 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Local Tax Calculator
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="monthlyIncome" className="block text-gray-300">
                Monthly Income (LKR)
              </label>
              <div>
                <div className="mt-2">
                  <div className="flex items-center border rounded-md bg-gray-700  pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <div className="shrink-0 text-base text-white  select-none sm:text-sm/6">
                      Rs.
                    </div>
                    <input
                      type="number"
                      id="monthlyIncome"
                      className="block rounded-md min-w-0 grow py-1.5 pr-3 pl-1 text-base bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="0.00"
                      value={monthlyIncome}
                      onChange={handleIncomeChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="monthlyIncomeLKR"
                  className="block text-gray-300"
                >
                  Monthly Income (LKR)
                </label>
                <div>
                  <div className="mt-2">
                    <div className="flex items-center border rounded-md bg-gray-700 pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                      <div className="shrink-0 text-base text-white  select-none sm:text-sm/6">
                        Rs.
                      </div>
                      <input
                        type="number"
                        id="monthlyIncomeLKR"
                        className="block rounded-md min-w-0 grow py-1.5 pr-3 pl-1  text-base bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        placeholder="0.00"
                        disabled
                        value={monthlyIncome}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="monthlyTaxLKR" className="block text-gray-300">
                  Monthly Tax (LKR)
                </label>
                <div>
                  <div className="mt-2">
                    <div className="flex items-center border rounded-md bg-gray-700 pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                      <div className="shrink-0 text-base text-white  select-none sm:text-sm/6">
                        Rs.
                      </div>
                      <input
                        type="number"
                        id="monthlyTaxLKR"
                        className="block rounded-md min-w-0 grow py-1.5 pr-3 pl-1  text-base bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        placeholder="0.00"
                        disabled
                        value={monthlyTax}
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="annualIncome" className="block text-gray-300">
                  Annual Income (LKR)
                </label>
                <div>
                  <div className="mt-2">
                    <div className="flex items-center border rounded-md bg-gray-700 pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                      <div className="shrink-0 text-base text-white  select-none sm:text-sm/6">
                        Rs.
                      </div>
                      <input
                        type="number"
                        id="annualIncome"
                        className="block rounded-md min-w-0 grow py-1.5 pr-3 pl-1  text-base bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        placeholder="0.00"
                        disabled
                        value={annualIncome}
                      />
                    </div>
                  </div>
                </div>

              </div>
              <div>
                <label htmlFor="annualTax" className="block text-gray-300">
                  Annual Tax (LKR)
                </label>
                <div>
                  <div className="mt-2">
                    <div className="flex items-center border rounded-md bg-gray-700 pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                      <div className="shrink-0 text-base text-white  select-none sm:text-sm/6">
                        Rs.
                      </div>
                      <input
                        type="number"
                        id="annualTax"
                        className="block rounded-md min-w-0 grow py-1.5 pr-3 pl-1  text-base bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        placeholder="0.00"
                        disabled
                        value={annualTax}
                      />
                    </div>
                  </div>
                </div>
        
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full table-auto bg-gray-700 text-white rounded-lg">
                <thead>
                  <tr className="border-b justify-center">
                    <th className="py-2 px-4">
                      Monthly Salary (Annual Salary / 12)
                    </th>
                    <th className="py-2 px-4">Rate (%)</th>
                    <th className="py-2 px-4">Tax</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {taxDetails.map((detail, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4">
                        {index === 0
                          ? "Up to 150,000"
                          : `Next ${detail.limit.toLocaleString()} LKR`}
                      </td>
                      <td className="py-2 px-4">{detail.rate}</td>
                      <td className="py-2 px-4">{"Rs. " +detail.tax.toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-2 px-4">Monthly Total</td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4">{"Rs. " + monthlyTotal.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button
              type="button"
              onClick={resetCalculator}
              className="w-full py-2 bg-blue-500 text-white rounded-lg mt-8"
            >
              Reset Calculator
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LocalTaxCalculator;
