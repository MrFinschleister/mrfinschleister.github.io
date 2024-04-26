let image = document.getElementById("cheeseImage")
let currentLocation = window.location.href
let clickSounds = [
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
let images = [
    "cheeseMedia/cheese.jpeg",
    "cheeseMedia/goldCheese.gif",
    "cheeseMedia/cosmicCheese.jpeg",
    "cheeseMedia/smellyCheese.jpeg",
    "cheeseMedia/cheeseCakeNormal.jpeg",
    "cheeseMedia/cheeseCakeFruit.jpeg",
    "cheeseMedia/cheeseCakeChocolateMarble.jpeg",
    "cheeseMedia/camembert.jpeg",
    "cheeseMedia/americanCheese.jpeg",
    "cheeseMedia/freakyCheese.jpeg",
]
let levelMessages = [
    "Golden",
    "Cosmic",
    "Smelly",
    "Cheese Cake Normal",
    "Cheese Cake Fruit",
    "Cheese Cake Chocolate Marble",
    "Camembert",
    "American",
    "Freaky",
]
let data = {
    regularCheese: 0,
    specialCheese: 0,
    achievementCheese: 0,
    regularAddition: 1,
    specialAddition: 1,
    currentImage: 0,
    clickAudioIndex: 5,
    levelFlag: 0,
    levelFlagCost: 1500,
    regularUpgradeCost: 50,
    regularUpgradeAmount: 0,
    specialCheeseChance: 0,
    specialUpgradeCost: 10,
    specialUpgradeAmount: 0,
    gunUpgradeOne: false,
    gunUpgradeTwo: false,
    autoClickerOneCostRegular: 1500,
    autoClickerOneCostSpecial: 50,
    autoClickerOneAmount: 0,
    cheesePerSecond: 0,
    imageAchievement: false,
    inAdmin: false,
}
let dataBackup = {
    regularCheese: 0,
    specialCheese: 0,
    achievementCheese: 0,
    regularAddition: 1,
    specialAddition: 1,
    currentImage: 0,
    clickAudioIndex: 5,
    levelFlag: 0,
    levelFlagCost: 1500,
    regularUpgradeCost: 50,
    regularUpgradeAmount: 0,
    specialCheeseChance: 0,
    specialUpgradeCost: 10,
    specialUpgradeAmount: 0,
    gunUpgradeOne: false,
    gunUpgradeTwo: false,
    autoClickerOneCostRegular: 1500,
    autoClickerOneCostSpecial: 50,
    autoClickerOneAmount: 0,
    cheesePerSecond: 0,
    imageAchievement: false,
    inAdmin: false,
}
let loadingSave = false
let tick = 0
let soundBoxStatus = true
let minigameBoxStatus = true
function setImages(checkAlert) {
    while (data.regularCheese >= data.levelFlagCost && data.levelFlag < images.length-2) {
        if (checkAlert) {
            alert('You got a new cheese! (' + levelMessages[data.levelFlag] + ')')
        }
        data.achievementCheese += 1
        data.levelFlagCost *= 5
        data.levelFlag += 1
        data.regularAddition += 4 * 5**data.levelFlag
        data.specialAddition += 2 * 5**data.levelFlag
    }
    if (data.gunUpgradeOne) {
        document.getElementById('gunImageOne').style.display = "inline"
        document.getElementById('gunUpgradeOneCost').innerHTML = '- - - -'
        document.getElementById('gunUpgradeOne').innerHTML = 'BOUGHT'
    }
    if (data.gunUpgradeTwo) {
        document.getElementById('gunImageTwo').style.display = "inline"
        document.getElementById('gunUpgradeTwoCost').innerHTML = '- - - -'
        document.getElementById('gunUpgradeTwo').innerHTML = 'BOUGHT'
    }
    image.src = images[data.levelFlag]
}
function cheesyFunction(animate, gunElement, multiplier) {
    let random = Math.floor(Math.random()*(100-data.specialCheeseChance))
    const el = document.createElement('img')
    if (gunElement != false) {
        document.getElementById('gunImage' + gunElement).style.animation = "gun" + gunElement + "Shot 0.25s 1"
        if (gunElement === "One") {
            let shotAudio = new Audio('cheeseMedia/audio/gun.mp3')
            shotAudio.play()
        } else if (gunElement === "Two") {
            let shotAudio = new Audio('cheeseMedia/audio/rocket.mp3')
            shotAudio.play()
        }
        setTimeout(function(){
            document.getElementById('gunImage' + gunElement).style.animation = "gun" + gunElement + "Back 0.25s 1"
        },50)
    }
    if (random === 1) {
        data.specialCheese += data.specialAddition*multiplier
        el.src = images[data.levelFlag+1]
    } else {
        el.src = images[data.levelFlag]
    }
    if (!data.imageAchievement && document.getElementById('imageBox').innerHTML === "") {
        el.setAttribute('onclick','imageAchievement()')
    }
    if (animate) {
        let onClickAudio = new Audio(clickSounds[data.clickAudioIndex])
        onClickAudio.play()
        document.getElementById('imageBox').appendChild(el)
        image.style.animation = "clickBounce 0.25s 1"
        setTimeout(function(){
            image.style.animation = "clickBounceBack 0.25s 1"
        },50)
    }
    data.regularCheese += data.regularAddition*multiplier
    setImages(true) 
    drawElements()
}
function drawElements() {
    document.getElementById('regularCheese').innerHTML = data.regularCheese
    document.getElementById('specialCheese').innerHTML = data.specialCheese
    document.getElementById('achievementCheese').innerHTML = data.achievementCheese
    document.getElementById('regularAddition').innerHTML = data.regularAddition
    document.getElementById('specialAddition').innerHTML = data.specialAddition
    document.getElementById('cheesePerSecond').innerHTML = data.cheesePerSecond
    document.getElementById('regularUpgradeAmount').innerHTML = data.regularUpgradeAmount
    document.getElementById('regularUpgradeCost').innerHTML = data.regularUpgradeCost
    document.getElementById('specialUpgradeAmount').innerHTML = data.specialUpgradeAmount
    document.getElementById('specialUpgradeCost').innerHTML = data.specialUpgradeCost
    document.getElementById('autoClickerOneCostRegular').innerHTML = data.autoClickerOneCostRegular
    document.getElementById('autoClickerOneCostSpecial').innerHTML = data.autoClickerOneCostSpecial
    document.getElementById('autoClickerOneAmount').innerHTML = data.autoClickerOneAmount
}
function regularUpgrade() {
    if (data.regularCheese >= data.regularUpgradeCost) {
        data.regularCheese -= data.regularUpgradeCost
        data.regularUpgradeAmount += 1
        data.regularUpgradeCost = Math.floor(data.regularUpgradeCost * 1.25)
        data.regularAddition += 1
        data.specialAddition += 1
    }
    drawElements()
}
function specialUpgrade() {
    if (data.specialCheese >= data.specialUpgradeCost) {
        data.specialCheese -= data.specialUpgradeCost
        data.specialUpgradeAmount += 1
        data.specialUpgradeCost = Math.floor(data.specialUpgradeCost * 1.25)
    }
    drawElements()
}
function gunUpgradeOne() {
    if (data.achievementCheese >= 1 && !data.gunUpgradeOne) {
        data.achievementCheese -= 1
        data.gunUpgradeOne = true
    }
    setImages()
    drawElements()
}
function gunUpgradeTwo() {
    if (data.achievementCheese >= 5 && !data.gunUpgradeTwo) {
        data.achievementCheese -= 5
        data.gunUpgradeTwo = true
    }
    setImages()
    drawElements()
}
function autoClickerOne() {
    if (data.regularCheese >= data.autoClickerOneCostRegular && data.specialCheese >= data.autoClickerOneCostSpecial) {
        data.regularCheese -= data.autoClickerOneCostRegular
        data.specialCheese -= data.autoClickerOneCostSpecial
        data.autoClickerOneAmount += 1
        data.autoClickerOneCostRegular = Math.round(data.autoClickerOneCostRegular * 1.5)
        data.autoClickerOneCostSpecial = Math.round(data.autoClickerOneCostSpecial * 1.5)
        autoClickerOneStart()
    }
    drawElements()
}
function autoClickerOneStart(x) {
    if (data.autoClickerOneAmount === 1 || x === 0) {
        setInterval(function() {
            tick += 10
        },10)
    }
    if (tick % 1000 != 0) {
        setTimeout(function(){
            setInterval(function() {
                if (tick % 1000 === 0){
                    cheesyFunction(false, false, 1)
                }
                data.cheesePerSecond = data.autoClickerOneAmount*data.regularAddition
            },10)
        },(tick % 1000)/10)
    } else {
        setInterval(function() {
            if (tick % 1000 === 0){
                cheesyFunction(false, false, 1)
            }
            data.cheesePerSecond = data.autoClickerOneAmount*data.regularAddition
        },10)
    }
    drawElements()
}
function imageAchievement() {
    if (!data.imageAchievement) {
        data.imageAchievement = true
        data.achievementCheese += 1
        alert('good job lol')
    }
    drawElements()
}
function save() {
    if (!loadingSave) {
        localStorage.setItem('data',JSON.stringify(data))
        localStorage.setItem('imageBoxContents',JSON.stringify(document.getElementById('imageBox').innerHTML))
    }
}
function load(x) {
    if (x) {
        if (currentLocation[currentLocation.length-1] === 'a') {
            currentLocation = currentLocation.slice(0,-2)
        }
        loadingSave = true
        window.location.replace(currentLocation)
    } else {
        if (JSON.parse(localStorage.getItem('data')) != null) {
            data = JSON.parse(localStorage.getItem('data'))
        }
        document.getElementById('imageBox').innerHTML = JSON.parse(localStorage.getItem('imageBoxContents'))
        for (var x = 0; x < data.autoClickerOneAmount; x++) {
            autoClickerOneStart(x)
        }
    }
    document.body.style.display = "inline"
    drawElements()
    setImages(true)
}
function reset() {
    if (confirm("Are you sure you want to reset?")) {
        data = dataBackup
        document.getElementById('imageBox').innerHTML = ""
        if (currentLocation[currentLocation.length-1] === 'a') {
            currentLocation = currentLocation.slice(0,-2)
        }
        window.location.replace(currentLocation)
    }
}
function clearImages() {
    if (confirm("Are you sure you'd like to clear the images?")) {
        document.getElementById('imageBox').innerHTML = ""
    }
}
function test() {
    if (data.testMode) {
        data.regularCheese += 1000000000
        data.specialCheese += 1000000000
        data.achievementCheese += 1000000000
        setImages(false)
        drawElements()
    } else if (currentLocation[currentLocation.length-1] === 'a') {
        if (confirm('Enter test mode?')) {
            data.testMode = true
        }
    }
}
function audioChange(selectedAudio) {
    data.clickAudioIndex = selectedAudio
}
function soundBoxToggle() {
    if (soundBoxStatus) {
        soundBoxStatus = false
        document.getElementById('soundBox').style.display = "inline"
    } else {
        soundBoxStatus = true
        document.getElementById('soundBox').style.display = "none"
    }
}
function minigameBoxToggle() {
    if (minigameBoxStatus) {
        minigameBoxStatus = false
        document.getElementById('minigameBox').style.display = "inline"
    } else {
        minigameBoxStatus = true
        document.getElementById('minigameBox').style.display = "none"
    }
}