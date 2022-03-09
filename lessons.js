let lessons = [
  {
    "id": 1,
    "subject": "Dance",
    "location": "London",
    "price": 7500,
    "image": "images/dance.png",
    "availableInventory": 5,
  
  },
  {
      "id": 2,
      "subject": "Cooking",
      "location": "Bristol",
      "price": 5000,
      "image": "images/cooking.png",
      "availableInventory": 5,
    
    },
    {
      "id": 3,
      "subject": "Art",
      "location": "England",
      "price": 1300,
      "image": "images/art.png",
      "availableInventory": 5,
    
    },
    {
      "id": 4,
      "subject": "Swimming",
      "location": "Berlin",
      "price": 7000,
      "image": "images/swimming.png",
      "availableInventory": 5,
    
    },
    {
      "id": 5,
      "subject": "Robotics",
      "location": "Tokyo",
      "price": 3000,
      "image": "images/robotics.png",
      "availableInventory": 5,
    
    },
    {
      "id": 6,
      "subject": "Chess",
      "location": "Moscow",
      "price": 1000,
      "image": "images/chess.png",
      "availableInventory": 5,
    
    },
    {
      "id": 7,
      "subject": "Yoga",
      "location": "Rio",
      "price": 6000,
      "image": "images/yoga.png",
      "availableInventory": 5,
    
    },
    {
      "id": 8,
      "subject": "Baseball",
      "location": "India",
      "price": 2000,
      "image": "images/baseball.png",
      "availableInventory": 5,
    
    },
    {
      "id": 9,
      "subject": "Basketball",
      "location": "Ireland",
      "price": 3000,
      "image": "images/basketball.png",
      "availableInventory": 5,
    
    },
    {
      "id": 10,
      "subject": "Badminton",
      "location": "Denver",
      "price": 4000,
      "image": "images/badminton.png",
      "availableInventory": 5,
    
    },
    {
      "id": 11,
      "subject": "Music",
      "location": "Atlanta",
      "price": 2050,
      "image": "images/music.png",
      "availableInventory": 5,
    
    },
    {
      "id": 12,
      "subject": "Gymnastic",
      "location": "Dubai",
      "price": 3050,
      "image": "images/gymnastic.png",
      "availableInventory": 5,
    }
]
function checkform()
{
    var f = document.forms["theform"].elements;
    var cansubmit = true;

    for (var i = 0; i < f.length; i++) {
        if (f[i].value.length == 0) cansubmit = false;
    }

    if (cansubmit) {
        document.getElementById('submitbutton').style.visibility = 'visible';
    }
}
function Validate(e) {
  var keyCode = e.keyCode || e.which;

  var lblError = document.getElementById("lblError");
  lblError.innerHTML = "";

  var regex = /^[A-Za-z]+$/;
  var isValid = regex.test(String.fromCharCode(keyCode));
  if (!isValid) {
      lblError.innerHTML = "";
  }
  return isValid;
}