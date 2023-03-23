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
    },
    {
      text: "Worldly life is short, so turn to Allah before you return to Allah",
      person: "Anonymous"
    },
    {
      text: "No one will reap except what they sow.",
      person: "Quran 6:164"
    },
    {
      text: "Be like a diamond, precious and rare, not like a stone, found everywhere.",
      person: "Anonymous"
    },
    {
      text: "Before going to sleep every night, forgive everyone and sleep with a clean heart.",
      person: "Anonymous"
    },
    {
      text: "The heart that beats for Allah is always a stranger among the hearts that beat for the Dunya (world).",
      person: "Anonymous"
    },
  
    {
      text: "Dua (supplication) has the power to turn your dreams into reality.",
      person: "Anonymous"
    },
  
    {
      text: "Call upon Me, I will respond to you.",
      person: "Quran 40:60"
    },
  
    {
      text: "Taking pains to remove the pains of others is the true essence of generosity.”",
      person: "Abu Bakr (R.A)"
    },
  
    {
      text: "A busy life makes prayer harder, but prayer makes a busy life easier.",
      person: "Anonymous"
    },
  
  
  
  
  ];
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = quote.text
    document.getElementById("person").innerHTML = quote.person
  
    var bgcolorlist = new Array("#245953","#00235B","#3F497F", "#000000","#FF0000","#0048ce", "#008bfb")
    var color = bgcolorlist[Math.floor(Math.random() * bgcolorlist.length)];
  
    document.body.style.background = color;
    document.getElementById("quote").style.color = color;
    document.getElementById("person").style.color = color;
    document.getElementById("twitter").style.background = color;
    document.getElementById("facebook").style.background = color;
    document.getElementById("subhanallah").style.background = color;
  };