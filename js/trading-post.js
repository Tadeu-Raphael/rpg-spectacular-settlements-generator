
//Basic Information
originValue();
specialityValue();
ageValue();
conditionValue();
visitorTrafficValue();
environmentValue();

//Community
residentPopulationValue();
demographicsValue();
disposition();
lawEnforcement();
leadership();
populationWealth();
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
        
}

conditionValue();
visitorTrafficValue();
environmentValue();
residentPopulationValue();
demographicsValue();
disposition();
lawEnforcement();
leadership();
populationWealth();
crimeValue();
shopsValue();
servicesValue();
placesWorshipValue();
recentHistoryValue();
politicsValue();
eventsValue();
opportunitiesValue();
weatherValue();
dangerLevelValue();
dangerTypeValue();