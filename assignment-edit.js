
"use strict"
const assignmentId = location.hash.substring(1)

// Get assignments
const assignments = getSavedAssignments()

// DOM Elements
const feedback = document.querySelector("#feedback-form")
const assignmentInfo = document.querySelector("#assignment-info")

// Find Assignment


feedback.addEventListener("submit", (e) => {
    e.preventDefault()
    const feedbackText = e.target.elements.feedback.value
    assignments[0].feedback.push(feedbackText)
    console.log(assignments[0])
    saveAssignment(assignments)
})


assignments[0].feedback.forEach((feedback) => {
    const assinmentFeedbck = document.createElement("h2")
    assinmentFeedbck.textContent = feedback
    assignmentInfo.appendChild(assinmentFeedbck)
});




