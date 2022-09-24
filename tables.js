function createTables (Obj) {
    loading();
    let table = document.getElementById("table");
    for (let i = 0; i < Obj.rows.length + 1; i++) {
        let temp = document.createElement("tr");
        table.appendChild(temp);
    }
    let rows = document.getElementsByTagName("tr");
    for (const title of Obj.cols) {
        let temp_header = document.createElement("th");
        temp_header.appendChild(document.createTextNode(title));
        rows[0].appendChild(temp_header);    
    }
    for (let i = 0; i < Obj.rows.length; i++) {
        for (const temp of Obj.rows[i]) {
            let temp_data = document.createElement("td");
            if (typeof Number(temp) == "number" && !isNaN(parseInt(temp)) 
            && typeof temp == "string") {
                let temp_progress = document.createElement("div");
                let colors = ["blue", "red", "orange", "purple", "green", "yellow"];
                let tempcolor = colors[Math.floor(Math.random() * colors.length)];
                temp_progress.classList.add("progress");
                let temp_value = document.createElement("div");
                with (temp_value) {
                    classList.add("value");
                    style.width = `${temp}%`;
                    style.backgroundColor = `var(--${tempcolor})`;
                }
                temp_progress.appendChild(temp_value);
                temp_data.appendChild(temp_progress);
            } else if (typeof temp === "number") {
                temp_data.style.textAlign = "center";
                temp_data.appendChild(document.createTextNode(temp));
            } else {
                temp_data.appendChild(document.createTextNode(temp));
            }
            rows[i + 1].appendChild(temp_data);
        }
    }
}
function loading () {
    let main = document.getElementById("main").style;
    main.animation = "0.75s fade";
    window.setTimeout(function () {
        main.display = "none";
    }, 750);
    let spinner = document.getElementById("loading").style;
    window.setTimeout(function () {    
        with (spinner) {
            animation += " fade2 0.75s";
            display = "block";
        }
    }, 750);
    window.setTimeout(function () {
        spinner.animation = "0.75s fade";
        window.setTimeout(function () {
            spinner.display = "none";
        }, 750);
        window.setTimeout(function () {    
            with (document.getElementById("table").style) {
                animation += " fade2 0.75s";
                display = "block";
            }
        }, 750);
    }, 4000);
}