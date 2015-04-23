$(document).ready(function() {
  var expenses;
  var i = 0; //index created for adding user input to session storage
  var txnMonth, txnDay, txnYear, txnDate, txnCategory;
  var catAuto = [];
  var catHousing = [];

  $('#expenseForm').submit(function(e) { //override form default so it
    return false;                        //doesn't refresh with submit.
  })

  var Transaction = function(date, expense, category, cost){
    this.date = date;
    this.expense = expense;
    this.category = category;
    this.cost = cost;
  };

  $('#tableRender').click(function() {
    i++;
    expenses = []; //array of objects

    //Get input values
    txnIncome = $("input[name='fmIncome']").val();
    txnMonth = $("select[name='fmMonth']").val();
    txnDay = $("select[name='fmDay']").val();
    txnYear = $("select[name='fmYear']").val();
    txnDate = txnMonth + txnDay + txnYear;
    txnExpense = $("input[name='fmExpense']").val();
    txnCost = $("input[name='fmCost']").val();
    txnCategory = $("select[name='fmCategory']").val();

    //Push input values into an array of objects
    expenses.push(new Transaction(txnDate, txnExpense, txnCategory, txnCost));

    //Push to right category array
    switch(txnCategory) {
      case 'Auto':
        catAuto.push(txnCost);
        break;
      case 'Housing':
        catHousing.push(txnCost);
    }

    //Render new row in table with buttonClick
    $('<tr><td>'+txnMonth+'/'+txnDay+'/'+txnYear+'</td>' + '<td>'+txnExpense+'</td>' + '<td>$'+txnCost+'</td></tr>').appendTo('#expenseTable');

    if (window.sessionStorage) {
      //store input data in session storage
      sessionStorage.setItem('incomeAmt', txnIncome); //Since this doesn't change, no '+i' needed
      sessionStorage.setItem('txnMonth'+i, txnMonth);
      sessionStorage.setItem('txnDay'+i, txnDay);
      sessionStorage.setItem('txnYear'+i, txnYear);
      sessionStorage.setItem('txnExpense'+i, txnExpense);
      sessionStorage.setItem('txnCategory'+i, txnCategory);
      sessionStorage.setItem('txnCost'+i, txnCost);

      //store arrays of categories in session storage
      sessionStorage.setItem('sessionCatAuto', catAuto);
      sessionStorage.setItem('sessionCatHousing', catHousing);

    } else {
      alert('Sorry. Your browser does not support session storage.');
    };
  })//end click function

});//end document.ready
