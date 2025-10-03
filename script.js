let pokemones = [
  {
    nombre: "Pikachu",
    nivel: 12,
    tipo: ["Eléctrico"],
    hp: 35,
    hp_total: 35,
    evolucion: true
  },
  {
    nombre: "Charmander",
    nivel: 10,
    tipo: ["Fuego"],
    hp: 39,
    hp_total: 39,
    evolucion: true
  },
  {
    nombre: "Squirtle",
    nivel: 9,
    tipo: ["Agua"],
    hp: 44,
    hp_total: 44,
    evolucion: true
  },
  {
    nombre: "BigFrank",
    nivel: 14,
    tipo: ["Aire"],
    hp: 90,
    hp_total: 90,
    evolucion: true
  }
];

let opcion = "";

while (opcion !== "salir") {
  opcion = prompt(
    "¿Qué querés hacer?\n1. Mostrar todos los pokemones\n2. Cargar nuevo Pokémon\n3. Restar HP\nEscribí 'salir' para terminar"
  );

  if (opcion === "1") {
    let mensaje = "Pokemones actuales:\n";
    for (let i = 0; i < pokemones.length; i++) {
      mensaje +=
        (i + 1) + ". " +
        pokemones[i].nombre +
        " | Nivel: " + pokemones[i].nivel +
        " | Tipo: " + pokemones[i].tipo.join(", ") +
        " | HP: " + pokemones[i].hp + "/" + pokemones[i].hp_total +
        " | Evoluciona: " + (pokemones[i].evolucion ? "Sí" : "No") +
        "\n";
    }
    alert(mensaje);
  }

  else if (opcion === "2") {
    let continuar = "s";
    while (continuar === "s") {
      let nombre = prompt("Nombre del Pokémon:");
      let nivel = Number(prompt("Nivel del Pokémon:"));
      let tipos = prompt("Tipos del Pokémon (separados por coma):").split(",");
      let hp_total = Number(prompt("HP total del Pokémon:"));
      let hp = hp_total;
      let evolucion = prompt("¿Puede evolucionar? (s/n)") === "s";

      let nuevo = {
        nombre: nombre,
        nivel: nivel,
        tipo: tipos,
        hp: hp,
        hp_total: hp_total,
        evolucion: evolucion
      };

      pokemones.push(nuevo);

      continuar = prompt("¿Querés agregar otro? (s/n)");
    }
  }

  else if (opcion === "3") {
    let nombre = prompt("¿A qué Pokémon le querés restar HP?");
    let encontrado = false;

    for (let i = 0; i < pokemones.length; i++) {
      if (pokemones[i].nombre.toLowerCase() === nombre.toLowerCase()) {
        let resta = Number(prompt("¿Cuánto HP querés restarle?"));
        pokemones[i].hp -= resta;
        if (pokemones[i].hp < 0) pokemones[i].hp = 0;
        alert(pokemones[i].nombre + " ahora tiene " + pokemones[i].hp + " HP.");
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      alert("No se encontró ese Pokémon.");
    }
  }

  else if (opcion === "salir") {
    alert("Programa finalizado.");
  }

  else {
    alert("Opción inválida.");
  }
}

