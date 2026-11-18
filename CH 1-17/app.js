//ques:5
console.log("Hello... I can run JS through my web browser's console")

//chapter:2

//ques:1
var username = ""

//ques:2
var myName = "Maaz Coder"

//ques:3
var message = "Hello World"
alert(message)

//ques:4
var student = "John Bhai"
alert(student)

var age = "15 years old"
alert(age)

var result ="Certified Mobile and App Development Course"
alert(result)

//ques:5
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(pizza)

//chapter:3

//ques:1
var myAge = "15 year old"
alert(myAge)
console.log(myAge)

//ques:2
var warning = "You Have visited this site for 14 times!"
alert(warning)
console.log(warning)

//ques:3
var birthday = "26-04-2011"
alert(birthday)
console.log(birthday)

//ques:4
// Store visitor's name
var visitorName = "John Doe";

// Store product title
var productTitle = "T-shirt";

// Store quantity
var quantity = 5;

// Show message in browser
document.write(
    visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store"
);


//chapter:4

// Question 1: Declare 3 variables in one statement
var name = "Maaz", age = 15, city = "Karachi";

// Question 2: 5 Legal and 5 Illegal Variable Names

// 5 Legal Variable Names
var userName = "Maaz";
var _name = "Ali";
var $price = 500;
var student1 = "Ahmed";
var myVariable = "Hello";

// 5 Illegal Variable Names
// var 1name = "Maaz";
// var my-name = "Ali";
// var var = "Hello";
// var my name = "Ahmed";
// var @price = 500;

// Question 3: Display Rules for Naming JS Variables

document.write("<h2>Rules for naming JS variables</h2>");

document.write("<p>Variable names can only contain letters, numbers, dollar signs and underscores.</p>");

document.write("<p>Variables must begin with a letter, dollar sign or underscore.</p>");

document.write("<p>Variable names are case sensitive.</p>");

document.write("<p>Variable names should not be JS keywords.</p>");

//chapter:5

//ques:1
var num1 = 10;
var num2 = 20;

var sum = num1 + num2;

document.write("Sum of two numbers is: " + sum);

//ques:2
var num1 = 20;
var num2 = 10;

var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

document.write("Subtraction: " + subtraction + "<br>");
document.write("Multiplication: " + multiplication + "<br>");
document.write("Division: " + division + "<br>");
document.write("Modulus: " + modulus);

//ques:3
var num;

document.write("Value after variable declaration is: " + num + "<br>");

num = 5;

document.write("Initial value: " + num + "<br>");

num++;

document.write("Value after increment is: " + num + "<br>");

num = num + 7;

document.write("Value after addition is: " + num + "<br>");

num--;

document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;

document.write("The remainder is: " + remainder);

//ques:4
var ticketPrice = 600;
var numberOfTickets = 5;

var totalCost = ticketPrice * numberOfTickets;

document.write("Total cost of 5 movie tickets is: " + totalCost + " PKR");

//ques:5
var number = 4;

document.write("Multiplication Table of " + number + "<br><br>");

document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10));

//ques:7
var priceItem1 = 500;
var priceItem2 = 800;

var quantityItem1 = 2;
var quantityItem2 = 1;

var shippingCharges = 200;

var totalCost = (priceItem1 * quantityItem1) +
                (priceItem2 * quantityItem2) +
                shippingCharges;

document.write("<h2>Shopping Cart Receipt</h2>");

document.write("Price of Item 1: " + priceItem1 + " PKR<br>");
document.write("Quantity of Item 1: " + quantityItem1 + "<br>");

document.write("Price of Item 2: " + priceItem2 + " PKR<br>");
document.write("Quantity of Item 2: " + quantityItem2 + "<br>");

document.write("Shipping Charges: " + shippingCharges + " PKR<br>");

document.write("Total Cost: " + totalCost + " PKR");

//ques:8
var totalMarks = 550;
var marksObtained = 450;

var percentage = (marksObtained / totalMarks) * 100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");

//ques:9
var totalPKR = (10 * 104.80) + (25 * 28);

document.write("Total Currency in Pakistani Rupees: " + totalPKR + " PKR");

//ques:10
var number = 5;

var result = ((number + 5) * 10) / 2;

document.write("Final Result: " + result);

