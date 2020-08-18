function bintang() {
    let bangunan = document.getElementById("bangunan").value
    let ukuran = document.getElementById("ukuran").value
    let s = ''
    if (bangunan == 1) {
        for (i = 0; i < ukuran; i++) {
            for (j = 0; j < ukuran; j++) {
                s += '*'
            }
            s += '<br>'
        }
        console.log(s)
        // document.getElementById("output").innerHTML = bintang(s)
    } else if (bangunan == 2) {
        
        for (i = 0; i < ukuran; i++) {
            for (j = 0; j <= i; j++) {
                s += '*'
            }

            s += '<br>'
        }
        console.log(s)
        // document.getElementById("output").innerHTML = s
    } else if (bangunan == 3) {
        
        for (let k = 0; k < ukuran; k++) {
            for (let l = k; l <= ukuran; l++) {
                s += '&nbsp;'
            }
            for (m = 0; m <= k; m++) {
                s += '*'
            }
            s += '<br>'
        }
        console.log(s)
        // document.getElementById("output").innerHTML = s
    }
    document.getElementById("output").innerHTML = s

}

bintang()

