const infoObj = [
    {
        qoutes: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        name: 'Tanya Sinclair',
        workPosition: 'UX Engineer',
        imageSource: `./images/image-tanya.jpg`
    },
    {
        qoutes: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        name: 'John Tarkpor',
        workPosition: 'Junior Front-end Developer',
        imageSource: `./images/image-john.jpg`
    }
]

let indexCount = 0;

window.addEventListener('load', (e) => {
    e.preventDefault();
    loaderData(infoObj, indexCount)
})


function increment() {
    if (indexCount === infoObj.length - 1) {
        indexCount = 0
    } else {
        indexCount++
    }
    loaderData(infoObj, indexCount)
}

function decrement() {
    if (indexCount === 0) {
        indexCount = infoObj.length - 1
    } else {
        indexCount--
    }
    loaderData(infoObj, indexCount)
}

const textFloat = document.querySelector('.text-float')
const imgSource = document.querySelector('.image-container')

function loaderData(data, index) {

    textFloat.innerHTML = `
    <div class="text-float">
        <p class="qoutes">
          ${data[index].qoutes}
        </p>
        <p class="name">${data[index].name} <span class="title-work">${data[index].workPosition}</span></p>
      </div>
    `
    imgSource.innerHTML = `
    <img src="${data[index].imageSource}" id="Image-source">
    `
}

const incremntIndex = document.querySelector('.next')
incremntIndex.addEventListener('click', () => {
    increment()
})

const prev = document.querySelector('.prev')

prev.addEventListener('click', () => {
    decrement()
})