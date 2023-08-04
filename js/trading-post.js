var visitorTrafficMod = 0;
var populationWealthMod = 0;
var sizeMod = 0;
var crimeMod = 0;
var qualityMod = 0;
var tradingPostSize = 0;
var urbanEncounterMod = 0;


//Basic Information
originValue();
specialityValue();
ageValue();
conditionValue();
visitorTrafficValue();
sizeValue();
environmentValue();

//Community
residentPopulationValue();
demographicsValue();
dispositionValue();
lawEnforcementValue();
leadershipValue();
populationWealthValue();
crimeValue();

//Points of Interest
shopsValue();
servicesValue();
placesWorshipValue();

//Extra Intrigue
recentHistoryValue();
politicsValue();
eventsValue();
opportunitiesValue();
weatherValue();
dangerLevelValue();
dangerTypeValue();

function isInRange(x, min, max) {
    return min <= x && x <= max;
}

function rollDice(diceSize){
    return (Math.floor(Math.random() * diceSize) + 1);
}

function displayMessage(element, message) {
    // Criar um elemento <div> para a mensagem
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML = message;

    // Limpar o conteúdo atual do elemento "demographics"
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    // Adicionar a mensagem ao elemento "demographics"
    element.appendChild(messageDiv);
}

function originValue(){
    let origin = document.getElementById("origin");
    let roll = (Math.floor(Math.random() * 8) + 1);
    switch(roll){
        case 1:
            origin.innerHTML += "<b>Accidental.</b> The trading post came about due to an accident, such as a caravan breaking down or mistaken directions. What was set up to deal with the accident eventually became the trading post.";
            break;
        case 2:
            origin.innerHTML += "<b>Business Venture.</b> The trading post was established by a wealthy entrepreneur specifically to be a trading post from the start.";
            break;
        case 3:
            origin.innerHTML += "<b>Crossroads.</b> The trading post is at the intersection of more than one major trade route.";
            break;
        case 4:
            origin.innerHTML += "<b>Military Outpost.</b> The trading post was built on the remnants of an old fortress or watchtower, the structures of which have long since fallen down or been repurposed by the locals.";
            break;
        case 5:
            origin.innerHTML += "<b>No Man’s Land.</b> The trading post was established as a neutral place where opposing forces could purchase wares, without encroaching on enemy territory.";
            break;
        case 6:
            origin.innerHTML += "<b>Native.</b> The trading post was started by someone native to the area, who saw potential in trade with passersby.";
            break;
        case 7:
            origin.innerHTML += "<b>Overnight Stop.</b> The trading post was originally a single, large house for overnight stays for weary travelers, which soon grew, along with the demand for accommodations.";
            break;
        case 8:
            origin.innerHTML += "<b>Wilderness Expert.</b> The trading post was started when a trapper, hunter or guide set up a camp, in order to aid those passing through the area.";
            break;
    }
}

function specialityValue(){
    let speciality = document.getElementById("speciality");
    let roll = (Math.floor(Math.random() * 6) + 1);
    switch(roll){
        case 1:
            speciality.innerHTML += "<b>Atypical Shipping Methods.</b> This trading post is known for having unique and effective ways to move goods.";
            break;
        case 2:
            speciality.innerHTML += "<b>Food & Drink.</b> This trading post is known for";
            let innerRoll = (Math.floor(Math.random() * 6) + 1);
            switch(true){
                case isInRange(innerRoll, 1, 3):
                    speciality.innerHTML += " excellent and unique food.";
                    break;
                case isInRange(innerRoll, 4, 6):
                    speciality.innerHTML += " plentiful and varied high-quality beverages.";
                    break;
            }
            break;
        case 3:
            speciality.innerHTML += "<b>Hospitality.</b> The main inn here is particularly good, offering excellent service, comfortable rooms, and good food. (If you roll for the inn's quality using the quality table found in step 3, ignore results that would make it 'poor')";
            break;
        case 4:
            speciality.innerHTML += "<b>Information.</b> This trading post is known as a source for reliable information. They may not know everything, but your chances of finding solid gossip, lore, news, or an intriguing tidbit here is good.";
            break;
        case 5:
            speciality.innerHTML += "<b>Purchasing Connections.</b> This trading post is known for having folks who can find things. If they don't have (or know about) what you're looking for, they can direct you to someone who does.";
            break;
        case 6:
            speciality.innerHTML += "<b>Unscrupulous Contractors.</b> This trading post is known for having people who can get just about anything done, if the coin is right.";
            let innerRoll2 = (Math.floor(Math.random() * 10) + 1);
            switch(innerRoll2){
                case 1:
                    speciality.innerHTML += " (Brutes & Brawlers)";
                    break;
                case 2:
                    speciality.innerHTML += " (Cloak & Dagger)";
                    break;
                case 3:
                    speciality.innerHTML += " (Bows & Slings)";
                    break;
                case 4:
                    speciality.innerHTML += " (Scribes & Clerks)";
                    break;
                case 5:
                    speciality.innerHTML += " (Guides & Trackers)";
                    break;
                case 6:
                    speciality.innerHTML += " (Caravan & Mount)";
                    break;
                case 7:
                    speciality.innerHTML += " (Arcane Academics)";
                    break;
                case 8:
                    speciality.innerHTML += " (Magic Mercenaries)";
                    break;
                case 9:
                    speciality.innerHTML += " (Priestly Guidance)";
                    break;
                case 10:
                    speciality.innerHTML += " (Hands of the Divine)";
                    break;
            }
            break;
    }
}

