// Código del Cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del Triángulo
console.group("Triángulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es de: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura){
    return (base * altura) / 2;

}
// console.log("El área del triángulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del Círculo
console.group("Círculo");

//Radio
// const radioCirculo = 4;
// console.log("El radio del Círculo es de: " + radioCirculo + "cm");

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}
// console.log("El diámetro del círculo es de: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
// console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("La circunferencia del círculo es de: " + perimetroCirculo + "cm");

//Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}
// console.log("El área del círculo es de: " + areaCirculo + "cm^2");

console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const lado = parseInt(document.getElementById("InputCuadrado").value);
    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const lado = parseInt(document.getElementById("InputCuadrado").value);
    const area = areaCuadrado(lado);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const lado1 = parseInt(document.getElementById("InputLado1").value);
    const lado2 = parseInt(document.getElementById("InputLado2").value);
    const base = parseInt(document.getElementById("InputBase").value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = parseInt(document.getElementById("InputBase").value);
    const altura = parseInt(document.getElementById("InputAltura").value);
    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const radio = parseInt(document.getElementById("InputRadio").value);
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = parseInt(document.getElementById("InputRadio").value);
    const area = areaCirculo(radio);
    alert(area);
}

function calcularAlturaTriangulo(){
    const lado1 = parseInt(document.getElementById("Lado1").value);
    const lado2 = parseInt(document.getElementById("Lado2").value);
    const lado3 = parseInt(document.getElementById("Lado3").value);

    if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        let lado_a = 0;
        let lado_b = 0;
        let base = 0;
        if(lado1 == lado2){
            lado_a = lado1;
            lado_b = lado2;
            base = lado3;
        }
        if(lado1 == lado3){
            lado_a = lado1;
            lado_b = lado3;
            base = lado2;
        }
        if(lado2 == lado3){
            lado_a = lado2;
            lado_b = lado3;
            base = lado1;
        }

        const dato1 = lado_a * lado_a;
        const dato2a = base / 2;
        const dato2b = base / 2;
        const dato3 = dato2a * dato2b;

        const altura = Math.sqrt(dato1 - dato3);
        alert(altura);
    }
    else{
        alert("No es un triángulo isósceles");
    }
}