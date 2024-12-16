function generatSelectionOptions(min, max, locate) {
  let select = document.getElementById(locate) 
  for (let i = min; i <= max; i++) {
    let option = document.createElement("option")
    option.value = i
    option.textContent = i
    select.appendChild(option)
  }

  console.log("deu certo o do:" + locate)
}

function initOptions() {
  generatSelectionOptions(1990, 2024, "year")
  generatSelectionOptions(1, 12, "mounth")
  generatSelectionOptions(1, 31, "day")
}