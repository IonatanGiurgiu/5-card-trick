unselected = "rgb(216, 216, 216)";
selected = "rgb(87, 241, 95)";

selected_nums = [];

window.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll(".card");
  
    Array.from(cards, function(c) {
      c.addEventListener("click", function() {
        id = this.id;
        idint = parseInt(id);
        var element = document.getElementById(id);
        if (selected_nums.includes(idint)) {
            index = selected_nums.indexOf(idint);
            selected_nums.splice(index, 1);
            element.style.backgroundColor = unselected;
        } else {
            if (selected_nums.length < 5) {
                selected_nums.push(idint);
                element.style.backgroundColor = selected;
            }
        }
      });
    });
  });

function read() {
    if (selected_nums.length < 5){
        return;
    }

    mult_list = [];
    for (i = 0; i < 4; i++){
        num_higher = 0
        for (j = i+1; j < 5; j++) {
            if (selected_nums[j] > selected_nums[i]) {
                num_higher += 1;
            }
        }
        mult_list.push(num_higher);
    }
    choice = 20*mult_list[0] + 5*mult_list[1] + 2*mult_list[2] + mult_list[3];

    element = document.getElementById("choice");
    element.style.fontSize = "100px";
    element.innerHTML = choice;

    document.getElementById("wrp").style.marginTop = "0px";
}

function reset() {
    selected_nums = [];
    for (i = 1; i <= 52; i++){
        document.getElementById(i.toString()).style.backgroundColor = unselected;
    }
    document.getElementById("choice").style.fontSize = "0px";
    document.getElementById("wrp").style.marginTop = "40px";
}