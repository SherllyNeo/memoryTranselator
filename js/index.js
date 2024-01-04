
var NumToImages = {
"00":"Olivia",
"01":"Mom",
"02":"Julien",
"03":"Erick",
"04":"Erin",
"05":"Sophie",
"06":"Miguel",
"07":"Linda",
"08":"Josie",
"09":"Brent",
"10":"Grenade",
"11":"Sword",
"12":"Scissors",
"13":"Mace",
"14":"Rope",
"15":"Saw",
"16":"Screwdriver",
"17":"Gun",
"18":"Nunchucks",
"19":"Poison",
"20":"Snitch",
"21":"Wand",
"22":"Quirrel",
"23":"Voldemort",
"24":"Ron",
"25":"Snape",
"26":"Draco*",
"27":"Luna ",
"28":"Hermione*",
"29":"Dobby",
"30":"Crown",
"31":"Guardsman*",
"32":"Angus",
"33":"Mirror*",
"34":"Throne",
"35":"Sheet",
"36":"Redacted",
"37":"Lamp",
"38":"Hourglass",
"39":"Perfume",
"40":"Wreath",
"41":"Icecicle*",
"42":"Tooth Fairy",
"43":"Krampus",
"44":"Rudolf*",
"45":"Santa",
"46":"MGG",
"47":"Elf",
"48":"Snowman",
"49":"Preist",
"50":"Olive",
"51":"Pickle*",
"52":"Bleu Cheese",
"53":"Deviled Egg*",
"54":"Raddish",
"55":"Spaghetti",
"56":"Carrot*",
"57":"Lasagna",
"58":"Cherries",
"59":"Butter",
"60":"Teacup",
"61":"Sherlock",
"62":"John",
"63":"Moriarty",
"64":"Mary",
"65":"Joan*",
"66":"Irene",
"67":"Lestrade",
"68":"Cocaine",
"69":"Pipe",
"70":"Blobfish",
"71":"Tapeworm",
"72":"Tuna*",
"73":"Mouse",
"74":"Ray*",
"75":"Snake",
"76":"Furry",
"77":"Lobster",
"78":"Walrus*",
"79":"Snail",
"80":"Hat",
"81":"Cane",
"82":"Gloves",
"83":"Moustache",
"84":"Ribbon",
"85":"Scarf",
"86":"Suit*",
"87":"Umbrella",
"88":"Glasses*",
"89":"Belt",
"90":"Eye",
"91":"Uvula",
"92":"Kidney*",
"93":"Uterus",
"94":"Rib",
"95":"Skeleton",
"96":"Hands*",
"97":"Legs*",
"98":"Breasts",
"99":"Brain",
}


function Trans() {
    var numberStr = document.getElementById('numbers').value;
    while (numberStr.length % 4 != 0) {
        numberStr += "0";
    }
    OutputHtml = "";
    count = 0;
    console.log(numberStr)
    for (var i = 0; i < numberStr.length; ++i) {
        count += 1;
        FirstTwoDigits = numberStr.substring(i,i+2);
        LastTwoDigits = numberStr.substring(i+2,i+4);
        FirstImage = NumToImages[FirstTwoDigits];
        SecondImage = NumToImages[LastTwoDigits];
        OutputHtml += `${count}. (${FirstTwoDigits},${LastTwoDigits}) -> (${FirstImage},${SecondImage})<br>`
        i+= 3;
    }
    document.getElementById('result').innerHTML = OutputHtml;


}

