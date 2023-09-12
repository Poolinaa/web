const getUserHtml = (name) =>
  `<div class="user_line">
        <div class="avatar"><p>${name[0] ?? ""}</p></div>
        <input type="text" class="text_input" value="${name}">
  </div>`;

const guests = [""];

let userInputs = document.querySelector(".user_inputs");
let addUserButton = document.querySelector(".base_button");

addUserButton.onclick = () => {
  if (guests.includes("")) {
    for (let i = 0; i < guests.length; i++) {
      const currentValue = guests[i];

      if (currentValue === "") {
        userInputs.children[i]
          .querySelector("input")
          .classList.add("error_guest_name");
      }
    }

    return;
  }

  guests.push("");
  render(guests);
};

const render = (guests) => {
  console.log(guests);
  userInputs.innerHTML = null;

  for (let i = 0; i < guests.length; i++) {
    let guestName = guests[i];
    userInputs.insertAdjacentHTML("beforeend", getUserHtml(`${guestName}`));

    userInputs.children[i].querySelector("input").oninput = (e) => {
      const lastGuestName = guests[i];
      guests[i] = e.target.value;

      if (lastGuestName[0] !== guests[i][0]) {
        userInputs.children[i].querySelector(".avatar").innerHTML =
          e.target.value[0] ?? "";
      }
    };
  }
};

render(guests);
