$(document).ready(function() {
  var expenses = [];

  //var txnDate = fmMonth.value + fmDay.value + fmYear.value;
  var Transaction = function(date, expense, cost){
    this.date = date;
    this.expense = expense;
    this.cost = cost;
    this.category = category;
  };

  $('#tableRender').click(function() {
    var testInput = $("input[name='fmMonth']").val();
    alert(testInput);
  })
});


//
//  $('#tableRender').click(function() {
//    expenses.push(new Transaction(3, 2, 1));
//    //expenses.push(new Transaction(txnDate, fmExpense.value, fmCost.value));
//    console.log(expenses);
//  })
//}



