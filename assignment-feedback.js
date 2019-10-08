
"use strict"
const assignmentId = location.hash.substring(1)


// Get assignments
const assignments = getSavedAssignments()

// DOM Elements
const feedback = document.querySelector("#feedback-form")
const assignmentInfo = document.querySelector("#assignment-info")
const currentAssignment = document.querySelector("#current-assignment")

// Find Assignment based on hash 
const assignment = assignments.find((assignment) => assignment.id === assignmentId)

//location.hash = ""

currentAssignment.textContent = `Edit Feedback to: ${assignment.assignmentName}`

feedback.addEventListener("submit", (e) => {
    //e.preventDefault()
    const feedback = e.target.elements.feedback.value
    if(!feedback){
        return alert("feedback needed")
    }
    const feedbackText = e.target.elements.feedback.value
    assignment.feedback.push(feedbackText)
    console.log(assignments)
    saveAssignment(assignments)
    //location.reload() // Reloads page becuase my dumbass rendered inneffeciently 
})


renderFeedback(assignment, assignmentInfo)

window.addEventListener("storage", (e) => {
    if(e.key === "assignments"){
        assignments = JSON.parse(e.newValue)
        renderFeedback(assignment, assignmentInfo)
    }
})


