$(document).ready(function() {

  $('#newExpenseForm').submit(function(e) {
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


//
//  $('#tableRender').click(function() {
//    expenses.push(new Transaction(3, 2, 1));
//    //expenses.push(new Transaction(txnDate, fmExpense.value, fmCost.value));
//    console.log(expenses);
//  })
//}



