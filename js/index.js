
$("#login-button").click(function (event) {
    var userName = document.getElementById("userName").value;
    var pwd = document.getElementById("pwd").value;
    if (userName == "thong" && pwd == "30062002" || userName == "HoangLeAnhThong" && pwd == "30062002" || userName == "HoangLeAnhThong" && pwd == "11122001" || userName == "thong" && pwd == "11122001" || userName == "chau" && pwd == "11112001" || userName == "chou" && pwd == "11112001" || userName == "LeTranQuynhChau" && pwd == "11112001") {
      event.preventDefault();
      $("form").fadeOut(500);
      $(".wrapper").addClass("form-success");
      setTimeout(function () {
        location.href = "Cake.html";
      }, 2000);
    } else {
      alert("Wrong Password");
    }
  });
