const countries = [
    {
        name: "Литва",
        capital: "Вильнюс",
        region: "Европа",
        population: 6,
        borders: "Беларусь"
    }
]
function game() {
    let play = true 
    while (play) {
        const country = countries[Math.random()]
        const time = performance.now()
        let attempt = 3 
        let penalties = 0
        let howmuchhints = 0
        const hints = [
            'Hint 1 Регион - ${country.region}',
            'Hint 2 Население - ${country.population}',
            'Hint 3 Граничит - ${country.borders}'
        ]
        while (attempt>0) {
            const guess = prompt('В какой стране этот город является столицей? Осталось ${attempt} попыток')
            if (!guess){
                alert("Игра прервана")
                return
            }
            if (guess===country.name){
                const timeEnd = performance.now()
                const timeInTotal = Math.round(timeEnd - time + penalties)
                alert('Правильно, вы угадали за ${timeInTotal} милисек')
                break;
            }
            else {
                attempt --
                if (attempt > 0){
                    alert(hints[hintIndex])
                    hintIndex++
                    penalties += 1000
                }
            }
        }
        if (attempt === 0) {
            alert('Все, проебали, ответ был ${country.name}')
        }
        play = confirm("Еще?")

    }
    alert("Лоох")
}

game()