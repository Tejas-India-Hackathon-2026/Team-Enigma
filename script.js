let selectedVehicle = "Toto";


function selectVehicle(element, vehicle) {

    document
    .querySelectorAll(".vehicle")
    .forEach(item => {

        item.classList.remove("active");

    });


    element.classList.add("active");

    selectedVehicle = vehicle;

}


function requestRide() {

    const pickup =
    document.getElementById("pickup").value.trim();


    const destination =
    document.getElementById("destination").value.trim();


    const result =
    document.getElementById("bookingResult");


    if (pickup === "" || destination === "") {

        result.innerHTML = `

        <div style="
        background:#fee2e2;
        color:#b91c1c;
        padding:12px;
        border-radius:8px;
        margin-top:12px;
        font-size:12px;
        ">

        Please enter pickup and destination.

        </div>

        `;

        return;

    }


    result.innerHTML = `

    <div style="
    background:#dcfce7;
    color:#166534;
    padding:14px;
    border-radius:8px;
    margin-top:12px;
    font-size:12px;
    ">

    <strong>
    <i class="fa-solid fa-check-circle"></i>
    Ride Request Sent!
    </strong>

    <br>

    Finding a nearby
    <strong>${selectedVehicle}</strong>
    driver...

    </div>

    `;


    setTimeout(() => {

        result.innerHTML = `

        <div style="
        background:#fff7ed;
        color:#9a3412;
        padding:14px;
        border-radius:8px;
        margin-top:12px;
        font-size:12px;
        ">

        <strong>🛺 Driver Found!</strong>

        <br>

        Rakesh Kumar is nearby
        and ready for your ride.

        </div>

        `;

    },1800);

}


function callDriver(name) {

    showToast(
        "Calling " + name + "..."
    );

}


function showToast(message) {

    let toast =
    document.getElementById("toast");


    if (!toast) {

        toast =
        document.createElement("div");

        toast.id = "toast";

        toast.style.position = "fixed";
        toast.style.bottom = "25px";
        toast.style.right = "25px";
        toast.style.background = "#111827";
        toast.style.color = "white";
        toast.style.padding = "14px 20px";
        toast.style.borderRadius = "10px";
        toast.style.zIndex = "9999";

        document.body.appendChild(toast);

    }


    toast.innerHTML = message;


    setTimeout(() => {

        toast.remove();

    },2500);

}