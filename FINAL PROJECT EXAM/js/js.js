function finalp(){
    var name = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var sub = document.getElementById("subject").value;
    var me = document.getElementById("me").value;
    alert("Your message have been send ");

    const to = name + email+sub+me;
    console.log(to);
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
