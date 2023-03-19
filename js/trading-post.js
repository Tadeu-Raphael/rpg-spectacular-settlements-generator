var visitorTrafficMod = 0;
var populationWealthMod = 0;
var sizeMod = 0;
var crimeMod = 0;
var size = 0;


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
dispositionValue();/*
lawEnforcement();
leadership();
populationWealth();
crimeValue();

//Points of Interest
shopsValue();
servicesValue();
placesWorshipValue();
*/
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
            break;
        case isInRange(roll, 3, 6):
            size.innerHTML += "<b>Small.</b> Up to 40 standing structures.";
            break;  
        case isInRange(roll, 7, 14):
            size.innerHTML += "<b>Medium.</b> Up to 60 standing structures.";
            break;
        case isInRange(roll, 15, 18):
            size.innerHTML += "<b>Large.</b> Up to 80 standing structures.";
            break;
        case isInRange(roll, 19, 24):
            size.innerHTML += "<b>Very Large.</b> Up to 100 standing structures.";
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


}

disposition();
lawEnforcement();
leadership();
populationWealth();
crimeValue();
shopsValue();
servicesValue();
placesWorshipValue();

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
            politics.innerHTML += "<b>Lawless Region.</b> With the trading post outside the regularly frequented borders of any established kingdom, the generally accepted standards of justice don't seem to apply here."
            break;
        case 3:
            politics.innerHTML += "<b>Embattled.</b> Opposing enemy forces surround the trading post on all sides, and it finds itself located in the midst of (though not necessarily participating in) an ongoing conflict."
            break;
        case 4:
            politics.innerHTML += "<b>Revolution.</b> A nearby kingdom is in the throes of an uprising. Members of either side may be present in the trading post."
            break;
        case 5:
            politics.innerHTML += "<b>Peace.</b> All is quiet, almost suspiciously so...."
            break;
        case 6: 
        politics.innerHTML += "<b>New Governance.</b> A new and unknown power has moved in to control the surrounding area. Locals may be in favor of, against, or neutral about it. Depending on the kind of governance, speaking out against the leadership may not be permitted."
    }   
}   
function eventsValue(){
    let events = document.getElementById("events");
    let roll = (Math.floor(Math.random() * 6) + 1);
    switch(roll){
        case 1:
            events.innerHTML += "<b>High-Class Visitor</b> A wealthy aristocrat is passing through and throwing their money around. It seems like anything can be bought, and no price is too high." 
            break;
        case 2:
            events.innerHTML += "<b>Troublemakers</b> A pack of ruffians is making themselves a nuisance to the locals. Hostile encounters are escalating and might become violent."
            break;
        case 3:
            events.innerHTML += "<b>Fool's Festival</b> It's the day of the fool. Many folk are dressed as jesters and tumblers. The drink is flowing and the mood is merry."
            break;
        case 4:
            events.innerHTML += "<b>Caught Red-Handed</b> A shop owner has caught a thief, and is threatening them with a weapon in the street as they beg for mercy."
            break;
        case 5:
            events.innerHTML += "<b>Strangers</b> A large trade caravan just arrived, full of people locals have never seen, and some don't know what to make of them."
            break;
        case 6:
            events.innerHTML += "<b>Public Emergency</b> There is an emergency situation in town, such as a fire. There is lots of commotion as people rush to help, or get a look at what's going on."
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
    let weater = document.getElementById("weather");
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