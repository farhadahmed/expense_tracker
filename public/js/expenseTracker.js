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
    var txnMonth = $("select[name='fmMonth']").val();
    var txnDay = $("select[name='fmDay']").val();
    var txnYear = $("select[name='fmYear']").val();
    var txnDate = txnMonth + txnDay + txnYear;

    var txnExpense = $("input[name='fmExpense']").val();
    var txnCost = $("input[name='fmCost']").val();

    expenses.push(new Transaction(txnDate, txnExpense, txnCost));
    $('<tr><td>'+txnMonth+'/'+txnDay+'/'+txnYear+'</td>' + '<td>'+txnExpense+'</td>' + '<td>$'+txnCost+'</td></tr>').appendTo('#expenseTable');

    //Store info in session storage
    if (window.sessionstorage) {
      var table = $('#expenseTable'); //get table element
      table.text = sessionstorage.getItem($('#expenseTable')); //element populated by sessionStorage
      table.addEventListener('input', funnction() {
        sessionStorage.setItem('expenseTable', table.text);
      }, false);
    };
  })

});
