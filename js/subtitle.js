function getRandomGreeting() {
  var greetings = [
    "Beep boop! Im a robot?",
    "Did you know I have a discord server? then now you do",
    "If you're so smart, how many sides does a circle have?",
    "You can read btw",
    "HA Made you look!",
    "Redbull gives you wings...",
    "Made in the USA!",
    "Made by TGG!",
    "Reload the page NOW!",
    "Downloading your passwords...",
    "Installing virus...",
    "WARNING: You may lose whats left of your sanity by proceding!",
    "Do you bite your ice cream ya weirdo?",
    "Fortnite is cringe ngl.",
    "You got games on your phone?",
    "Powered by that one energy crystal!",
    "*insert cool explosion*",
    "Erm, what the sigma?",
    "Sponsered by RAID SHADOW LEGENDS!",
    "I have 10 MILLION POWER IN RISE OF KINDOMS!",
    "This video is sponsored by Honey!",
    "Sponsored by the man, the myth, the legend, 3kh0!",
    "3kh0 is him",
    "Powered by 16MB of RAM!",
    ":)",
    "w h y",
    "w h a t",
    "I swear he is real! - guy from the insane asylum",
    "what the dog doin?",
    "##################?",
    "thanks..",
    "are you a Major leage gamer?",
    "It is time to get funky!",
    "E...",
    "Don't ask questions if you can't handle the answers!",
    "If your name is Jack, get help.",
    "Living in Spain without the a",
    "Shoutout to Piplup!",
    "Shoutout to 3kh0!",
    "Shoutout to TGG!",
    "TGG is so sigma...",
    "Did you know that TGG made this website?",
    "TGG is such a sigma...",
    "TGG",
    "How are you?",
    "I like pizza, and want to eat more of it.",
    "James.",
    "Hi",
    "Dont die.",
    "I like pizza",
    "bottom text",
    "How many pizzas are in your oven?",
    "No fun allowed - Teachers",
    "Your toes will be pulled tonight - Lucas",
    "I do love buying birth certificates from the black market! - Max",
    "'If you are trash go play Fortnite you loser' - Sun Tzu, Art of war",
    "I wanted free Robux :(",
    "Avocados \ud83e\udd51 from Mexico \ud83c\uddf2\ud83c\uddfd",
    "reload for another message!",
    "You were an accident of birth",
    "He stomped on his fruit loops and thus became a cereal killer.",
    "Techonoblade never dies! - A real legend.",
    "Trust me, I did not steal anything with this",
    "It is everyday bro",
    "This proves you are unusual",
    "How many people are in your basement again?",
    "This is the 1,375th time your on 3kh0, and it's only Monday",
    "You bum - A british man",
    "Fortnite? Cringe!",
    "NUKE INCOMING!",
    "I spent way too long making these goofy messages",
    "You should tell TGG this, 'PIZZAPIZZA124JIT'",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
