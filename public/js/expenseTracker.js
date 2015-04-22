$(document).ready(function() {
  var expenses = [];
  var txnMonth, txnDay, txnYear, txnDate;

  $('#expenseForm').submit(function(e) {
    return false;
  })

  var Transaction = function(date, expense, cost){
    this.date = date;
    this.expense = expense;
    this.cost = cost;
  };

  $('#tableRender').click(function() {
    expenses = [];
    txnMonth = $("select[name='fmMonth']").val();
    txnDay = $("select[name='fmDay']").val();
    txnYear = $("select[name='fmYear']").val();
    txnDate = txnMonth + txnDay + txnYear;

    txnExpense = $("input[name='fmExpense']").val();
    txnCost = $("input[name='fmCost']").val();

    expenses.push(new Transaction(txnDate, txnExpense, txnCost));
    $('<tr><td>'+txnMonth+'/'+txnDay+'/'+txnYear+'</td>' + '<td>'+txnExpense+'</td>' + '<td>$'+txnCost+'</td></tr>').appendTo('#expenseTable');
  })//end click function




  $('#viewGraph').click(function(){
    //Store info in session storage
    if (window.sessionStorage) { //check if browser has windows.sessionStorage object

      //store info in session storage
      sessionStorage.setItem('table', $("#expenseTable"));



      //table.text = sessionstorage.getItem($('#expenseTable')); //element populated by sessionStorage
      //table.addEventListener('input', function() {
      //  sessionStorage.setItem('expenseTable', table.text);
      //}, false);




    } else {
     alert('Sorry. Your browser does not support session storage.');
   };
  })//end button click

});//end document.ready