function ageValue(){
    let age = document.getElementById("age");
    let roll = (Math.floor(Math.random() * 20) + 1);
    switch(true){
        case isInRange(roll, 1, 3):
            age.innerHTML += "<b>Recent.</b> The trading post was established within the past year.";
            visitorTrafficMod += (-1);
            break;
        case isInRange(roll, 4, 8):
            age.innerHTML += "<b>Established.</b> The trading post has been around for at least a couple of years.";
            break;
        case isInRange(roll, 9, 13):
            age.innerHTML += "<b>Mature.</b> The trading post was originally built decades ago.";
            visitorTrafficMod += (1);
            break;
        case isInRange(roll, 14, 17):
            age.innerHTML += "<b>Old.</b> The trading post was built around a hundred years ago.";
            visitorTrafficMod += (2);
            break;
        case isInRange(roll, 18, 19):
            age.innerHTML += "<b>Ancient.</b> The trading post was built hundreds of years ago.";
            visitorTrafficMod += (3);
            break;
        case isInRange(roll, 20, 20):
            age.innerHTML += "<b>Unknown.</b> No one really knows when the trading post was established.";
            visitorTrafficMod += (4);
            break;
    }
}

function conditionValue(){
    let condition = document.getElementById("condition");
    let roll = (Math.floor(Math.random() * 20) + 1);
    switch(true){
        case isInRange(roll, 1, 2):
            condition.innerHTML += "<b>Ramshackle.</b> A few of the buildings look to be falling down. There are no formal roads, only trodden paths.";
            populationWealthMod += (-6);
            break;
        case isInRange(roll, 3, 6):
            condition.innerHTML += "<b>Poor.</b> The buildings and surroundings are rough and dirty. Roads are uneven dirt and dust.";
            populationWealthMod += (-3);
            break;
        case isInRange(roll, 7, 14):
            condition.innerHTML += "<b>Fair.</b> The buildings are clean and sparsely decorated. Roads are flattened earth, possibly with gravel.";
            break;
        case isInRange(roll, 15, 18):
            condition.innerHTML += "<b>Good.</b> Most of the structures are exceptionally well kept and moderately decorated. Roads are cobblestone or, perhaps, cheap brick.";
            populationWealthMod += (3);
            break;
        case isInRange(roll, 19, 20):
            condition.innerHTML += "<b>Immaculate.</b> The shops and houses are spotless, and well-adorned with tasteful decorations. Roads are made of fine, smooth, well-placed flagstones.";
            populationWealthMod += (6);
            break;
    }

}

function visitorTrafficValue(){
    let visitorTraffic = document.getElementById("visitorTraffic");
    let roll = ((Math.floor(Math.random() * 20) + 1) + visitorTrafficMod);
    switch(true){
        case isInRange(roll, 0, 2):
            visitorTraffic.innerHTML += "<b>Vacant.</b> No one seems to be visiting this place.";
            crimeMod += 2;
            break;
        case isInRange(roll, 3, 6):
            visitorTraffic.innerHTML += "<b>Groups.</b> Visitors are a rarity, though a few might be around.";
            sizeMod += 1;
            crimeMod += 1;
            break;
        case isInRange(roll, 7, 14):
            visitorTraffic.innerHTML += "<b>Crowds.</b> It is typical to see some new visitors most days.";
            sizeMod += 2;
            break;
        case isInRange(roll, 15, 18):
            visitorTraffic.innerHTML += "<b>Droves.</b> There are lots of new faces on a regular basis.";
            sizeMod += 3;
            sizeMod += (-1);
            break;
        case isInRange(roll, 19, 24):
            visitorTraffic.innerHTML += "<b>Masses.</b> New people are everywhere, coming and going at all times.";
            sizeMod += 4;
            sizeMod += (-2);
            break;
    }
}

function sizeValue(){
    let size = document.getElementById("size");
    let roll = ((Math.floor(Math.random() * 20) + 1) + sizeMod);
    switch(true){
        case isInRange(roll, 1, 2):
            size.innerHTML += "<b>Very Small.</b> Up to 20 standing structures.";
            tradingPostSize = 1;
            break;
        case isInRange(roll, 3, 6):
            size.innerHTML += "<b>Small.</b> Up to 40 standing structures.";
            tradingPostSize = 2;
            break;  
        case isInRange(roll, 7, 14):
            size.innerHTML += "<b>Medium.</b> Up to 60 standing structures.";
            tradingPostSize = 3;
            break;
        case isInRange(roll, 15, 18):
            size.innerHTML += "<b>Large.</b> Up to 80 standing structures.";
            tradingPostSize = 4;
            break;
        case isInRange(roll, 19, 24):
            size.innerHTML += "<b>Very Large.</b> Up to 100 standing structures.";
            tradingPostSize = 5;
            break;
    }
}

function environmentValue(){
    let environment = document.getElementById("environment");
    let roll = (Math.floor(Math.random() * 10) + 1);
    switch(roll){
        case 1:
            environment.innerHTML += "<b>Coastal.</b> The trading post is near a large body of water, such as a lake or ocean.";
            break;
        case 2:
            environment.innerHTML += "<b>Forest.</b> The trading post is nestled among the trees.";
            break;
        case 3:
            environment.innerHTML += "<b>Mountains.</b> The trading post is found on stony passes or soaring peaks.";
            break;
        case 4:
            environment.innerHTML += "<b>Plains.</b> The trading post is in the wide, open fields.";
            break;
        case 5:
            environment.innerHTML += "<b>River.</b> The trading post is near a steadily flowing stream, or other watercourse.";
            break;
        case 6:
            environment.innerHTML += "<b>Swamp.</b> The trading post is in, or near, a vast area of stagnant water.";
            break;
        case 7:
            environment.innerHTML += "<b>Underground.</b> The trading post is within a large network of caves.";
            break;
        case 8:
            environment.innerHTML += "<b>Valley.</b> The trading post is found within, or on the edge of, an area of recessed elevation in relation to the landscape around it.";
            break;
        case 9:
            environment.innerHTML += "<b>Tundra.</b> The trading post is in a very cold environment.";
            break;
        case 10:
            environment.innerHTML += "<b>Desert.</b> The trading post is in a dry and arid environment, likely covered with vast sand dunes.";
            break;
    }
}

