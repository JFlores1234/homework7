console.log('Hello World!');

const name = "Jorge Flores";
let hasDownloadedResume = false;

const resumeButton = document.getElementById("resume");

resumeButton.addEventListener("click", function()
{
    if (hasDownloadedResume == false)
    {
        alert("Your resume is downloaded successfully!");
        hasDownloadedResume = true;
    }
});
function showGreeting(name)
{
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

document.getElementById("greeting").textContent = showGreeting(name);
function daysUntilDeadline(submissionDate)
{
    const currentDate = new Date();
    const deadline = new Date(submissionDate);

    const difference = deadline - currentDate;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return days;
}

const remainingDays = daysUntilDeadline("2026-12-01");

console.log("Days until project deadline: " + remainingDays);

document.getElementById("daysRemaining").textContent =
    "Days remaining: " + remainingDays;