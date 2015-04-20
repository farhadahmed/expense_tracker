$(function () {
  var expenses = [];
  var txnDate = fmMonth.value + fmDay.value + fmYear.value;

  var Transaction = function(date, expense, cost){
    this.date = date;
    this.expense = expense;
    this.cost = cost;
    this.category = category;
  }

  $('#tableRender').click(function() {
    expenses.push(new Transaction(txnDate, fmExpense.value, fmCost.value))
  });


})();
