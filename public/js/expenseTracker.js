$(document).ready(function() {

  $('#expenseForm').submit(function(e) {
    return false;
  })

  var Transaction = function(date, expense, cost){
    this.date = date;
    this.expense = expense;
    this.cost = cost;
  };

  $('#tableRender').click(function() {
    var expenses = [];
    var txnMonth = $("input[name='fmMonth']").val();
    var txnDay = $("input[name='fmDay']").val();
    var txnYear = $("input[name='fmYear']").val();
    var txnDate = txnMonth + txnDay + txnYear;

    var txnExpense = $("input[name='fmExpense']").val();
    var txnCost = $("input[name='fmCost']").val();

    expenses.push(new Transaction(txnDate, txnExpense, txnCost));
    console.log(expenses[0]);
  })

});
