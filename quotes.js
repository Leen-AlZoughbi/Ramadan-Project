function randomQuote() {
    var quotes = [{
      text: "Be peaceful, be courteous, obey the law, respect everyone; but if someone puts his hand on you, send him to the cemetery.",
      person: "Malcolm X",
    }, {
      text: "Service to others is the rent you pay for your room here on earth.",
      person: "Muhammad Ali",
    }, {
      text: "The rich stick together; the poor and the marginalised are thrown together.",
      person: "Tariq Ramadan",
    }, {
      text: "I believe in the religion of Islam. I believe in Allah and peace.",
      person: "Muhammad Ali",
    }, {
      text: "Islam is the first school of social thought that recognizes the masses as the basis",
      person: "Ali Shariati"
    }];
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = quote.text
    document.getElementById("person").innerHTML = quote.person
  
    var bgcolorlist = new Array("#9ec97e", "#613681", "#c87e8f", "#7e8fc7", "#c7b57d", "#7cc7b5 ")
    var color = bgcolorlist[Math.floor(Math.random() * bgcolorlist.length)];
  
    document.body.style.background = color;
    document.getElementById("quote").style.color = color;
    document.getElementById("person").style.color = color;
    document.getElementById("twitter").style.background = color;
    document.getElementById("facebook").style.background = color;
    document.getElementById("subhanallah").style.background = color;
  };