function residentPopulationValue(){
    let residentPopulation = document.getElementById("residentPopulation");
    let roll = (Math.floor(Math.random() * 20) + 1);
    switch(true){
        case isInRange(roll, 1, 2):
            residentPopulation.innerHTML += "<b>Nearly Deserted.</b> There are many empty houses and businesses.";
            crimeMod += (2);
            break;
        case isInRange(roll, 3, 6):
            residentPopulation.innerHTML += "<b>Sparse.</b> There are some empty houses and businesses.";
            crimeMod += (1);
            break;
        case isInRange(roll, 7, 14):
            residentPopulation.innerHTML += "<b>Appropriate.</b> Homes and businesses are comfortably populated.";
            break;
        case isInRange(roll, 15, 18):
            residentPopulation.innerHTML += "<b>Congested.</b> Movement is difficult. Homes and common buildings are often at capacity.";
            crimeMod += (-1);
            break;
        case isInRange(roll, 19, 20):
            residentPopulation.innerHTML += "<b>Overwhelmed.</b> The trading post cannot support this many people. Movement is extremely difficult. Tent and shanty towns have cropped up along the outskirts of the settlement.";
            crimeMod += (-2);
            break;
    }
}

function demographicsValue(){
    let demographics = document.getElementById("demographics");
    let roll = rollDice(20);
    switch (true) {
        case isInRange(roll, 1, 5):
            demographics.innerHTML += "<b>Only One.</b> 100% primary race.";
            break;
        case isInRange(roll, 6, 10):
            demographics.innerHTML += "<b>Only Two.</b> 60% primary race, 40% secondary race.";
            break;
        case isInRange(roll, 11, 14):
            demographics.innerHTML += "<b>Normal Distribution.</b> 50% primary race, 25% secondary race, 15% tertiary race, 10% other.";
            break;
        case isInRange(roll, 15, 17):
            demographics.innerHTML += "<b>Wide Distribution.</b> 20% primary race. All others reasonably well represented.";
            break;
        case isInRange(roll, 18, 19):
            demographics.innerHTML += "<b>High and Low.</b> 80% primary race, 20% secondary race.";
            break;
        case isInRange(roll, 20, 20):
            demographics.innerHTML += "<b>Ever-Changing.</b> No discernible distribution. Racial representation lacks any sense of numerical dominance.";
            break;
    }
}

function dispositionValue(){
    let disposition = document.getElementById("disposition");
    let roll = rollDice(20);

    const messages = [
        {
            range: [1, 2],
            message: "<b>Hostile.</b> Locals seem very unfriendly toward visitors, and would likely make out-of-towners feel unwelcome. This could manifest as coldness, passive-aggressiveness, or even violence."
        },
        {
            range: [3, 6],
            message: "<b>Unfriendly.</b> Locals don’t care much for visitors, looking upon them with contempt, fear, or suspicion."
        },
        {
            range: [7, 14],
            message: "<b>Neutral.</b> Locals are standoffish, or perhaps hard on the outside, but can be friendly, if you get to know them."
        },
        {
            range: [15, 18],
            message: "<b>Friendly.</b> Locals are generally friendly, welcoming, and slow to take offense."
        },
        {
            range: [19, 20],
            message: "<b>Open.</b> The locals actively enjoy visitors, and their culture incorporates this. Just about anyone is welcome."
        }
    ];

    let foundMessage;
    for (const item of messages) {
        if (isInRange(roll, item.range[0], item.range[1])) {
            foundMessage = item.message;
            break;
        }
    }

    if (foundMessage) {
        displayMessage(disposition, foundMessage);
    } else {
        displayMessage(disposition, "Invalid roll value.");
    }

}

function lawEnforcementValue(){
    let lawEnforcement = document.getElementById("lawEnforcement");
    let roll = rollDice(20);

    const messages = [
        {
            range: [1, 2],
            crimeMod: (-8),
            message: "<b>None.</b> This could be good or bad, depending on one’s point of view. Good, if the folk here are just that. Bad when mob justice is carried out on a petty thief."
        },
        {
            range: [3, 6],
            crimeMod: (-4),
            message: "<b>Sheriff.</b> A single sheriff and a deputy keep things civil."
        },
        {
            range: [7, 14],
            crimeMod: (0),
            message: "<b>Small Local Watch.</b> A sheriff, a deputy, and a handful of volunteer residents make up a token watch presence."
        },
        {
            range: [15, 18],
            crimeMod: (4),
            message: "<b>Well-Equipped.</b> Law enforcement is very common."
        },
        {
            range: [19, 20],
            crimeMod: (8),
            message: "<b>Overwhelming Presence.</b> Law enforcement is always around in public, no matter what."
        }
    ];

    let foundMessage;
    for (const item of messages) {
        if (isInRange(roll, item.range[0], item.range[1])) {
            foundMessage = item.message;
            crimeMod += item.crimeMod;
            break;
        }
    }

    if (foundMessage) {
        displayMessage(lawEnforcement, foundMessage);
    } else {
        displayMessage(lawEnforcement, "Invalid roll value.");
    }
}

