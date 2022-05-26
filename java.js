var gold = 0;
var goldPerSecond = 0;
var goldPerClick = 1;
var stoneCost = 10;
var ironCost = 100;
var diamondCost = 300;
var basicCost = 20;
var betterCost = 100;
var advancedCost = 600;
var stones = 0;
var irons = 0;
var diamonds = 0;
var basics = 0;
var betters = 0;
var advanceds = 0;
var menu;

function add() {
  gold += goldPerClick;
  document.getElementById("showGold").innerText = gold;
}

setInterval(function() {
  gold += goldPerSecond;
  document.getElementById("showGold").innerText = gold;
}, 1000)

function buyBasic() {
  if (gold >= basicCost) {
    gold -= basicCost;
    document.getElementById("showGold").innerText = gold;
    basics++;
    document.getElementById("basicnum").innerText = basics;
    basicCost *= 2;
    document.getElementById("basicprice").innerText = basicCost;
    goldPerSecond += 1;
    document.getElementById("showpsec").innerText = goldPerSecond;
  } else {
    alert("You don't have enough gold!")
  }
}
function buyBetter() {
  if (gold >= betterCost) {
    gold -= betterCost;
    document.getElementById("showGold").innerText = gold;
    betters++;
    document.getElementById("betternum").innerText = betters;
    betterCost *= 2;
    document.getElementById("betterprice").innerText = betterCost;
    goldPerSecond += 10;
    document.getElementById("showpsec").innerText = goldPerSecond;
  } else {
    alert("You don't have enough gold!")
  }
}
function buyAdvanced() {
  if (gold >= advancedCost) {
    gold -= advancedCost;
    document.getElementById("showGold").innerText = gold;
    advanceds++;
    document.getElementById("advancednum").innerText = advanceds;
    advancedCost *= 2;
    document.getElementById("advancedprice").innerText = advancedCost;
    goldPerSecond += 100;
    document.getElementById("showpsec").innerText = goldPerSecond;
  } else {
    alert("You don't have enough gold!")
  }
}
function buyStone() {
  if (gold >= stoneCost) {
    gold -= stoneCost;
    document.getElementById("showGold").innerText = gold;
    stones++;
    document.getElementById("stones").innerText = stones;
    stoneCost *= 2;
    document.getElementById("stonecost").innerText = stoneCost;
    goldPerClick += 1;
    document.getElementById("showpclick").innerText = goldPerClick;
  } else {
    alert("You don't have enough gold!")
  }
}
function buyIron() {
  if (gold >= ironCost) {
    gold -= ironCost;
    document.getElementById("showGold").innerText = gold;
    irons++;
    document.getElementById("irons").innerText = irons;
    ironCost *= 2;
    document.getElementById("ironcost").innerText = ironCost;
    goldPerClick += 10;
    document.getElementById("showpclick").innerText = goldPerClick;
  } else {
    alert("You don't have enough gold!")
  }
}function buyDiamond() {
  if (gold >= diamondCost) {
    gold -= diamondCost;
    document.getElementById("showGold").innerText = gold;
    diamonds++;
    document.getElementById("diamonds").innerText = diamonds;
    diamondCost *= 2;
    document.getElementById("diamondcost").innerText = diamondCost;
    goldPerClick += 100;
    document.getElementById("showpclick").innerText = goldPerClick;
  } else {
    alert("You don't have enough gold!")
  }
}
// function openshop1(){
//   menu = switchMenu("clickshop");
// }
// function openshop2(){
//   menu = switchMenu("idleshop");
// }
// function closeshop1(){
//   document.getElementById("#").innerText = .;
// }
// function closeshop2(){
//   document.getElementById("#").innerText = .;
// }
// function switchMenu(menu) {
//   $("#" + menu).css("display", "block");
//   return menu;
// }
