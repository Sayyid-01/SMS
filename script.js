

const students = JSON.parse(localStorage.getItem("students")) || [];
function show__student(){
    
    // console.log(students)
    const student__list = document.querySelector(".student-list");

    student__list.innerHTML = "";

    students.forEach((student,index) => {
        const student__items = document.createElement("div");
        student__items.className = "student-item";
        student__items.innerHTML = `
            <div>
                <img src= "${student.image}" alt= "${student.name}"/>
                <span> Name: ${student.name}, &nbsp &nbsp Course: ${student.course}, &nbsp &nbsp Unit: ${student.unit}, &nbsp &nbsp Batch: ${student.batch}</span>
            </div>
            <button onclick="remove__student(${index})">Remove</button>

        `;
        student__list.appendChild(student__items);
    });
}
show__student();
update__Batch__Count()
// if (window.location.pathname.includes("dashboard.html")) {
    
// }


function remove__student(index) {
    const removed__student = students.splice(index, 1)[0];
    localStorage.setItem("students", JSON.stringify(students));

    const trash = JSON.parse(localStorage.getItem("trash__key")) || [];
    trash.push(removed__student);
    localStorage.setItem("trash__key", JSON.stringify(trash));

    show__student();
    update__Batch__Count();
}

function update__Batch__Count() {
    const batchCount = {};

    students.forEach(student => {
        if (batchCount[student.batch]) {
            batchCount[student.batch] += 1; 
        } else {
            batchCount[student.batch] = 1;
        }
    });
    document.getElementById("batch-count").innerText = JSON.stringify(batchCount);
    // console.log(JSON.stringify(batchCount));
}
update__Batch__Count();