//ques:11
var currentYear = 2026;
var birthYear = 2010;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("They are either " + age1 + " or " + age2 + " years old");

//ques:13
var favoriteSnack = "Chips";
var currentAge = 16;
var maximumAge = 65;
var amountPerDay = 2;

var totalSnacks = (maximumAge - currentAge) * 365 * amountPerDay;

document.write("Favorite Snack: " + favoriteSnack + "<br>");

document.write("You will need " + totalSnacks + " " + favoriteSnack +
" to last you until the ripe old age of " + maximumAge);

//chapter:6

//ques:1
var a = 10;

document.write("The value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a);

//ques:2
var a = 2;
var b = 1;

var result = --a - --b + ++b + b--;

document.write("Value of a is: " + a + "<br>");
document.write("Value of b is: " + b + "<br>");
document.write("Value of result is: " + result);

//ques:3
var userName = prompt("Please enter your name:");

alert("Hello " + userName + "! Welcome to my website.");

//ques:5
var number = prompt("Enter a number for multiplication table:");

if (number === null || number.trim() === "") {
    number = 5;
} else {
    number = Number(number);
}

document.write("<h2>Multiplication Table of " + number + "</h2>");

document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10));

//ques:6
var subject1 = prompt("Enter the first subject name:");
var subject2 = prompt("Enter the second subject name:");
var subject3 = prompt("Enter the third subject name:");

var totalMarks = 100;

var marks1 = Number(prompt("Enter obtained marks in " + subject1 + ":"));
var marks2 = Number(prompt("Enter obtained marks in " + subject2 + ":"));
var marks3 = Number(prompt("Enter obtained marks in " + subject3 + ":"));

var obtainedMarks = marks1 + marks2 + marks3;

var totalPossibleMarks = totalMarks * 3;

var percentage = (obtainedMarks / totalPossibleMarks) * 100;

document.write("<h2>Student Marks Sheet</h2>");

document.write("<table border='1' cellpadding='8'>");

document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject1 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + marks1 + "</td>");
document.write("<td>" + marks1 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject2 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + marks2 + "</td>");
document.write("<td>" + marks2 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject3 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + marks3 + "</td>");
document.write("<td>" + marks3 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th>Total</th>");
document.write("<th>" + totalPossibleMarks + "</th>");
document.write("<th>" + obtainedMarks + "</th>");
document.write("<th>" + percentage.toFixed(0) + "%</th>");
document.write("</tr>");

document.write("</table>");

//chapter:7 (is chapter ka kam ChatGPT sy questions generate karwa k kia ha.)

//ques:1
var result = 3 + 4 * 2;

document.write("Result without parentheses: " + result + "<br>");

result = (3 + 4) * 2;

document.write("Result with parentheses: " + result + "<br>");

document.write("Parentheses change the order of calculation.");

//ques:2
var result1 = 20 - 6 / 2 + 3 * 2;

document.write("Result without parentheses: " + result1 + "<br>");

var result2 = (20 - 6) / 2 + 3 * 2;

document.write("Result with parentheses: " + result2);

//ques:3
var a = 8;
var b = 4;
var c = 2;

var result1 = a + b * c;
var result2 = (a + b) * c;

document.write("a + b * c = " + result1 + "<br>");

document.write("(a + b) * c = " + result2);

//ques:4
var price1 = 500;
var price2 = 300;

var quantity1 = 2;
var quantity2 = 3;

var shipping = 200;

var totalBill = (price1 * quantity1) + (price2 * quantity2) + shipping;

document.write("Price of first item: " + price1 + " PKR<br>");

document.write("Price of second item: " + price2 + " PKR<br>");

document.write("Shipping charges: " + shipping + " PKR<br>");

document.write("Total Bill: " + totalBill + " PKR");

//ques:5
var result1 = (6 + 4) * 2;

var result2 = 6 + (4 * 2);

document.write("Expression 1: (6 + 4) * 2 = " + result1 + "<br>");

document.write("Expression 2: 6 + (4 * 2) = " + result2 + "<br>");


//Chapter:10 (Ai sy questions generate kiye gye hn...)

//ques:1 Positive number
var num = Number(prompt("Enter a number"));

if (num > 0) {
    alert("Positive Number");
}

//ques:2 Voting Eligibility
var age = Number(prompt("Enter your age"));

if (age >= 18) {
    alert("You are eligible for voting");
}

//ques:3 Password checker
var password = prompt("Enter your password");

if (password == "maaz123") {
    alert("Login Successful");
}

//ques:4 Temperature checker
var temperature = Number(prompt("Enter temperature"));

if (temperature > 30) {
    alert("It's Hot Today");
}

//  // Chapter:11

//ques:1 Number comparison
var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));