function leadershipValue(){
    let leadership = document.getElementById("leadership");
    let roll = rollDice(20);

    const messages = [
        {
            range: [1, 1],
            message: "<b>No Leader.</b> The trading post operates with no leadership, which could lead to unresolved disputes."
        },
        {
            range: [2, 4],
            message: "<b>Hereditary.</b> A non-elected leader is in power, by virtue of their bloodline."
        },
        {
            range: [5, 7],
            message: "<b>Merchant Monarch.</b> The wealthiest shop owner in the trading post leads by default."
        },
        {
            range: [8, 10],
            message: "<b>Underworld or Criminal Enterprise.</b> A criminal, or group of criminals, either publicly, or privately, controls the trading post."
        },
        {
            range: [11, 13],
            message: "<b>Oligarchy.</b> A few individuals hold sway, collectively, over the trading post."
        },
        {
            range: [14, 16],
            message: "<b>Local Council.</b> Prominent members of the community were chosen to lead the trading post collectively."
        },
        {
            range: [17, 19],
            message: "<b>Single, elected leader.</b> The locals democratically voted for their current leader."
        },
        {
            range: [20, 20],
            message: "<b>Anarcho-Syndicalist Commune.</b> The members of the trading post take turns as a sort of executive officer for the week."
        }
    ];

    let foundMessage;
    for (const item of messages) {
        if (isInRange(roll, item.range[0], item.range[1])) {
            foundMessage = item.message;
            if(isInRange(roll, 11, 13)){
                let innerRoll = rollDice(4);
                const innerMessage = [
                    {
                        range: [1, 1],
                        message: "<b>merchants (plutocracy).</b>"
                    },
                    {
                        range: [2, 2],
                        message: "<b>mages (magocracy).</b>"
                    },
                    {
                        range: [3, 3],
                        message: "<b>priests (theocracy).</b>"
                    },
                    {
                        range: [4, 4],
                        message: "<b>other small group.</b>"
                    }
                ]
                for(const innerItem of innerMessage){
                    if(isInRange(innerRoll, innerItem.range[0], innerItem.range[1])){
                        foundMessage += ' (' + innerItem.message + ')';
                        break;
                    }
                }
            }
            break;
        }
    }

    if (foundMessage) {
        displayMessage(leadership, foundMessage);
    } else {
        displayMessage(leadership, "Invalid roll value.");
    }
}

function populationWealthValue(){
    let populationWealth = document.getElementById("populationWealth");
    let roll = ((Math.floor(Math.random() * 20) + 1) + populationWealthMod);
    switch(true){
        case isInRange(roll, -5, 2):
            populationWealth.innerHTML += "<b>Destitute.</b> Most of the population consistently lacks the barest essentials of what they need to survive.";
            crimeMod += (-4);
            qualityMod += (-2);
            break;
        case isInRange(roll, 3, 6):
            populationWealth.innerHTML += "<b>Impoverished.</b> Around half of the population struggles to carve out even a meager existence.";
            crimeMod += (-2);
            qualityMod += (-1);
            break;
        case isInRange(roll, 7, 14):
            populationWealth.innerHTML += "<b>Average.</b> Most of the population have enough to live a modest life.";
            break;
        case isInRange(roll, 15, 17):
            populationWealth.innerHTML += "<b>Prosperous.</b> Most of the population has enough to live a good life and, of them, a fair amount can even live comfortably.";
            crimeMod += (-1);
            break;
        case isInRange(roll, 18, 19):
            populationWealth.innerHTML += "<b>Wealthy.</b> Nearly everyone has what they need to live comfortably, many are able to live well, and some are very prosperous.";
            crimeMod += (-2);
            qualityMod += (2);
            break;
        case isInRange(roll, 20, 26):
            populationWealth.innerHTML += "<b>Affluent.</b> Nearly everyone is able to live comfortably, with a significant portion living in luxury.";
            crimeMod += (-4);
            qualityMod += (3);
            break;
    }
}

function crimeValue(){
    let crime = document.getElementById("crime");
    let roll = rollDice(20) + crimeMod;

    const messages = [
        {
            range: [-15, 2],
            urbanEncounterMod: (4),
            message: "<b>Regular.</b> The streets are crawling with criminals, and a purse unstowed is almost sure to be snatched."
          },
          {
            range: [3, 6],
            urbanEncounterMod: (3),
            message: "<b>Common.</b> Most are used to hearing about trouble every day or two. Everyone knows someone who's been a victim of crime."
          },
          {
            range: [7, 14],
            urbanEncounterMod: (2),
            message: "<b>Average.</b> Theft or mild violence can happen from time to time. Best to keep an eye out."
          },
          {
            range: [15, 18],
            urbanEncounterMod: (1),
            message: "<b>Uncommon.</b> Some in the trading post have run into a pickpocket or heard about a robbery but, when they do, it's a noteworthy occurrence."
          },
          {
            range: [19, 32],
            urbanEncounterMod: (0),
            message: "<b>Rare.</b> Most in the trading post have had no personal experience of crime, and know few people that have."
          }
    ];

    let foundMessage;
    for (const item of messages) {
        if (isInRange(roll, item.range[0], item.range[1])) {
            foundMessage = item.message;
            urbanEncounterMod += item.urbanEncounterMod;
            break;
        }
    }

    if (foundMessage) {
        displayMessage(crime, foundMessage);
    } else {
        displayMessage(crime, "Invalid roll value.");
    }
}

