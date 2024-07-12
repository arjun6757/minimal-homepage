document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementsByClassName("icon")[0];
    const input = document.getElementsByClassName("input-bar")[0];

    if (btn && input) {
        btn.onclick = function() {
            var query = input.value;
            window.location.assign(("https://www.google.com/search?q=" + encodeURIComponent(query)));
        };
    }

    input.addEventListener('keydown', function(event){
        if (event.key === 'Enter') {
            var query = input.value;
            window.location.assign(("https://www.google.com/search?q=" + encodeURIComponent(query)));
        }
    });
});