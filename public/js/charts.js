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


  //LINE GRAPH
  var userTxnData = {
    labels : [
    window.sessionStorage.getItem('txnMonth1')+'/'+window.sessionStorage.getItem('txnDay1')+'/'+window.sessionStorage.getItem('txnYear1'),
    window.sessionStorage.getItem('txnMonth2')+'/'+window.sessionStorage.getItem('txnDay2')+'/'+window.sessionStorage.getItem('txnYear2'),
    window.sessionStorage.getItem('txnMonth3')+'/'+window.sessionStorage.getItem('txnDay3')+'/'+window.sessionStorage.getItem('txnYear3'),
    window.sessionStorage.getItem('txnMonth4')+'/'+window.sessionStorage.getItem('txnDay4')+'/'+window.sessionStorage.getItem('txnYear4'),
    window.sessionStorage.getItem('txnMonth5')+'/'+window.sessionStorage.getItem('txnDay5')+'/'+window.sessionStorage.getItem('txnYear5')],
    datasets : [

    {

      fillColor : "rgba(172,194,132,0.4)",
      strokeColor : "#ACC26D",
      pointColor : "#fff",
      pointStrokeColor : "#9DB86D",
      data : [
      window.sessionStorage.getItem('txnCost1'),
      window.sessionStorage.getItem('txnCost2'),
      window.sessionStorage.getItem('txnCost3'),
      window.sessionStorage.getItem('txnCost4'),
      window.sessionStorage.getItem('txnCost4')]
    }
    ]
    }
  var user = document.getElementById('line-graph').getContext('2d');
  new Chart(user).Line(userTxnData);


  //PIE CHART
  (function() {

  var pieData = [
  {
    value: 20,
    color: '#878BB6'
  },
  {
    value: 40,
    color: '#4ACAB4'
  },
  {
    value: 10,
    color: '#FF8153'
  },
  {
    value: 30,
    color: '#FFEA88'
  }
  ];
  var pieOptions = {
    segmentShowStroke: false,
    animateScale: true
  };
  var countries = document.getElementById('pie-chart').getContext('2d');
  new Chart(countries).Pie(pieData, pieOptions);
  })();


});