function shopsValue(){
    let shops = document.getElementById("shops");
    let sizeRoll = rollDice(8);
    let totalNumberShops;

    switch(tradingPostSize){
        case 1:
            totalNumberShops = sizeRoll + 2;
            break;
        case 2:
            totalNumberShops = sizeRoll + 4;
            break;
        case 3:
            totalNumberShops = sizeRoll + 6;
            break;
        case 4:
            totalNumberShops = sizeRoll + 8;
            break;
        case 5:
            totalNumberShops = sizeRoll + 10;
            break;
    }

    const messages = [
        {
            range: [1, 4],
            message: "<b>Baker (B).</b> Bakes and sells fresh bread and, possibly, pastries."
          },
          {
            range: [5, 8],
            message: "<b>Butcher (B).</b> Processes and sells fresh and/or dried meat."
          },
          {
            range: [9, 12],
            message: "<b>Cooper (B).</b> Crafts wooden vessels held together with metal hoops, including barrels, buckets, etc."
          },
          {
            range: [13, 16],
            message: "<b>Carpenter (B).</b> Builds with or carves wood, as well as carrying out repairs."
          },
          {
            range: [17, 24],
            message: "<b>General Store (B).</b> Sells basic supplies, groceries, and various odds and ends."
          },
          {
            range: [25, 28],
            message: "<b>Herbalist (B).</b> Sells common herbs and natural, non-magical remedies."
          },
          {
            range: [29, 36],
            message: "<b>Smithy (B).</b> Sells and crafts metal tools and equipment, including very basic weapons and armor."
          },
          {
            range: [37, 40],
            message: "<b>Tailor (B).</b> Makes and sells clothing, including hats and cloaks. Also sells general items made from cloth, such as blankets, and carries out repairs and alterations of cloth goods."
          },
          {
            range: [41, 44],
            message: "<b>Tanner/Taxidermist (B).</b> Processes animal hides for practical or ornamental purposes."
          },
          {
            range: [45, 48],
            message: "<b>Thatcher (B).</b> Builds roofs using layers of dried straw, reeds, rushes, etc."
          },
          {
            range: [49, 52],
            message: "<b>Wainwright (B).</b> Builds carts and wagons."
          },
          {
            range: [53, 56],
            message: "<b>Weaver (B).</b> Weaves raw fabric and baskets."
          },
          {
            range: [57, 59],
            message: "<b>Alchemist (S).</b> Brews and sells potions, as well as mundane herbs and alchemical ingredients."
          },
          {
            range: [60, 62],
            message: "<b>Artist (S).</b> Encompasses painter, sculptor, or other visual art as appropriate."
          },
          {
            range: [63, 65],
            message: "<b>Bank & Exchange (S).</b> Encompasses auctions, banking, and the specific selling of gems or exchange of currency."
          },
          {
            range: [66, 68],
            message: "<b>Cobbler (S).</b> Makes and mends boots and shoes."
          },
          {
            range: [69, 71],
            message: "<b>Foundry/Smelting (S).</b> Ore processing and metal fabrication."
          },
          {
            range: [72, 74],
            message: "<b>Mill (S).</b> Facilities for milling grain."
          },
          {
            range: [75, 77],
            message: "<b>Textile Production (S).</b> Larger scale than a single weaver, offering a wider array of materials in larger quantities."
          },
          {
            range: [78, 80],
            message: "<b>Shipwright (S).</b> Builds and launches boats and/or ships. [Reroll if settlement is not bordering a significant source of water]"
          },
          {
            range: [81, 82],
            message: "<b>Rare Botanicals (E).</b> Cultivates and sells herbs rare to the region."
          },
          {
            range: [83, 84],
            message: "<b>Luxury Furnishings (E).</b> Procures and sells all manner of home items for fine living, including furniture, art, and other high-quality goods."
          },
          {
            range: [85, 86],
            message: "<b>Rare Libations & Fare (E).</b> Sells (and, perhaps, makes or brews) drinks and/or food of surpassing quality or rarity to the region."
          },
          {
            range: [87, 88],
            message: "<b>Rare Trade Goods (E).</b> Procures and sells items and materials, such as ores or textiles, that are rare to the region."
          },
          {
            range: [89, 90],
            message: "<b>Magic Shop - Armor (E).</b> Sells magical items with a focus on armor and protective equipment."
          },
          {
            range: [91, 92],
            message: "<b>Magic Shop - Books (E).</b> Sells magical items with a focus on literature, arcane tomes and lore. They may also carry books and documents (such as maps and records) of a rare and significant nature, though non-magical."
          },
          {
            range: [93, 94],
            message: "<b>Magic Shop - Clothing (E).</b> Sells magical items with a focus on clothing of all types which bear magical properties."
          },
          {
            range: [95, 96],
            message: "<b>Magic Shop - Jewelry (E).</b> Sells magical items with a focus on enchanted, or otherwise magically imbued, jewelry."
          },
          {
            range: [97, 98],
            message: "<b>Magic Shop - Weapons (E).</b> Sells magical items with a focus on weapons with mystic properties and, perhaps, shields."
          },
          {
            range: [99, 100],
            message: "<b>Magic Shop - Miscellaneous & Curiosities (E).</b> Procures and sells magical items with a focus on strange and rare artifacts of a wondrous or intriguing nature."
          }
    ];

    let foundMessage = '';
    for(let i = 1; i <= totalNumberShops; i++){
        let roll = rollDice(100);
        for (const item of messages) {
            if (isInRange(roll, item.range[0], item.range[1])) {
                if(i == totalNumberShops){
                    foundMessage += i + '. ' + item.message;
                } else {
                    foundMessage += i + '. ' + item.message + '<br>';
                }
                break;
            }
        }
    }

    if (foundMessage) {
        displayMessage(shops, foundMessage);
    } else {
        displayMessage(shops, "Invalid roll value.");
    }
}

function hiredHelpValue(){
    let roll = rollDice(12);

    const messages = [
        {
            range: [1, 6],
            message: "<b>Individual Person.</b> The hired help is a single person hiring out their services."
        },
        {
            range: [7, 10],
            message: "<b>Team.</b> The hired help is a team of individuals who work together."
        },
        {
            range: [11, 12],
            message: "<b>Guild.</b> An organized guild is hiring out their services. When hired, a portion of the guild's members handle the job, not the entire guild (unless the job is very large)."
        }
    ];

    let foundMessage;
    for (const item of messages) {
        if (isInRange(roll, item.range[0], item.range[1])) {
            foundMessage = item.message;
            break;
        }
    }

    return " | <b>Hired Help Size:</b> " + foundMessage;
}

