var calc = () => {
    var tempe = document.getElementById('tempe')
    tempe = Number(tempe.value)
    let res = tempe * 1.8 + 32

    let result = document.getElementById('result')
    result.innerHTML = `A converção de ${tempe}°C para Fahrenheit resulta em ${res}°F`

}


