(function () {

var names = ["Yaakov", "John", "nabila", "mohammmed", "chima", "afaf", "jihane", "abir", "wiam", "nihal"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
