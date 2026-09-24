document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;

    document.getElementById("message").innerText =
        "Registration Successful! Welcome " + name + " - " + course;
});