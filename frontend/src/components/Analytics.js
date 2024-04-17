import React from "react";
import { Progress } from "antd";
import "../resources/analytics.css";

function Analytics({ transactions }) {
  const totalTransactions = transactions.length;
  const totalIncomeTransactions = transactions.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenseTransactions = transactions.filter(
    (transaction) => transaction.type === "expense"
  );


  const totalIncomeTurnover = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalExpenseTurnover = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const categories = [
    "salary",
    "freelance",
    "food",
    "travel",
    "entertainment",
    "medical",
    "education",
    "investment",
    "sport",
    "gift",
    "transport",
    "house",
    "government",
  ];

  return (
    <div className="analytics">
      <div className="row">
        <div className="col-md-6 mt-3">
          <div className="transactions-count mx-5">
            <h4>Total Transactions: {totalTransactions}</h4>
            <hr />
            <h5>Income: {totalIncomeTransactions.length}</h5>
            <h5>Expense: {totalExpenseTransactions.length}</h5>
          </div>
        </div>

        <div className="col-md-6 mt-3">
          <div className="transactions-count mx-5">
            <h4>Analytics</h4>
            <hr />
            <h5>Total Income: {totalIncomeTurnover}</h5>
            <h5>Total Expense: {totalExpenseTurnover}</h5>
          </div>
        </div>
      </div>

      <div className="row mt-5">

        <div className="col-md-6">
          <div className="category-analysis">
            <h4>Income - Category Wise</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter((t) => t.type === "income" && t.category === category)
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && <div className="category-card">
                  <h5>{category}</h5>
                  <h5> total: {amount}</h5>
                  <Progress strokeColor="#D507FD" percent={((amount / totalIncomeTurnover) * 100).toFixed(0)} />
                </div>
              );
            })}
          </div>

        </div>
        <div className="col-md-6">
          <div className="category-analysis">
            <h4>Expense - Category Wise</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter((t) => t.type === "expense" && t.category === category)
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && <div className="category-card">
                  <h5>{category}</h5>
                  <h5> total: {amount}</h5>
                  <Progress strokeColor="#D507FD" percent={((amount / totalExpenseTurnover) * 100).toFixed(0)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