function servicesValue(){
    let services = document.getElementById("services");
    let sizeRoll = rollDice(6);
    let totalNumberShops;

    switch(tradingPostSize){
        case 1:
            totalNumberShops = sizeRoll;
            break;
        case 2:
            totalNumberShops = sizeRoll + 1;
            break;
        case 3:
            totalNumberShops = sizeRoll + 3;
            break;
        case 4:
            totalNumberShops = sizeRoll + 5;
            break;
        case 5:
            totalNumberShops = sizeRoll + 7;
            break;
    }

    const messages = [
        {
            range: [1, 8],
            message: "<b>Barber.</b> Provides grooming services, such as haircuts or shaves."
        },
        {
            range: [9, 16],
            message: "<b>Bathhouse.</b> Provides spaces for bathing."
        },
        {
            range: [17, 24],
            message: "<b>Doctor/Apothecary.</b> Provides medical care."
        },
        {
            range: [25, 32],
            message: "<b>House of Leisure.</b> Provides entertainment and/or relaxation (GM may decide what kind)."
        },
        {
            range: [33, 44],
            message: "<b>Inn.</b> Provides accommodation, as well as a place to have a bath and a decent meal."
        },
        {
            range: [45, 52],
            message: "<b>Club.</b> Provides entertainment via comedic, dramatic or musical performance."
        },
        {
            range: [53, 60],
            message: "<b>Soothsayer.</b> Provides magical prediction and prophecy - sayers of sooth!"
        },
        {
            range: [61, 68],
            message: "<b>Stable.</b> Provides boarding accommodation for mounts, as well as selling carts, animals, and their tack."
        },
        {
            range: [69, 80],
            message: "<b>Tavern.</b> Provides food and drink."
        },
        {
            range: [81, 82],
            message: "<b>Hired Help - Brutes and Brawlers.</b> Thugs, ruffians, and muscle."
        },
        {
            range: [83, 84],
            message: "<b>Hired Help - Cloak and Dagger.</b> Assassins, thieves, and spies."
        },
        {
            range: [85, 86],
            message: "<b>Hired Help - Bows and Slings.</b> Archers and ranged attack specialists."
        },
        {
            range: [87, 88],
            message: "<b>Hired Help - Scribes and Clerks.</b> Masters of history, literature, mathematics, and/or business."
        },
        {
            range: [89, 90],
            message: "<b>Hired Help - Guides and Trackers.</b> Scouts, rangers, and wilderness experts."
        },
        {
            range: [91, 92],
            message: "<b>Hired Help - Caravan and Mount.</b> Specialists in transportation and journeys to various locations, as well as expedition organization and management."
        },
        {
            range: [93, 94],
            message: "<b>Hired Help - Arcane Academics.</b> Experts in matters of magic and lore (may also be natural magic or something else; it need not be exclusively arcane)."
        },
        {
            range: [95, 96],
            message: "<b>Hired Help - Magic Mercenaries.</b> Specialists trained in the use of arcane or non-divine magic in combat and practical mission scenarios."
        },
        {
            range: [97, 98],
            message: "<b>Hired Help - Priestly Guidance.</b> Sages offering counsel in all matters of religion and the divine."
        },
        {
            range: [99, 100],
            message: "<b>Hired Help - Hands of the Divine.</b> Specialists trained in the use of divine magic in combat and practical mission scenarios."
        }
    ];

    let foundMessage = '';
    for(let i = 1; i <= totalNumberShops; i++){
        let roll = rollDice(100);
        for (const item of messages) {
            if (isInRange(roll, item.range[0], item.range[1])) {
                if(i == totalNumberShops){
                    if(isInRange(roll, 81, 100)){
                        foundMessage += i + '. ' + item.message + hiredHelpValue();
                    } else {
                        foundMessage += i + '. ' + item.message;
                    }
                } else {
                    if(isInRange(roll, 81, 100)){
                        foundMessage += i + '. ' + item.message + hiredHelpValue() + '<br>';
                    } else {
                        foundMessage += i + '. ' + item.message + '<br>';
                    }
                }
                break;
            }
        }
    }

    if (foundMessage) {
        displayMessage(services, foundMessage);
    } else {
        displayMessage(services, "Invalid roll value.");
    }
}

function placesWorshipValue(){
    let placesWorship = document.getElementById("placesWorship");
    let roll = rollDice(6);
    if(isInRange(roll, 4, 6)){

        let rollSize = rollDice(20);

        const messages = [
            {
                range: [1, 1],
                message: "<b>Secret.</b> The place of worship’s size is unclear, as the location is not publicly known."
            },
            {
                range: [2, 8],
                message: "<b>Altar.</b> A small shrine or, perhaps, a tiny shack, usually evincing some various items or images relating to that which the faith venerates."
            },
            {
                range: [9, 14],
                message: "<b>Oratory.</b> A modest building with seating for attendees, appointed with various items or images relating to that which the faith venerates."
            },
            {
                range: [15, 17],
                message: "<b>Sanctuary.</b> A large, well-appointed structure, able to comfortably accommodate up to a few hundred people."
            },
            {
                range: [18, 19],
                message: "<b>Temple.</b> A grand building, replete with elements like high ceilings, plush furnishings, and other impressive ornamental and/or architectural features. It can hold nearly a thousand attendees."
            },
            {
                range: [20, 20],
                message: "<b>Great Temple.</b> An awe-inspiring structure, devoted to that which it venerates. No expense was spared in its construction. It might display such elements as stunning frescos, elaborate stained-glass scenes, and towering, gilded statues. Walking into a great temple is a rare and striking experience for those who do not live near one."
            }
        ];
    
        let foundMessage = "";
        for (const item of messages) {
            if (isInRange(rollSize, item.range[0], item.range[1])) {
                foundMessage += '<b><i>Size:</i></b> ' + item.message + ' | ';
                break;
            }
        }

        let rollFervency = rollDice(20);

        const messagesFervency = [
            {
                range: [1, 3],
                message: "<b>Unseen.</b> To those outside the following, it is not clear that the group exists."
            },
            {
                range: [4, 7],
                message: "<b>Quiet.</b> Adherents to the faith are inconspicuous unless one knows what to look for (perhaps particular gestures, items of clothing, or phrases)."
            },
            {
                range: [8, 12],
                message: "<b>Subtle.</b> Followers of the faith may be identifiable but remain very reserved."
            },
            {
                range: [13, 16],
                message: "<b>Moderate.</b> The pious are confident and unafraid to display their faith openly, but do not encroach upon the wider populace uncalled for."
            },
            {
                range: [17, 19],
                message: "<b>Fervent.</b> Followers are outspoken, with little or no fear of reproach. They may sing or speak to the masses."
            },
            {
                range: [20, 20],
                message: "<b>Zealous.</b> Adherents are utterly and unthinkingly devout, forcing their doctrine upon their surroundings and peers, or taking actions that further their cause regardless of personal cost. Though typically seen as negative, this could also be a positive, such as a church of light rising up in an evil kingdom, helping those in need, even if it puts themselves in peril."
            }
        ];
        
        for (const item of messagesFervency) {
            if (isInRange(rollFervency, item.range[0], item.range[1])) {
                foundMessage += '<b><i>Fervency:</i></b> ' + item.message + ' | ';
                break;
            }
        }

        let rollAlignment = rollDice(10);

        const messagesAlignment = [
            {
                range: [1, 1],
                message: "Evil"
            },
            {
                range: [2, 5],
                message: "Neutral"
            },
            {
                range: [6, 10],
                message: "Good"
            }
        ];

        for (const item of messagesAlignment) {
            if (isInRange(rollAlignment, item.range[0], item.range[1])) {
                foundMessage += '<b><i>Alignment:</i></b> ' + item.message;
                break;
            }
        }

        if (foundMessage) {
            displayMessage(placesWorship, foundMessage);
        } else {
            displayMessage(placesWorship, "Invalid roll value.");
        } 
    } else {
        let foundMessage = "No places of worship.";

        if (foundMessage) {
            displayMessage(placesWorship, foundMessage);
        } else {
            displayMessage(placesWorship, "Invalid roll value.");
        } 
    }

}

