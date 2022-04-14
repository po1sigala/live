// TODO: What does 'this' refer to?
console.log(this);

// TODO: What does 'this' refer to?
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: Run the helloThis() function to check your results
helloThis();

// TODO: Call the object methods to check results
child.ageTenYears();
investor.investment.investmentGrowth();