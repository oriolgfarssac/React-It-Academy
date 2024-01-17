"use strict";
const currentDate = new Date();
let puntuacion = 0;
let index = 0;
const joke = {
    jok: 'exampleJoke',
    score: 0,
    date: currentDate,
};
const reportAcudits = [joke,];
const rank = (num) => {
    switch (num) {
        case 1:
            reportAcudits[index].score = 1;
            break;
        case 2:
            reportAcudits[index].score = 2;
            break;
        case 3:
            reportAcudits[index].score = 3;
            break;
    }
};
const getWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=737325b3ec570869911191dedfad4f38')
        .then(res => res.json())
        .then(data => {
        const temps = String(data.weather.main);
        const temp = parseInt(data.main.temp);
        const kelvin = 273;
        const toCelcius = temp - kelvin;
        const total = toCelcius + 'ºC';
        const element = document.getElementById('temperature');
        if (element instanceof HTMLElement) {
            element.innerHTML = total;
        }
        const imgElement = document.getElementById('icon');
        switch (temps) {
            case 'Rain':
                imgElement.src = './icons/pluja.svg';
                break;
            case 'Clear':
                console.log('Clear');
                imgElement.src = './icons/sol.svg';
                break;
        }
    })
        .catch(error => {
        console.log('Error:', error);
    });
};
const getJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
        let broma = data.joke;
        const element = document.querySelector('#mostrarAcudits');
        element.innerHTML = broma;
        const newJoke = {
            jok: broma,
            score: puntuacion,
            date: currentDate,
        };
        reportAcudits.push(newJoke);
        index++;
        console.log(reportAcudits);
    })
        .catch(error => {
        // Handle any errors
        console.log('Error:', error);
    });
};
const randomJoke = () => {
    let numRandom = Math.floor(Math.random() * 2) + 1;
    switch (numRandom) {
        case 1:
            getJoke();
            break;
        case 2:
            getNorris();
            break;
    }
};
const getNorris = () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
        const acudit = data.value;
        const element = document.querySelector('#mostrarAcudits');
        element.innerHTML = acudit;
        const newJoke = {
            jok: acudit,
            score: puntuacion,
            date: currentDate,
        };
        reportAcudits.push(newJoke);
        index++;
        console.log(reportAcudits);
    });
};
window.onload = () => {
    getWeather();
    getNorris();
};