function recentHistoryValue(){
    let recentHistory = document.getElementById("recentHistory");
    let roll = (Math.floor(Math.random() * 6) + 1);
    switch(roll){
        case 1:
            recentHistory.innerHTML += "<b>Benevolence of yesteryear.</b> The trading post was run by a benevolent leader, or council, but a corrupt individual, or group, has taken over.";
            break;
        case 2:
            recentHistory.innerHTML += "<b>Construction.</b> Certain parts of the trading post have been (or currently are) under construction. Tools, scaffolding, and other such elements can still be seen, as well as individuals working throughout the day.";
            break;
        case 3:
            recentHistory.innerHTML += "<b>Crime Central.</b> Some of the older population remember when the trading post was run by a criminal organization, but they were ousted some time ago.";
            break;
        case 4:           
            recentHistory.innerHTML += "<b>Neutrality.</b> The trading post has always professed neutrality, setting itself apart as a safe haven, even if pressured by nearby settlements.";
            break;
        case 5:       
            recentHistory.innerHTML += "<b>Popular producer.</b> The trading post was known for the production of a unique and/or popular item or service, which is now unavailable or no longer in demand.";
            break;
        case 6:     
            recentHistory.innerHTML += "<b>Wartorn.</b> The trading post was occupied by military forces, and suffered damages, during wartime in the recent past.";
            break;    
    }

}

function politicsValue(){
    let politics = document.getElementById("politics");
    let roll = (Math.floor(Math.random() * 6) + 1);
    switch(roll){
        case 1:
            politics.innerHTML += "<b>On the Brink of War.</b> Tension is in the air, and rumors of impending conflict can be heard in hushed tones within the trading post.";
            break;
        case 2:
            politics.innerHTML += "<b>Lawless Region.</b> With the trading post outside the regularly frequented borders of any established kingdom, the generally accepted standards of justice don't seem to apply here.";
            break;
        case 3:
            politics.innerHTML += "<b>Embattled.</b> Opposing enemy forces surround the trading post on all sides, and it finds itself located in the midst of (though not necessarily participating in) an ongoing conflict.";
            break;
        case 4:
            politics.innerHTML += "<b>Revolution.</b> A nearby kingdom is in the throes of an uprising. Members of either side may be present in the trading post.";
            break;
        case 5:
            politics.innerHTML += "<b>Peace.</b> All is quiet, almost suspiciously so....";
            break;
        case 6: 
        politics.innerHTML += "<b>New Governance.</b> A new and unknown power has moved in to control the surrounding area. Locals may be in favor of, against, or neutral about it. Depending on the kind of governance, speaking out against the leadership may not be permitted.";
    }   
}   

function eventsValue(){
    let events = document.getElementById("events");
    let roll = (Math.floor(Math.random() * 6) + 1);
    switch(roll){
        case 1:
            events.innerHTML += "<b>High-Class Visitor</b> A wealthy aristocrat is passing through and throwing their money around. It seems like anything can be bought, and no price is too high.";
            break;
        case 2:
            events.innerHTML += "<b>Troublemakers</b> A pack of ruffians is making themselves a nuisance to the locals. Hostile encounters are escalating and might become violent.";
            break;
        case 3:
            events.innerHTML += "<b>Fool's Festival</b> It's the day of the fool. Many folk are dressed as jesters and tumblers. The drink is flowing and the mood is merry.";
            break;
        case 4:
            events.innerHTML += "<b>Caught Red-Handed</b> A shop owner has caught a thief, and is threatening them with a weapon in the street as they beg for mercy.";
            break;
        case 5:
            events.innerHTML += "<b>Strangers</b> A large trade caravan just arrived, full of people locals have never seen, and some don't know what to make of them.";
            break;
        case 6:
            events.innerHTML += "<b>Public Emergency</b> There is an emergency situation in town, such as a fire. There is lots of commotion as people rush to help, or get a look at what's going on.";
            break;
    }
}

