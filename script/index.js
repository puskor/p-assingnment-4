
const main = document.getElementById("card_main_container");



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

// total jobs count 
total_jobs()
function total_jobs() {
    const size = main.children.length;
    document.getElementById("total_jobs").innerText = size;
    document.getElementById("all_jobs").innerText = size;
    if (size == 0) {
        add_empty_display()
    }
}

// delete cart 

main.addEventListener("click", function (event) {
    if (event.target.closest(".delete_btn")) {
        const main_cart = event.target.closest(".main_cart");
        main_cart.remove();
        total_jobs()
    }
})

// empty display
function add_empty_display() {
    const no = document.getElementById("card_main_container");
    no.classList.add("hidden");
    const empty_cart = document.getElementById("hide");
    empty_cart.classList.remove("hidden");
}
function remove_empty_display() {
    const empty_cart = document.getElementById("hide");
    empty_cart.classList.add("hidden");
    const no = document.getElementById("card_main_container");
    no.classList.remove("hidden");
}



function show_only(type) {
    const all_cart = document.querySelectorAll(".statuss");
    const interview_count = document.getElementById("interview").innerText;
    const rejected_count = document.getElementById("rejected").innerText;
    const total_jobs = document.getElementById("total_jobs").innerText;
    if (type == "Interview" && interview_count == 0) {
        add_empty_display();
    }
    else if (type == "all" && total_jobs == 0) {
        add_empty_display();
    }
    else if (type == "Rejected" && rejected_count == 0) {
        add_empty_display();
    }
    else {
        remove_empty_display();
        all_cart.forEach(item => {
            if (type == "all") {
                item.parentNode.style.display = "block";
            }
            else if (item.innerText == type) {

                item.parentNode.style.display = "block";
            }
            else {
                item.parentNode.style.display = "none";
            }
            // console.log(item.parentNode);
        })
        total_item_count()

    }

}


//status change
// int_card_btn
document.getElementById("card_main_container").addEventListener("click", function (event) {
    const interview_button = event.target.closest(".int_card_btn");
    if (interview_button) {
        const parent = event.target.parentNode;
        const status = parent.querySelector(".statuss");
        status.innerText = "Interview";
        color(status);
        // console.log(status.innerText);
    }
    total_item_count()
})

// rej_card_btn
document.getElementById("card_main_container").addEventListener("click", function (event) {
    const interview_button = event.target.closest(".rej_card_btn");
    if (interview_button) {
        const parent = event.target.parentNode;
        const status = parent.querySelector(".statuss");
        status.innerText = "Rejected";
        color(status);
        // console.log(status.innerText);
    }
    total_item_count()
})


function color(status) {
    if (status.innerText == "Interview") {
        status.classList.remove("bg-blue-100");
        status.classList.remove("bg-red-400", "text-black");
        status.classList.add("bg-green-400", "text-white");
    }
    else if (status.innerText == "Rejected") {
        status.classList.remove("bg-blue-100");
        status.classList.add("bg-red-400", "text-black");
        status.classList.remove("bg-green-400", "text-white");
    }
    else {
        status.classList.add("bg-blue-100");
        status.classList.remove("bg-red-400", "text-black");
        status.classList.remove("bg-green-400", "text-white");
    }
}


function total_item_count() {
    const interview_cart = [];
    const rejected_cart = [];
    const all_cart = document.querySelectorAll(".statuss");

    all_cart.forEach(item => {
        if (item.innerText == "Interview") {
            interview_cart.push("1");
        }
        if (item.innerText == "Rejected") {
            rejected_cart.push("1");
        }
    })
    const interview_count = interview_cart.length;
    const rejected_count = rejected_cart.length;

    document.getElementById("interview").innerText = interview_count;
    document.getElementById("rejected").innerText = rejected_count;

    return { interview_count, rejected_count };
}

