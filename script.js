const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");
const progressBar = document.getElementById("progress-bar"); // عنصر عرض النسبة المئوية

let tasks = []; // تخزين جميع المهام

function updateProgress() {
    let completedTasks = tasks.filter(task => task.checked).length;
    let totalTasks = tasks.length;
    let percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    progressBar.textContent = `Completed : ${percentage.toFixed(0)}%`;
}

function Add() {
    let taskText = input.value;
    if (taskText !== "") {
        let listItem = document.createElement("li");
        let taskContainer = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let taskLabel = document.createElement("span");
        taskLabel.textContent = taskText;

        // تحديث نسبة الإنجاز عند تغيير حالة التحقق
        checkbox.onchange = function () {
            taskLabel.style.textDecoration = checkbox.checked ? "line-through" : "none";
            taskLabel.style.color = checkbox.checked ? "gray" : "black";
            task.checked = checkbox.checked; // تحديث الحالة في المصفوفة
            updateProgress();
        };

        // إضافة المهمة إلى المصفوفة
        let task = { text: taskText, checked: false };
        tasks.push(task);

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.style.marginLeft = "10px";

        deleteButton.onclick = function () {
            listItem.remove();
            tasks = tasks.filter(t => t.text !== taskText); // إزالة المهمة من المصفوفة
            updateProgress(); // تحديث النسبة بعد الحذف
        };

        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(taskLabel);
        listItem.appendChild(taskContainer);
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        input.value = "";
        updateProgress(); // تحديث النسبة عند الإضافة
    }
}

button.onclick = Add;