if (num1 == num2) {
    alert("Both numbers are equal");
}

if (num1 != num2) {
    alert("Both numbers are not equal");
}

//ques:2 Age Comparison
var age1 = Number(prompt("Enter first person's age"));
var age2 = Number(prompt("Enter second person's age"));

if (age1 > age2) {
    alert("First person is older");
}

//ques:3 Marks Checker
var obtained = Number(prompt("Enter obtained marks"));
var total = Number(prompt("Enter total marks"));

if (obtained <= total) {
    alert("Valid Marks");
}

//ques:4 Shopping Budget
var budget = Number(prompt("Enter your budget"));
var price = Number(prompt("Enter product price"));

if (price <= budget) {
    alert("You can buy this product");
}

if (price > budget) {
    alert("Your budget is not enough");
}

//  //chapter:12

//ques:1 Even or Odd
var num = Number(prompt("Enter a number"));

if (num % 2 == 0) {
    alert("Even Number");
}
else {
    alert("Odd Number");
}

//ques:2 Pass or Fail
var marks = Number(prompt("Enter your marks"));

if (marks >= 40) {
    alert("Pass");
}
else {
    alert("Fail");
}

//ques:3 Grade Calculator
var marks = Number(prompt("Enter your marks"));

if (marks >= 90 && marks <= 100) {
    alert("Grade A+");
}
else if (marks >= 80) {
    alert("Grade A");
}
else if (marks >= 70) {
    alert("Grade B");
}
else if (marks >= 60) {
    alert("Grade C");
}
else if (marks >= 50) {
    alert("Grade D");
}
else if (marks >= 0) {
    alert("Fail");
}
else {
    alert("Invalid Marks");
}

//ques:4 Simple Calculator
var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));

var operator = prompt("Enter operator (+, -, *, /)");

if (operator == "+") {
    alert(num1 + num2);
}
else if (operator == "-") {
    alert(num1 - num2);
}
else if (operator == "*") {
    alert(num1 * num2);
}
else if (operator == "/") {
    if (num2 != 0) {
        alert(num1 / num2);
    }
    else {
        alert("Cannot divide by zero");
    }
}
else {
    alert("Invalid Operator");
}

//   //chapter:13

//ques:1 Login System
var username = prompt("Enter username");

var password = prompt("Enter password");

if (username == "maaz") {

    if (password == "12345") {
        alert("Login Successful");
    }
    else {
        alert("Incorrect Password");
    }

}
else {
    alert("Incorrect Username");
}

//ques:2 Scholarship Eligibility
var marks = Number(prompt("Enter your marks"));

var age = Number(prompt("Enter your age"));

if (marks >= 80 && age <= 18) {
    alert("Eligible for Scholarship");
}
else {
    alert("Not Eligible");
}

//ques:3 ATM Withdrawal System
var balance = Number(prompt("Enter account balance"));

var amount = Number(prompt("Enter withdrawal amount"));

if (balance > 0) {

    if (amount > 0 && amount <= balance) {

        alert("Transaction Successful");

        alert("Remaining Balance: " + (balance - amount));

    }
    else {
        alert("Invalid Withdrawal Amount");
    }

}
else {
    alert("Insufficient Account Balance");
}

//ques:4 University Admission System
var matric = Number(prompt("Enter Matric marks"));

var inter = Number(prompt("Enter Intermediate marks"));

var age = Number(prompt("Enter your age"));

if (matric >= 60) {

    if (inter >= 65) {

        if (age >= 18) {

            alert("Admission Successful");

        }
        else {
            alert("Age Requirement Not Met");
        }

    }
    else {
        alert("Intermediate Marks Not Enough");
    }

}
else {
    alert("Matric Marks Not Enough");
}

//  //chapter:14

//ques:1 Student Admission System
var age = Number(prompt("Enter your age"));

var marks = Number(prompt("Enter your matric marks"));

