document.addEventListener("keydown", konamiCode, false);
var konami_index = 0;

function konamiCode(e) {
    /*---
     * ↑↑ ↓↓ ←→ ←→ b a
     ---*/
    var konami_keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    var keyCode = e.keyCode;

    if(keyCode === konami_keys[konami_index++]) {
        if (konami_index === konami_keys.length) {
            //CODE TO BE EXECTUED AFTER CORRECT CODE IN HERE
        }
    } else {
        konami_index = 0;
    }

}