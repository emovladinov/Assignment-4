
(function () {
    var helloSpeaker={speak:function speak(name) {
      console.log(speakWord + " " + name);
}}
    var speakWord = "Hello";
})();
(function () {
    var byeSpeaker={speak:function speak(name) {
      console.log(speakWord + " " + name);
}}
    var speakWord = "Good Bye";
})();
(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
