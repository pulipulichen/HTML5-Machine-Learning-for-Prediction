var log = function (t) {
  if (typeof(t) === "object") {
    t = JSON.stringify(t)
  }
  $("#result").html(t)
}
