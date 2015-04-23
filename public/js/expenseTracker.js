$(document).ready(function() {
  var expenses = [];
  var i = 0; //index created for adding user input to session storage
  var txnMonth, txnDay, txnYear, txnDate;

  $('#expenseForm').submit(function(e) { //override form default so it
    return false;                        //doesn't refresh with submit.
  })

  var Transaction = function(date, expense, cost){
    this.date = date;
    this.expense = expense;
    this.cost = cost;
  };

  $('#tableRender').click(function() {
    i++;
    expenses = [];
    txnMonth = $("select[name='fmMonth']").val();
    txnDay = $("select[name='fmDay']").val();
    txnYear = $("select[name='fmYear']").val();
    txnDate = txnMonth + txnDay + txnYear;

    txnExpense = $("input[name='fmExpense']").val();
    txnCost = $("input[name='fmCost']").val();

    expenses.push(new Transaction(txnDate, txnExpense, txnCost));
    $('<tr><td>'+txnMonth+'/'+txnDay+'/'+txnYear+'</td>' + '<td>'+txnExpense+'</td>' + '<td>$'+txnCost+'</td></tr>').appendTo('#expenseTable');

    if (window.sessionStorage) {
      //store info in session storage
      sessionStorage.setItem('incomeAmt', $("input[name='fmIncome']").val());
      sessionStorage.setItem('txnMonth'+i, $("select[name='fmMonth']").val());
      sessionStorage.setItem('txnDay'+i, $("select[name='fmDay']").val());
      sessionStorage.setItem('txnYear'+i, $("select[name='fmYear']").val());
      sessionStorage.setItem('txnExpense'+i, $("input[name='fmExpense']").val());
      sessionStorage.setItem('txnCost'+i, $("input[name='fmCost']").val());
    } else {
      alert('Sorry. Your browser does not support session storage.');
    };
  })//end click function

});//end document.ready
