document.getElementById("smoothieForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const flavor = document.getElementById("flavor").value;
    const size = document.querySelector('input[name="size"]:checked').value;
    const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(input => input.value);

    const smoothie = new Smoothie(flavor, size, extras);

    const smoothieOutput = document.getElementById("smoothieOutput");
    smoothieOutput.innerHTML = `
        <h2>Your Smoothie:</h2>
        <p>Flavor: ${smoothie.flavor}</p>
        <p>Size: ${smoothie.size}</p>
        <p>Extras: ${smoothie.extras.join(", ")}</p>
    `;
});

class Smoothie {
    constructor(flavor, size, extras) {
        this.flavor = flavor;
        this.size = size;
        this.extras = extras;
    }
}