if (age >= 18) {

    if (marks >= 60) {
        alert("Admission Eligible");
    }
    else {
        alert("Marks are not enough");
    }

}
else {
    alert("Age requirement not completed");
}

//ques:2 ATM PIN Verification
var pin = Number(prompt("Enter your ATM PIN"));

if (pin == 1234) {

    var balance = Number(prompt("Enter your balance"));

    if (balance >= 1000) {
        alert("Withdrawal Allowed");
    }
    else {
        alert("Insufficient Balance");
    }

}
else {
    alert("Incorrect PIN");
}

//ques:3 Online Shopping Discount
var amount = Number(prompt("Enter shopping amount"));

if (amount >= 5000) {

    var member = prompt("Are you a premium member? Yes/No");

    if (member == "Yes") {
        alert("You got 20% Discount");
    }
    else {
        alert("You got 10% Discount");
    }

}
else {
    alert("No Discount");
}

//ques:4 Employee Salary Bonus
var salary = Number(prompt("Enter your salary"));

if (salary >= 50000) {

    var experience = Number(prompt("Enter your experience"));

    if (experience >= 5) {
        alert("You got 15000 Bonus");
    }
    else {
        alert("You got 5000 Bonus");
    }

}
else {
    alert("No Bonus");
}

//   //Chapter:15-17 (All questions created or generated from AI only questions not solutions...)

//ques:1 Student Names
var students = ["Ali", "Ahmed", "Maaz", "Hamza", "Usman"];

alert("First Student: " + students[0]);

alert("Last Student: " + students[4]);

//ques:2 Mobile Brands
var mobiles = ["Samsung", "Apple", "Infinix", "Vivo", "Oppo", "Tecno"];

alert("Index 2: " + mobiles[2]);

alert("Index 4: " + mobiles[4]);

alert("Total Mobile Brands: " + mobiles.length);

//ques:3 Subject List
var subjects = ["English", "Urdu", "Math", "Physics", "Computer"];

subjects[2] = "Computer Science";

alert(subjects);

//ques:4 Number Collection
var numbers = [10, 20, 30, 40, 50, 60, 70, 80];

alert("First Number: " + numbers[0]);

alert("Fourth Number: " + numbers[3]);

alert("Last Number: " + numbers[7]);

alert("Total Numbers: " + numbers.length);

numbers[5] = 100;

alert("Updated Array: " + numbers);

//chapter:16 questions

//ques:1 Shopping Cart
var cart = ["Laptop", "Mobile", "Keyboard"];

cart.push("Mouse");

cart.push("Headphones");

alert("Updated Cart: " + cart);

//ques:2 Student Registration
var students = ["Ali", "Ahmed", "Hamza", "Usman"];

students.unshift("Maaz");

students.unshift("Hassan");

alert("Updated Students: " + students);

//ques:3 Food Items
var foods = ["Pizza", "Burger", "Biryani", "Pasta", "Sandwich"];

foods.pop();

foods.shift();

alert("Updated Foods: " + foods);

//ques:4 Game Collection
var games = ["Minecraft", "Roblox", "GTA", "Free Fire"];

games.push("PUBG");

games.push("Valorant");

games.unshift("Fortnite");

games.pop();

games.shift();

alert("Final Games: " + games);

alert("Total Games: " + games.length);

//chapter:17

//ques:1 Remove Products
var products = ["Laptop", "Mobile", "Mouse", "Keyboard", "Monitor", "Printer"];

products.splice(2, 2);

alert("Updated Products: " + products);

//ques:2 Insert New Subjects
var subjects = ["English", "Urdu", "Math", "Physics"];

subjects.splice(2, 0, "JavaScript");

alert("Updated Subjects: " + subjects);

//ques:3 Extract Cities
var cities = ["Karachi", "Lahore", "Islamabad", "Multan", "Peshawar", "Quetta"];

var newCities = cities.slice(1, 4);

alert("Extracted Cities: " + newCities);

alert("Original Cities: " + cities);

//ques:4 Array Challenge (Tricky)
var courses = ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Node.js"];

courses.splice(3, 1);

courses.splice(3, 0, "PHP");

var newCourses = courses.slice(0, 3);

alert("Original Array: " + courses);

alert("Extracted Array: " + newCourses);