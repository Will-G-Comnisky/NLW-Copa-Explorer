function createGame(team1, time1, team2) {
  return `
    <li>
        <img src="./Assets/icon-${team1}.svg" alt="bandeira da ${team1}" />
        <strong>${time1}</strong>
        <img src="./Assets/icon-${team2}.svg" alt="bandeira de ${team2}" />
     </li>
  `
}

let delay = -0.4

function createCard(date, day, games) {
  delay = delay + 0.5
  return `
    <div class="card1" style="animation-delay: ${delay}s" >
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
            
          </ul>
        </div>
  `
}
document.querySelector("#app").innerHTML = `
<header>
        <img src="./Assets/header-logo.svg" alt="Imagem da logo da NLW Copa" />
      </header>
      <main id="cards">
        ${createCard(
          `24/11`,
          `quinta`,
          createGame("switzerland", "07:00 A.M", "cameroon") +
            createGame("brazil", "04:00 P.M", "serbia")
        )}
        ${createCard(
          `28/11`,
          `segunda`,
          createGame("cameroon", "07:00 A.M", "serbia") +
            createGame("brazil", "01:00 P.M", "switzerland")
        )}
        ${createCard(
          `02/12`,
          `sexta`,
          createGame("serbia", "04:00 P.M", "switzerland") +
            createGame("cameroon", "04:00 P.M", "brazil")
        )}
      </main>
`
