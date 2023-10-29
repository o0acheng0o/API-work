let apiKey = "068f6deca2a28b40cfed47f7b1d549a2";
let lat = 51.5074; // 伦敦的纬度
let lon = -0.1278; // 伦敦的经度
let weatherData;

function setup() {
    createCanvas(600, 400);
    background(220);

    // 使用"One Call" API获取数据
    loadJSON(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`, gotWeatherData);
}

function draw() {
    if (weatherData) {
        background(220);
        let barWidth = width / 8;
        for (let i = 0; i < weatherData.daily.length; i++) {
            let temp = weatherData.daily[i].temp.day - 273.15; 
            let barHeight = map(temp, -10, 40, 0, height - 50); 
            fill(100, 150, 250);
            rect(i * barWidth + 10, height - barHeight - 30, barWidth - 20, barHeight);
            fill(0);
            text(int(temp) + "°C", i * barWidth + barWidth / 2, height - 10);
        }
    }
}

function gotWeatherData(data) {
    weatherData = data;
}