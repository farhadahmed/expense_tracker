$(document).ready(function() {
  //RENDER THE TABLE
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

      fillColor : "rgba(2,136,255,0.5)",
      strokeColor : "blue",
      pointColor : "#fff",
      pointStrokeColor : "#00006B",
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

    //Grab category arrays from session and assign to variable
    var txnIncome = window.sessionStorage.getItem('incomeAmt');
    var tempHousing = window.sessionStorage.getItem('sessionCatHousing');
    var tempAuto = window.sessionStorage.getItem('sessionCatAuto');
    var tempInsurance = window.sessionStorage.getItem('sessionCatInsurance');
    var tempDebts = window.sessionStorage.getItem('sessionCatDebts');
    var tempEntertainment = window.sessionStorage.getItem('sessionCatEntertainment');
    var tempClothing = window.sessionStorage.getItem('sessionCatClothing');
    var tempSavings = window.sessionStorage.getItem('sessionCatSavings');
    var tempMedical = window.sessionStorage.getItem('sessionCatMedical');
    var tempMisc = window.sessionStorage.getItem('sessionCatMisc');

    //Convert stringified arrays back into int arrays
    //Housing
    var catHousing = new Array();
    catHousing = tempHousing.split(','); //catAuto is now an array of string ints
    for (i in catHousing) {
      catHousing[i] = parseInt(catHousing[i]); //catAuto is now an array of ints
    }
    //Auto
    var catAuto = new Array();
    catAuto = tempAuto.split(','); //catAuto is now an array of string ints
    for (i in catAuto) {
      catAuto[i] = parseInt(catAuto[i]); //catAuto is now an array of ints
    }
    //Insurance
    var catInsurance = new Array();
    catInsurance = tempInsurance.split(','); //catInsurance is now an array of string ints
    for (i in catInsurance) {
      catInsurance[i] = parseInt(catInsurance[i]); //catInsurance is now an array of ints
    }
    //Debts
    var catDebts = new Array();
    catDebts = tempDebts.split(','); //catDebts is now an array of string ints
    for (i in catDebts) {
      catDebts[i] = parseInt(catDebts[i]); //catDebts is now an array of ints
    }
    //Entertainment
    var catEntertainment = new Array();
    catEntertainment = tempEntertainment.split(','); //catEntertainment is now an array of string ints
    for (i in catEntertainment) {
      catEntertainment[i] = parseInt(catEntertainment[i]); //catEntertainment is now an array of ints
    }
    //Clothing
    var catClothing = new Array();
    catClothing = tempClothing.split(','); //catClothing is now an array of string ints
    for (i in catClothing) {
      catClothing[i] = parseInt(catClothing[i]); //catClothing is now an array of ints
    }
    //Savings
    var catSavings = new Array();
    catSavings = tempSavings.split(','); //catSavings is now an array of string ints
    for (i in catSavings) {
      catSavings[i] = parseInt(catSavings[i]); //catSavings is now an array of ints
    }
    //Medical
    var catMedical = new Array();
    catMedical = tempMedical.split(','); //catMedical is now an array of string ints
    for (i in catMedical) {
      catMedical[i] = parseInt(catMedical[i]); //catMedical is now an array of ints
    }
    //Misc
    var catMisc = new Array();
    catMisc = tempMisc.split(','); //catMisc is now an array of string ints
    for (i in catMisc) {
      catMisc[i] = parseInt(catMisc[i]); //catMisc is now an array of ints
    }


    //Get sum of arrays
    //Housing
    var housingTotal = 0;
    $.each(catHousing, function() {
      if (!isNaN(this)) {
        housingTotal += this;
      };
    });
    //Auto
    var autoTotal = 0;
    $.each(catAuto, function() {
      if (!isNaN(this)) {
        autoTotal += this;
      };
    });
    //Insurance
    var insuranceTotal = 0;
    $.each(catInsurance, function() {
      if (!isNaN(this)) {
        insuranceTotal += this;
      };
    })
    //Debts
    var debtsTotal = 0;
    $.each(catDebts, function() {
      if (!isNaN(this)) {
        debtsTotal += this;
      }
    })
    //Entertainment
    var entertainmentTotal = 0;
    $.each(catEntertainment, function() {
      if (!isNaN(this)) {
        entertainmentTotal += this;
      };
    })
    //Clothing
    var clothingTotal = 0;
    $.each(catClothing, function() {
      if (!isNaN(this)) {
        clothingTotal += this;
      };
    })
    //Savings
    var savingsTotal = 0;
    $.each(catSavings, function() {
      if (!isNaN(this)) {
        savingsTotal += this;
      };
    });
    //Medical
    var medicalTotal = 0;
    $.each(catMedical, function() {
      if (!isNaN(this)) {
        medicalTotal += this;
      };
    });
    //Misc
    var miscTotal = 0;
    $.each(catMisc, function() {
      if (!isNaN(this)) {
        miscTotal += this;
      };
    })
    console.log('catAuto ' + catAuto);
    console.log('autoTotal ' + autoTotal);
    console.log('catHousing ' + catHousing);
    console.log('housingTotal ' + housingTotal);
    console.log(debtsTotal);


    //Create pie chart
    var pieData = [
    {
      value: (100/(txnIncome/housingTotal)),
      color: '#ADD6FF',
      label: 'Housing'
    },
    {
      value: (100/(txnIncome/autoTotal)),
      color: '#70B8FF',
      label: 'Auto'
    },
    {
      value: (100/(txnIncome/insuranceTotal)),
      color: '#99CCFF',
      label: 'Insurance'
    },
    {
      value: (100/(txnIncome/debtsTotal)),
      color: '#297ACC',
      label: 'Debts'
    },
    {
      value: (100/(txnIncome/entertainmentTotal)),
      color: '#1F5C99',
      label: 'Entertainment'
    },
    {
      value: (100/(txnIncome/clothingTotal)),
      color: '#143D66',
      label: 'Clothing'
    },
    {
      value: (100/(txnIncome/savingsTotal)),
      color: '#3399FF',
      label: 'Savings'
    },
    {
      value: (100/(txnIncome/medicalTotal)),
      color: '#85C2FF',
      label: 'Medical/Dental'
    },
    {
      value: (100/(txnIncome/miscTotal)),
      color: '#5CADFF',
      label: 'Miscellaneous'
    }
    ];
    var pieOptions = {
      segmentShowStroke: false,
      animateScale: true
    };
    var countries = document.getElementById('pie-chart').getContext('2d');
    new Chart(countries).Pie(pieData, pieOptions);
  })();//end pie chart iife


});
