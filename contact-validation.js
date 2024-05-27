document
  .querySelector(".php-email-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "contact.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        document.querySelector(".sent-message").innerHTML = xhr.responseText;
        document.querySelector(".sent-message").style.display = "block";
      }
    };

    var name = document.getElementById("name-field").value;
    var email = document.getElementById("email-field").value;
    var subject = document.getElementById("subject-field").value;
    var message = document.getElementById("message-field").value;

    xhr.send(
      "name=" +
        encodeURIComponent(name) +
        "&email=" +
        encodeURIComponent(email) +
        "&subject=" +
        encodeURIComponent(subject) +
        "&message=" +
        encodeURIComponent(message)
    );
  });
