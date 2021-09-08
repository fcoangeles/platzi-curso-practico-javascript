// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const inputCupon = document.getElementById("InputCupon");
    const cupon = inputCupon.value;

    if(cupon == "CUPON"){
        const descuentoCupon = 15;
        const precioConDescuentoCupon = calcularPrecioConDescuento(precioConDescuento, descuentoCupon);
        resultPrice.innerText = "El precio con descuento son: $" + precioConDescuentoCupon;
    }
    if(cupon == ""){
        const resultPrice = document.getElementById("resultPrice");
        resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
    if(cupon != "" && cupon != "CUPON"){
        resultPrice.innerText = "El cupon ingresado es INVALIDO";
    }

}
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })
