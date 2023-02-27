document.addEventListener('DOMContentLoaded', fetchPups)

function fetchPups() {
    fetch('http://localhost:3000/pups')
    .then(response => response.json())
    .then(pups => addAllPups(pups))
}

function addAllPups(pups) {
    const dogBar = document.getElementById("dog-bar")
    
    pups.forEach((pup) => {
        const newDogSpan = document.createElement('span')
        newDogSpan.innerText = pup.name

        newDogSpan.dataset.id = pup.id
        
        newDogSpan.addEventListener('click', handlePupClick)

        dogBar.append(newDogSpan)
    });
}

function handlePupClick(e) {
fetch(`http://localhost:3000/pups/${e.target.dataset.id}`)
.then(response => response.json())
.then(pupData => addOnePup(pupData))
}

function addOnePup(pup) {
    const dogInfo = document.getElementById('dog-info')

// this clears the div so theyres only 1 picture
    dogInfo.innerHTML = ''

    const pupImage = document.createElement('img')
    pupImage.src = pup.image
    
    const pupName = document.createElement('h2')
    pupName.innerText = pup.name

    const dogButton = document.createElement('button')
    //ternary statement, if isGoodDog is true or false
    dogButton.innerText = pup.isGoodDog ? 'Good Dog!' : 'Bad dog!'

    dogButton.addEventListener('click', handlePupButtonClick)


    dogInfo.append(pupImage, pupName, dogButton)
}

function handlePupButtonClick(e) {
if (e.target.innerText === 'Good dog!') {
    e.target.innerText = 'Bad dog!'
}   else {
        e.target.innerText = 'Good dog!'
    }
}

