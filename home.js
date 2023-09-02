// Calculation area

function SelectGeometry(name, area) {
  if (area) {
    const li = document.createElement("li");
    li.classList.add("Calculated", "my-2");

    li.innerHTML = `<div class='d-flex align-items-center justify-content-between'>${name} <b class='px-2'>${area}cm&#xb2</b> <button class='btn btn-sm btn-primary'>Convart to m&#xb2;</button></div>`;
    document.querySelectorAll(".Calculated");
    Calculate.appendChild(li);
  }
}




function inputValidation(input1, input2) {
  if ((input1 == null || input1 == '' || input2 == null || input2 == '') && (isNaN(input1 || input2))) {
    alert("only Number is allowed and Fill This input")
  }
  else if (isNaN(input1 || input2)) {
    alert('only Number is allowed')
  }

  else if ((input1 == null || input1 == '') || (input2 == null || input2 == '')) {
    alert("Fill This input")
    return false;
  } else {
    return true;
  }

}

function triangle(name) {
  const triangle_base = document.getElementById("triangle-base").value;
  const triangle_height = document.getElementById("triangle-height").value;

  if (inputValidation(triangle_base, triangle_height)) {
    const area = 0.5 * triangle_base * triangle_height;
    SelectGeometry(name, area);
  }
}


function rectangle(name) {
  const rectangle_width = document.getElementById("rectangle-width").value;
  const rectangle_lenght = document.getElementById("rectangle-length").value;

  if (inputValidation(rectangle_width, rectangle_lenght)) {
    const area = rectangle_width * rectangle_lenght;
    SelectGeometry(name, area)
  }
}


function peralleogram(name) {
  const peralleogram_base = document.getElementById("peralleogram-base").value;
  const peralleogram_height = document.getElementById("peralleogram-height").value;

  if (inputValidation(peralleogram_base, peralleogram_height)) {
    const area = peralleogram_base * peralleogram_height;
    SelectGeometry(name, area)
  }

}

function rhombus(name) {
  const rhombus_Diagonal1 = document.getElementById("rhombus-Diagonal1").value;
  const rhombus_Diagonal2 = document.getElementById("rhombus-Diagonal2").value;

  if (inputValidation(rhombus_Diagonal1, rhombus_Diagonal2)) {
    const area = 0.5 * rhombus_Diagonal1 * rhombus_Diagonal2;
    SelectGeometry(name, area)
  }
}


function pentagon(name) {
  const pentagon_perimeter = document.getElementById("pentagon-perimeter").value;
  const pentagon_apothem = document.getElementById("pentagon-apothem").value;

  if (inputValidation(pentagon_perimeter, pentagon_apothem)) {
    const area = 0.5 * pentagon_perimeter * pentagon_apothem;
    SelectGeometry(name, area)
  }
}

function ellips(name) {
  const ellips_X_Axis = document.getElementById("ellips-X-Axis").value;
  const ellips_Y_Axis = document.getElementById("ellips-Y-Axis").value;
  const pi = Math.PI;
  var fixedNum = pi.toFixed(2);

  if (inputValidation(ellips_X_Axis, ellips_Y_Axis)) {
    const area = fixedNum * ellips_X_Axis * ellips_Y_Axis;
    SelectGeometry(name, area)
  }
}

// random coler start

const mouseover = document.querySelectorAll(".card");
mouseover.forEach(element => {
  element.addEventListener('mouseover', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element.style.backgroundColor = '#' + randomColor;

  });
});

const mouseout = document.querySelectorAll(".card");
mouseout.forEach(element => {
  element.addEventListener('mouseout', function () {
    element.style.backgroundColor = '#fff';
  });
});

//random color end











