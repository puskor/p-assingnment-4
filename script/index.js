



// button selected
document.getElementById("main_btn").addEventListener("click", function (even) {
    const all_btn = document.querySelectorAll("#main_btn .main_btn");
    const add_btn = even.target.closest("button")
    if (!add_btn) {
        return;
    }
    all_btn.forEach((btn) => {
        btn.classList.remove("bg-blue-500", "text-white");
        btn.classList.add("bg-gray-100", "text-[#64748B]");
    })
    add_btn.classList.remove("bg-gray-100", "text-[#64748B]");
    add_btn.classList.add("bg-blue-500", "text-white");
})


// status change

// int_card_btn
document.getElementById("card_main_container").addEventListener("click", function (event) {
    if (event.target.classList.contains("int_card_btn")) {
        const parent = event.target.parentNode;
        const status = parent.querySelector(".statuss");
        status.innerText = "Applied";
        status_color(parent);
        count()
    }
})

// rej_card_btn
document.getElementById("card_main_container").addEventListener("click", function (event) {
    if (event.target.classList.contains("rej_card_btn")) {
        const parent = event.target.parentNode;
        const status = parent.querySelector(".statuss");
        status.innerText = "Rejected";
        status_color(parent);
        count()
    }
})


function status_color(parent) {
    const status = parent.querySelector(".statuss");
    if (status.innerText == "Rejected") {
        status.classList.remove("bg-green-300");
        status.classList.remove("bg-blue-400");
        status.classList.add("bg-red-400");
        status.classList.add("text-white")

    }
    else if (status.innerText == "Applied") {
        status.classList.remove("bg-blue-100");
        status.classList.remove("bg-red-400");
        status.classList.add("bg-green-300");
        status.classList.remove("text-white")
        status.classList.add("text-black")

    }
    else {
        status.classList.remove("bg-red-400");
        status.classList.remove("bg-green-300");
        status.classList.add("bg-blue-100");
        status.classList.remove("text-white")

    }
}



const allCards = document.querySelectorAll("#card_main_container .main_cart");
function show_only(value) {
    const container = document.getElementById("card_main_container");
    container.classList.remove("hidden");
    const hide = document.getElementById("hide");
    hide.classList.add("hidden");

    allCards.forEach(item => {
        const cart = item.querySelector(".statuss").innerText;
        if (value == "All") {
            item.style.display = "block"
        }
        else if (value == cart) {
            item.style.display = "block"
        }
        else {
            item.style.display = "none"
        }
    })
}


document.getElementById("int_btn").addEventListener("click", function () {
    const result = count();
    if (result.int_size == 0) {
        hide();
    }
    else {

        show_only('Applied')
    }
})

document.getElementById("rej_btn").addEventListener("click", function () {
    const result = count();
    if (result.rej_size == 0) {
        hide();
    }
    else {
        show_only('Rejected')
    }
})



function count() {
    let applied = [];
    let rejected = [];
    allCards.forEach(item => {
        const cart = item.querySelector(".statuss").innerText;
        if (cart == "Applied") {
            applied.push(cart);
        }
        if (cart == "Rejected") {
            rejected.push(cart);
        }
    })

    const interview = document.getElementById("interview");
    const res = document.getElementById("rejected");
    const int_size = applied.length;
    const rej_size = rejected.length;
    res.innerText = rej_size;
    interview.innerText = int_size;

    return { int_size, rej_size };

}





// all jobs and total jobs count
total_count()
function total_count() {
    const size = card_main_container.children.length;
    if (size >= 0) {
        document.getElementById("total_jobs").innerText = size;
        document.getElementById("all_jobs").innerText = size;
    }
    if(size==0) {
        hide();
    }
}

function hide() {
    const container = document.getElementById("card_main_container");
    container.classList.add("hidden");
    const hide = document.getElementById("hide");
    hide.classList.remove("hidden");
}


document.getElementById("card_main_container").addEventListener("click", function (event) {
    if (event.target.classList.contains("delete_btn")) {
        const parent = event.target.parentNode.parentNode.parentNode;
        const status = parent.querySelector(".statuss");
        status.innerText = "Not Applied";
        status_color(parent);
        parent.remove();
        count();
        total_count()
    }
})