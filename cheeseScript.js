let imageOne = "<img id='cheeseImage' class = 'main' onclick='imageBounce()' src='cheeseMedia/cheese.jpeg' alt='cheese'>"
let imageTwo = "<img id='cheeseImage' class = 'main' onclick='imageBounce()' src='cheeseMedia/goldCheese.gif' alt='cheese'>"
let imageThree = "<img id='cheeseImage' class = 'main' onclick='imageBounce()' src='cheeseMedia/cosmicCheese.jpeg' alt='cheese'>"
let imageFour = "<img id='cheeseImage' class = 'main' onclick='imageBounce()' src='cheeseMedia/smellyCheese.jpeg' alt='cheese'>"
let imageFive = "<img id='cheeseImage' class = 'main' onclick='imageBounce()' src='cheeseMedia/cheeseCakeNormal.jpeg' alt='cheese'>"
let imageSix = "<img id='cheeseImage' class = 'main' onclick='imageBounce()' src='cheeseMedia/cheeseCakeFruit.jpeg' alt='cheese'>"
let imageSeven = "<img id='cheeseImage' class 'main' onclick='imageBounce()' src='cheeseMedia/cheeseCakeChocolateMarble.jpeg' alt='cheese'>"
let imageEight = "<img id='cheeseImage' class 'main' onclick='imageBounce()' src='cheeseMedia/camembert.jpeg' alt='cheese'>"
let imageNine = "<img id='cheeseImage' class 'main' onclick='imageBounce()' src='cheeseMedia/americanCheese.jpeg' alt='cheese'>"
let autoClickerMax = "MAX"
let soundBoxItem = document.getElementById('soundBox')
let upgradesBoxItem = document.getElementById('upgradesBox')
let cheeseData = {
    regularCounter: 0,
    goldenCounter: 0,
    goldCheese: 'cheeseMedia/goldCheese.gif',
    imageSrc: 'cheeseMedia/cheese.jpeg',
    cheeseAddition: 1,
    cheeseUpgradeAmount: 0,
    cheeseUpgradeCost: 50,
    cheeseAlert: 0,
    extraUpgradeCost: 5,
    extraChance: 0,
    goldCheeseAddition: 1,
    goldCheeseChance: 1,
    specialUpgradeCost: 5,
    specialUpgradeAmount: 0,
    regularAutoClickerCostOne: 1500,
    goldAutoClickerCostOne: 250,
    autoClickerActiveOne: 0,
    autoClickerRefresh: 50,
    critStrike: 0,
    loopAmount: 0,
    autoClickerRate: 0,
    tickIntervalOne: 100,
    tickCount: 0,
    cheesePerSecond: 0,
    cheesePerSecondAddition: 0,
    cpsStart: 0,
    cpsEnd: 0,
    cpsCheck: 0,
    cheeseImageAchievement: 0,
    achievementCheese: 0,
    clickAudio: 'cheeseMedia/audio/cheeseClickedSFX(click).mp3',
    gun: 0,
    rocket: 0,
}
function save() {
    localStorage.setItem('cheeseSave', JSON.stringify(cheeseData))
    localStorage.setItem('cheeseBoxImages', JSON.stringify(document.getElementById("cheeseBox").innerHTML))
}
function load(x) {
    if(x == 0) {
        window.location.reload()
    }
    cheeseData = JSON.parse(localStorage.getItem('cheeseSave'))
    document.getElementById('cheeseBox').innerHTML = JSON.parse(localStorage.getItem('cheeseBoxImages'))
    if (cheeseData.cheeseAlert === 1) {
        cheeseData.imageSrc = 'cheeseMedia/goldCheese.gif'
        cheeseData.goldCheese = 'cheeseMedia/cosmicCheese.jpeg'
        document.getElementById("headerImage").innerHTML = imageTwo
    } else if (cheeseData.cheeseAlert === 2) {
        cheeseData.imageSrc = 'cheeseMedia/cosmicCheese.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/smellyCheese.jpeg'
        document.getElementById("headerImage").innerHTML = imageThree
    } else if (cheeseData.cheeseAlert === 3) {
        cheeseData.iageSrc = 'cheeseMedia/smellyCheese.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/cheeseCakeNormal.jpeg'
        document.getElementById("headerImage").innerHTML = imageFour
    } else if (cheeseData.cheeseAlert === 4){
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeNormal.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/cheeseCakeFruit.jpeg'
        document.getElementById("headerImage").innerHTML = imageFive
    } else if (cheeseData.cheeseAlert === 5){
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeFruit.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/cheeseCakeChocolateMarble.jpeg'
        document.getElementById("headerImage").innerHTML = imageSix
    } else if (cheeseData.cheeseAlert === 6){
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeChocolateMarble.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/camembert.jpeg'
        document.getElementById("headerImage").innerHTML = imageSeven
    } else if (cheeseData.cheeseAlert === 7){
        cheeseData.imageSrc = 'cheeseMedia/camembert.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/americanCheese.jpeg'
        document.getElementById("headerImage").innerHTML = imageEight
    }
    if (cheeseData.gun === 1) {
        document.getElementById("gunAppear").classList.add("sound-box")
        document.getElementById("gunBox").classList.remove("sound-box")
        document.getElementById("gunBox").classList.add("sound-box-visible")
    }
    if (cheeseData.rocket === 1) {
        document.getElementById("rocketAppear").classList.add("sound-box")
        document.getElementById("rocketBox").classList.remove("sound-box")
        document.getElementById("rocketBox").classList.add("sound-box-visible")
    }
    drawElementsFromCheeseData()
    loadInterval()
}
function dataClear() {
    if (confirm("Are you sure you want to clear your save file? This action cannot be reverted.") === true) {
        cheeseData = {
            regularCounter: 0,
            goldenCounter: 0,
            goldCheese: 'cheeseMedia/goldCheese.gif',
            imageSrc: 'cheeseMedia/cheese.jpeg',
            cheeseAddition: 1,
            cheeseUpgradeAmount: 0,
            cheeseUpgradeCost: 50,
            cheeseAlert: 0,
            extraUpgradeCost: 5,
            extraChance: 0,
            goldCheeseAddition: 1,
            goldCheeseChance: 1,
            specialUpgradeCost: 5,
            specialUpgradeAmount: 0,
            regularAutoClickerCostOne: 1500,
            goldAutoClickerCostOne: 250,
            autoClickerActiveOne: 0,
            autoClickerRefresh: 50,
            critStrike: 0,
            loopAmount: 0,
            autoClickerRate: 0,
            tickIntervalOne: 100,
            tickCount: 0,
            cheesePerSecond: 0,
            cheesePerSecondAddition: 0,
            cpsStart: 0,
            cpsEnd: 0,
            cpsCheck: 0,
            cheeseImageAchievement: 0,
            achievementCheese: 0,
            clickAudio: 'cheeseMedia/audio/cheeseClickedSFX(click).mp3',
            gun: 0,
            rocket: 0,
        }
        document.getElementById("headerImage").innerHTML = imageOne
        document.getElementById("gunAppear").classList.remove("sound-box")
        document.getElementById("gunBox").classList.add("sound-box")
        document.getElementById("gunBox").classList.remove("sound-box-visible")
        document.getElementById("rocketAppear").classList.remove("sound-box")
        document.getElementById("rocketBox").classList.add("sound-box")
        document.getElementById("rocketBox").classList.remove("sound-box-visible")
        document.getElementById("specialUpgradeBox").classList.remove("sound-box")
        document.getElementById("extraUpgradeBox").classList.remove("sound-box")
        drawElementsFromCheeseData()
        document.getElementById("cheeseBox").innerHTML = ""
        localStorage.setItem('cheeseSave', JSON.stringify(cheeseData))
        localStorage.setItem('cheeseBoxImages',JSON.stringify(document.getElementById("cheeseBox").innerHTML))
    }
}
function clearImages() {
    document.getElementById("cheeseBox").innerHTML = ""
    localStorage.setItem('cheeseBoxImages'),JSON.stringify(document.getElementById("cheeseBox").innerHTML)
}
function loadInterval() {
    let rate = cheeseData.autoClickerRate
    for(var x = 1; x <= rate; x++) {
        autoIntervalOne()
    }
}
function testCheese() {
    cheeseData.regularCounter += 100000000000000000
    cheeseData.goldenCounter += 100000000000000000
    setImages()
    drawElementsFromCheeseData()
}
function drawElementsFromCheeseData() {
    cheeseData.regularCounter = Math.floor(cheeseData.regularCounter)
    cheeseData.goldenCounter = Math.floor(cheeseData.goldenCounter)
    document.getElementById("stupid").innerHTML = cheeseData.regularCounter
    document.getElementById("golden").innerHTML = cheeseData.goldenCounter
    document.getElementById("cheesePerClick").innerHTML = cheeseData.cheeseAddition
    document.getElementById("goldCheesePerClick").innerHTML = cheeseData.goldCheeseAddition
    document.getElementById("autoClickerRate").innerHTML = cheeseData.autoClickerRate
    document.getElementById("regularAutoClickerDisplay").innerHTML = Math.floor(cheeseData.regularAutoClickerCostOne)
    document.getElementById("goldAutoClickerDisplay").innerHTML = Math.floor(cheeseData.goldAutoClickerCostOne)
    document.getElementById("cheeseUpgradeDisplay").innerHTML = cheeseData.cheeseUpgradeAmount
    document.getElementById("upgradeCost").innerHTML = Math.floor(cheeseData.cheeseUpgradeCost)
    document.getElementById("extraUpgradeCostDisplay").innerHTML = Math.floor(cheeseData.extraUpgradeCost)
    document.getElementById("extraUpgradeAmountDisplay").innerHTML = cheeseData.extraChance
    document.getElementById("critChance").innerHTML = "1/" + (100 - cheeseData.extraChance)
    document.getElementById("specialUpgradeDisplay").innerHTML = cheeseData.specialUpgradeAmount
    document.getElementById("specialCostDisplay").innerHTML = Math.floor(cheeseData.specialUpgradeCost)
    document.getElementById("chanceForSpecialCheese").innerHTML = "1/" + (101 - cheeseData.goldCheeseChance)
    document.getElementById("achievmentCheese").innerHTML = cheeseData.achievementCheese
    document.getElementById("cps").innerHTML = Math.floor(0.125*(cheeseData.cheeseAddition * cheeseData.cheesePerSecondAddition))
    if (cheeseData.goldCheeseChance >= 101) {
        document.getElementById("specialUpgradeBox").classList.add("sound-box")
    }
    if (cheeseData.extraChance >= 99) {
        document.getElementById("extraUpgradeBox").classList.add("sound-box")
    }
}
function setImages() {
    if (cheeseData.regularCounter >= 24999 && cheeseData.cheeseAlert === 0) {
        cheeseData.imageSrc = 'cheeseMedia/goldCheese.gif'
        cheeseData.goldCheese = 'cheeseMedia/cosmicCheese.jpeg'
        document.getElementById("headerImage").innerHTML = imageTwo
        alert("You got a new cheese - Golden")
        cheeseData.cheeseAlert = 1
        cheeseData.cheeseAddition += 5
        cheeseData.goldCheeseAddition += 1
        cheeseData.achievementCheese += 1
    }
    if (cheeseData.regularCounter >= 99999 && cheeseData.cheeseAlert === 1) {
        cheeseData.imageSrc = 'cheeseMedia/cosmicCheese.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/smellyCheese.jpeg'
        document.getElementById("headerImage").innerHTML = imageThree
        alert("You got another new cheese - Cosmic")
        cheeseData.cheeseAlert = 2
        cheeseData.cheeseAddition += 10
        cheeseData.goldCheeseAddition += 2
        cheeseData.achievementCheese += 1
    }
    if (cheeseData.regularCounter >= 2499999 && cheeseData.cheeseAlert === 2) {
        cheeseData.imageSrc = 'cheeseMedia/smellyCheese.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/cheeseCakeNormal.jpeg'
        document.getElementById("headerImage").innerHTML = imageFour
        alert("You got another new cheese - Smelly")
        cheeseData.cheeseAlert = 3
        cheeseData.cheeseAddition += 50
        cheeseData.goldCheeseAddition += 10
        cheeseData.achievementCheese += 1
    }
    if (cheeseData.regularCounter >= 9999999 && cheeseData.cheeseAlert === 3) {
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeNormal.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/cheeseCakeFruit.jpeg'
        document.getElementById("headerImage").innerHTML = imageFive
        alert("You got another new cheese - Cheese Cake")
        cheeseData.cheeseAlert = 4
        cheeseData.cheeseAddition += 100
        cheeseData.goldCheeseAddition += 20
        cheeseData.achievementCheese += 1
    }
    if (cheeseData.regularCounter >= 249999999 && cheeseData.cheeseAlert === 4) {
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeFruit.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/cheeseCakeChocolateMarble.jpeg'
        document.getElementById("headerImage").innerHTML = imageSix
        alert("You got another new cheese - Cheese Cake Syrup")
        cheeseData.cheeseAlert = 5
        cheeseData.cheeseAddition += 500
        cheeseData.goldCheeseAddition += 100
        cheeseData.achievementCheese += 1
    }
    if (cheeseData.regularCounter >= 999999999 && cheeseData.cheeseAlert === 5) {
        cheeseData.imageSrc = 'cheeseMedia/cheeseCakeChocolateMarble.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/camembert.jpeg'
        document.getElementById("headerImage").innerHTML = imageSeven
        alert("You got another new cheese - Cheese Cake Chocolate Marble")
        cheeseData.cheeseAlert = 6
        cheeseData.cheeseAddition += 1000
        cheeseData.goldCheeseAddition += 200
        cheeseData.achievementCheese += 1
    }
    if (cheeseData.regularCounter >= 999999999 && cheeseData.cheeseAlert === 6) {
        cheeseData.imageSrc = 'cheeseMedia/camembert.jpeg'
        cheeseData.goldCheese = 'cheeseMedia/americanCheese.jpeg'
        document.getElementById("headerImage").innerHTML = imageEight
        alert("You got another new cheese - Camembert")
        cheeseData.cheeseAlert = 7
        cheeseData.cheeseAddition += 1500
        cheeseData.goldCheeseAddition += 300
        cheeseData.achievementCheese += 1
    }
    drawElementsFromCheeseData()
}
function cheeseUpgrade() {
    if (cheeseData.regularCounter >= cheeseData.cheeseUpgradeCost) {
        cheeseData.cheeseAddition += 1
        cheeseData.goldCheeseAddition += 1
        cheeseData.regularCounter -= Math.floor(cheeseData.cheeseUpgradeCost)
        cheeseData.cheeseUpgradeCost = Math.floor(cheeseData.cheeseUpgradeCost*1.2)
        cheeseData.cheeseUpgradeAmount += 1
    }
    drawElementsFromCheeseData()
}
function chanceForExtra() {
    if (cheeseData.goldenCounter >= cheeseData.extraUpgradeCost) {
        cheeseData.goldenCounter -= Math.floor(cheeseData.extraUpgradeCost)
        cheeseData.extraChance += 1
        cheeseData.extraUpgradeCost *= 1.5
    }
    drawElementsFromCheeseData()
}
function autoCheese() {
    if (cheeseData.goldenCounter >= cheeseData.goldAutoClickerCostOne && cheeseData.regularCounter >= cheeseData.regularAutoClickerCostOne && cheeseData.tickIntervalOne != 0) {
        cheeseData.regularCounter -= Math.floor(cheeseData.regularAutoClickerCostOne)
        cheeseData.goldenCounter -= Math.floor(cheeseData.goldAutoClickerCostOne)
        cheeseData.regularAutoClickerCostOne = Math.floor(cheeseData.regularAutoClickerCostOne * 1.2)
        cheeseData.goldAutoClickerCostOne = Math.floor(cheeseData.goldAutoClickerCostOne * 1.2)
        cheeseData.autoClickerActiveOne = 1
        cheeseData.autoClickerRate += 1
        cheeseData.tickIntervalOne -= 1
        cheeseData.cheesePerSecondAddition += 2
    }

    drawElementsFromCheeseData()
    autoIntervalOne()
}
function specialChanceUpgrade() {
    if (cheeseData.goldenCounter >= cheeseData.specialUpgradeCost) {
        cheeseData.goldenCounter -= Math.floor(cheeseData.specialUpgradeCost)
        cheeseData.goldCheeseChance += 1
        cheeseData.specialUpgradeCost = Math.floor(cheeseData.specialUpgradeCost * 1.5)
        cheeseData.specialUpgradeAmount += 1
    }
    drawElementsFromCheeseData()
}
function pictureAchievement() {
    if (cheeseData.cheeseImageAchievement === 0) {
        alert("good job lol")
        cheeseData.achievementCheese += 1
        cheeseData.cheeseImageAchievement += 1
        drawElementsFromCheeseData()
    }
}
function cheesyFunction(x) {
    const div = document.createElement('wrap')
    const cheese = document.createElement('img')
    let math = Math.floor(Math.random() * 101 - cheeseData.goldCheeseChance)
    let extraMath = Math.floor(Math.random() * 101 - cheeseData.extraChance)
    if (extraMath === 1 && cheeseData.extraChance >= 1) {
        cheeseData.cheeseAddition *= 100
        cheeseData.critStrike = 1
    }
    if (math <= 1) {
        cheeseData.goldenCounter += cheeseData.goldCheeseAddition * x
        cheeseData.regularCounter += cheeseData.cheeseAddition * x
        cheese.src = cheeseData.goldCheese
        if (cheeseData.critStrike === 1) {
            cheeseData.cheeseAddition /= 100
            cheeseData.critStrike -= 1
        }
    } else {
        cheeseData.regularCounter += cheeseData.cheeseAddition * x
        cheese.src = cheeseData.imageSrc
        if (cheeseData.critStrike === 1) {
            cheeseData.cheeseAddition /= 100
            cheeseData.critStrike -= 1
        }
    }
    setImages()
    cheese.setAttribute('id','cheesePicture')
    cheese.setAttribute('onclick','pictureAchievement()')
    div.appendChild(cheese)
    document.getElementById("cheeseBox").appendChild(div)
    drawElementsFromCheeseData()
} 
function autoIntervalOne() {
    setInterval(function() {
        cheeseData.tickCount += 10
        if (cheeseData.autoClickerActiveOne === 1 && cheeseData.tickCount % 500 === 0){
            cheesyFunction(0.25)
        }
        if (cheeseData.tickCount % 1000 === 0 && cheeseData.cpsCheck === 0) {
            cheeseData.cpsStart = cheeseData.regularCounter
            cheeseData.cpsCheck = 1
        }
    },10)
}
function imageBounce() {
    let cheeseAudio = new Audio(cheeseData.clickAudio)
    cheeseAudio.play()
    document.getElementById("cheeseImage").style.animation = "onClickBounce 0.25s 1"
    setTimeout(function(){
        document.getElementById("cheeseImage").style.animation = "onClickBounceBack 0.25s 1"
    },50)
}
function gunBounce() {
    let gunAudio = new Audio("cheeseMedia/audio/gun.mp3")
    gunAudio.play()
    document.getElementById("gunImage").style.animation = "onClickGunBounce 0.5s 1"
    setTimeout(function(){
        document.getElementById("gunImage").style.animation = "oncClickGunBounceBack 0.25s 1"
        imageBounce()
    },75)
}
function rocketBounce() {
    let rocketAudio = new Audio("cheeseMedia/audio/rocket.mp3")
    rocketAudio.play()
    document.getElementById("rocketImage").style.animation = "onClickRocketBounce 0.5s 1"
    setTimeout(function(){
        document.getElementById("rocketImage").style.animation = "oncClickRocketBounceBack 0.25s 1"
        imageBounce()
    },75)
}
function soundBox() {
    soundBoxItem.classList.remove("sound-box")
    soundBoxItem.classList.add("sound-box-visible")
    upgradesBoxItem.classList.remove("upgrades-box")
    upgradesBoxItem.classList.add("upgrades-box-invisible")
    document.getElementById('soundBoxToggle').setAttribute('onclick','soundBoxReturn()')
}
function soundBoxReturn() {
    soundBoxItem.classList.remove("sound-box-visible")
    soundBoxItem.classList.add("sound-box")
    upgradesBoxItem.classList.remove("upgrades-box-invisible")
    upgradesBoxItem.classList.add("upgrades-box")
    document.getElementById('soundBoxToggle').setAttribute('onclick','soundBox()')
}
/*function loggit(message) {
    let msgContainer = document.createElement('div')
    msgContainer.innerHTML = message
    msgContainer.classList += 'left'
    document.getElementById('console').appendChild(msgContainer)
}*/
function audioChange(x) {
    const audioFile = [
        "cheeseMedia/audio/cheeseClickedSFX(amogus).mp3",
        "cheeseMedia/audio/cheeseClickedSFX(baby).mp3",
        "cheeseMedia/audio/cheeseClickedSFX(bonk).mp3",
        "cheeseMedia/audio/cheeseClickedSFX(bruh).mp3",
        "cheeseMedia/audio/cheeseClickedSFX(car-bomb).mp3",
        "cheeseMedia/audio/cheeseClickedSFX(click).mp3",
        "cheeseMedia/audio/cheeseClickedSFX(huh).mp3",
        "cheeseMedia/audio/cheeseClickedSFX(nails).mp3",
        "cheeseMedia/audio/cheeseClickedSFX(pacman).mp3",
        "cheeseMedia/audio/cheeseClickedSFX(pipe).mp3",
        "cheeseMedia/audio/cheeseClickedSFX(puffer).mp3",
        "cheeseMedia/audio/cheeseClickedSFX(spaceRocket).mp3",
        "cheeseMedia/audio/cheeseClickedSFX(steve).mp3",
        "cheeseMedia/audio/cheeseClickedSFX(usa).mp3",
        "cheeseMedia/audio/cheeseClickedSFX(whisk).mp3",
        "cheeseMedia/audio/cheeseClickedSFX(yoda).mp3",
    ]
    cheeseData.clickAudio = audioFile[x]
}
function gunAppear() {
    if (cheeseData.achievementCheese >= 1) {
        cheeseData.gun = 1;
        cheeseData.achievementCheese -= 1
        document.getElementById("gunAppear").classList.add("sound-box")
        document.getElementById("gunBox").classList.remove("sound-box")
        document.getElementById("gunBox").classList.add("sound-box-visible")
    } else {
        return
    }
}
function rocketAppear() {
    if (cheeseData.achievementCheese >= 5) {
        cheeseData.rocket = 1;
        cheeseData.achievementCheese -= 5
        document.getElementById("rocketAppear").classList.add("sound-box")
        document.getElementById("rocketBox").classList.remove("sound-box")
        document.getElementById("rocketBox").classList.add("sound-box-visible")
    } else {
        return
    }
}
function globalTimer() {
    setInterval(function(){
        let random = Math.floor(Math.random()*1000000000000)
        if (random == 1) {
            cheeseData.regularCounter = Math.floor(cheeseData.regularCounter / 2)
            cheeseData.goldenCounter = Math.floor(cheeseData.goldenCounter / 2)
            alert("Get fucked")
            drawElementsFromCheeseData()
        }
    },1000)
}
globalTimer()