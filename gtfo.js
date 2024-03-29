// 1. Put it here: server-files\packages\YOUR_PACKAGE
// 2. Add require('./gtfo'); to your index.js
// 2.1. Change this line "player.isLoggedIn && player.admin > 0" to your own if the admin check is different.
// Usage: /gtfo [ID] to turn someone unwanted into the random animal on the list below.

var animalList = [
      	"a_c_husky",
      	"a_c_coyote",
      	"a_c_pug",
      	"a_c_retriever",
      	"a_c_rottweiler",
      	"a_c_shepherd",
      	"a_c_westy",
      	"a_c_mtlion",
	"a_c_cat_01",
      	"a_c_boar",
	"a_c_pig",
      	"a_c_cow",
      	"a_c_deer",
	"a_c_hen",
      	"a_c_rabbit_01",
      	"a_c_rat"
];

mp.events.addCommand('gtfo', (player, _, playerID) => {
	if (player.isLoggedIn && player.admin > 0) {
		const randomAnimal = Math.floor(Math.random() * animalList.length);
		if (player.isLoggedIn && player.admin > 0) {
			if (playerID && playerID.trim().length > 0) {
				let animalPlayer = mp.players.at(parseInt(playerID));
				if (animalPlayer) {
					animalPlayer.removeAllWeapons();
					animalPlayer.model = animalList[randomAnimal];
				}
			}
		}
	}
});
