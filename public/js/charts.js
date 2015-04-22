$(document).ready(function() {
  $('<tr><td>'+
    window.sessionStorage.getItem('txnMonth1')+'/'+
    window.sessionStorage.getItem('txnDay1')+'/'+
    window.sessionStorage.getItem('txnYear1')+'</td>'+
    '<td>'+window.sessionStorage.getItem('txnExpense1')+'</td>'+
    '<td>$'+window.sessionStorage.getItem('txnCost1')+'</td></tr>').appendTo('#expenseTable');

  if (window.sessionStorage.getItem('txnMonth2')){
    $('<tr><td>'+
      window.sessionStorage.getItem('txnMonth2')+'/'+
      window.sessionStorage.getItem('txnDay2')+'/'+
      window.sessionStorage.getItem('txnYear2')+'</td>'+
      '<td>'+window.sessionStorage.getItem('txnExpense2')+'</td>'+
      '<td>$'+window.sessionStorage.getItem('txnCost2')+'</td></tr>').appendTo('#expenseTable');
  };

  if (window.sessionStorage.getItem('txnMonth3')){
    $('<tr><td>'+
      window.sessionStorage.getItem('txnMonth3')+'/'+
      window.sessionStorage.getItem('txnDay3')+'/'+
      window.sessionStorage.getItem('txnYear3')+'</td>'+
      '<td>'+window.sessionStorage.getItem('txnExpense3')+'</td>'+
      '<td>$'+window.sessionStorage.getItem('txnCost3')+'</td></tr>').appendTo('#expenseTable');
  };

  if (window.sessionStorage.getItem('txnMonth4')){
    $('<tr><td>'+
      window.sessionStorage.getItem('txnMonth4')+'/'+
      window.sessionStorage.getItem('txnDay4')+'/'+
      window.sessionStorage.getItem('txnYear4')+'</td>'+
      '<td>'+window.sessionStorage.getItem('txnExpense4')+'</td>'+
      '<td>$'+window.sessionStorage.getItem('txnCost4')+'</td></tr>').appendTo('#expenseTable');
  };

  if (window.sessionStorage.getItem('txnMonth5')){
    $('<tr><td>'+
      window.sessionStorage.getItem('txnMonth5')+'/'+
      window.sessionStorage.getItem('txnDay5')+'/'+
      window.sessionStorage.getItem('txnYear5')+'</td>'+
      '<td>'+window.sessionStorage.getItem('txnExpense5')+'</td>'+
      '<td>$'+window.sessionStorage.getItem('txnCost5')+'</td></tr>').appendTo('#expenseTable');
  };


});