function opportunitiesValue(){
    let opportunities = document.getElementById("opportunities");
    let roll = (Math.floor(Math.random() * 6) + 1);
    switch(roll){
        case 1:
            opportunities.innerHTML += "<b>Political Intrigue</b> A locally-known noble has gone missing recently. Perhaps they were traveling through and never made it to their destination? Perhaps no one even saw them leave at all..."
            break;
        case 2:
            opportunities.innerHTML += "<b>Missing Person</b> A local has gone missing, possibly a child, and rumors abound. Some talk of monsters, but their whispers are quickly dismissed as fairy tales. Others have theories, but none have yielded fruit."
            break;
        case 3:
            opportunities.innerHTML += "<b>Monster</b> A monster has been causing trouble for the locals. Someone in the trading post is asking for help to deal with it."
            break;
        case 4:
            opportunities.innerHTML += "<b>Guard Duty</b> The local constabulary are in need of more hands for an upcoming event, and capable adventurers are prime candidates."
        case 5:
            opportunities.innerHTML += "<b>Transportation</b> A visitor feels they've outstayed their welcome, or urgently needs to leave, for some reason. They need help leaving and getting to their destination."
            break;
        case 6:
            opportunities.innerHTML += "<b>Acquisition</b> Rumours abound that an item of value is hidden nearby, perhaps one tied to the trading post's history. Several locals are interested in acquiring it, but not all for the same reason."
            break;
    }
}

function weatherValue(){
    let weather = document.getElementById("weather");
    let roll = (Math.floor(Math.random() * 20) + 1);
    switch(true){
        case isInRange(roll, 1, 2):
            weather.innerHTML += "<b>Good</b> Unseasonably excellent. A warm day in winter, a cool day in summer, etc."
            break;
        case isInRange(roll, 3, 6):
            weather.innerHTML += "<b>Mild</b> The best kind of day that could be expected for the season. Rain or snow is light, if at all. Winds are soft."    
            break;
        case isInRange(roll, 7, 14):
            weather.innerHTML += "<b>Fair</b> A normal day for the season. Rain, snow or wind are average and manageable."
            break;
        case isInRange(roll, 15, 18):
            weather.innerHTML += "<b>Harsh</b> A rough day for the season. Rain, snow and wind are strong and could make things difficult."
            break;
        case isInRange(roll, 19, 20):
            weather.innerHTML += "<b>Bad</b> Most folk are staying indoors. Travel is dangerous in these conditions. Rain is torrential, snow is blinding. Winds potentially reach hurricane force."
            break
    }
}

function dangerLevelValue(){
    let dangerLevel = document.getElementById("dangerLevel")
    let roll = (Math.floor(Math.random() * 20) + 1);
    switch(true){
        case isInRange(roll, 1 ,2):
            dangerLevel.innerHTML += "<b>Ever-Present</b> The trading post is constantly in peril. Encountering some form of hardship or adversity, when in the area, is almost guaranteed. It is never safe to go anywhere alone. Preparation and caution (even in and around the trading post) are critical."
            break;
        case isInRange(roll, 3, 6):
            dangerLevel.innerHTML += "<b>Frequent</b> Traveling near the trading post and not encountering danger or hazards is a rarity. Preparation and caution are strongly advised."
            break;
        case isInRange(roll, 7 ,14):
            dangerLevel.innerHTML += "<b>Common</b> Danger or hazards are commonplace. Preparation and caution are advised."
            break;
        case isInRange(roll, 15 ,18):
            dangerLevel.innerHTML += "<b>Uncommon</b>Danger or hazards are not encountered often, though preparation is encouraged. "
            break;
        case isInRange(roll, 19 ,20):
            dangerLevel.innerHTML += "<b>Rare</b> This trading post is built in a place known to be extremely safe; danger or hazards are a rarity." 

    }
}

function dangerTypeValue(){
    let dangerType = document.getElementById("dangerType");
    let roll = (Math.floor(Math.random() * 20) + 1);
    switch(true){
    case isInRange(roll, 1 ,2):
        dangerType.innerHTML += "<b>Suspicious Locals</b> Outsiders are often considered untrustworthy, and may be prime suspects in the event of crime."
        break;
    case isInRange(roll, 3, 6):
        dangerType.innerHTML += "<b>Raids</b> The trading post is often raided by nearby groups of bandits, or packs of marauding creatures."     
        break;
    case isInRange(roll, 7 ,14):
        dangerType.innerHTML += "<b>Monster</b> The trading post is terrorized by a monster that roams the local area."       
        break;
    case isInRange(roll, 15 ,18):
        dangerType.innerHTML += "<b>Environmmental</b> The environment in which the trading post exists is hazardous. It could be subject to frequent earthquakes, volcanoes, floods, mudslides, avalanches, frequent storms, or the like."     
        break;
    case isInRange(roll, 19 ,20):
        dangerType.innerHTML += "<b>Cult/b> There is a cult within the trading post. The cult may be known, and present a direct form of threat, or they may be unknown, and the dangers they present may seem to stem from another source, or be unrelated."
    }
}

function dispositionValue(){
    let disposition = document.getElementById("disposition");
    let roll = (Math.floor(Math.random() * 20) + 1);
    switch(true){
    case isInRange(roll, 1, 2):
        disposition.innerHTML += "<b>Hostile</b> Locals seem very unfriendly toward visitors, and would likely make out-of-towners feel unwelcome. This could manifest as coldness, passive-aggressiveness, or even violence."
        break;
    case isInRange(roll, 3, 6):
        disposition.innerHTML += "<b>Unfriendly</b> Locals don't care much for visitors, looking upon them with contempt, fear, or suspicion"
        break;
    case isInRange(roll, 7, 14):
        disposition.innerHTML += "<b>Neutral</b> Locals are standoffish, or perhaps hard on the outside, but can be friendly, if you get to know them."
        break;
    case isInRange(roll, 15, 18):
        disposition.innerHTML += "<b>Friendly</b> Locals are generally friendly, welcoming, and slow to take offense."
        break;
    case isInRange(roll, 19, 20):
        disposition.innerHTML += "<b>Open</b> The locals actively enjoy visitors, and their culture incorporates this. Just about anyone is welcome."
        break;

    }
}