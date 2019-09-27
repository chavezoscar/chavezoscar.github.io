

// Add new assignments and push into array
const createAndAddNewAssignment = (name) => {
    const  assignmentToAdd =  new WrittenAssignment(name)
    assignmentList.push(assignmentToAdd)
}


// Renders current assignments in array by traversing array and adding as Paragraph element
const renderAssignments = () => {

    const h2Title = document.createElement("h2")

    if(assignmentList.length === 0){
        h2Title.textContent = "No Assignments have been added!"
    } else {
        h2Title.textContent = `Assignments in system:`
    }

    document.querySelector("#assignments").innerHTML = ""
    document.querySelector("#assignments").appendChild(h2Title)  

    assignmentList.forEach((assignment, index) => {
        const assignmentName = document.createElement("p")
        assignmentName.textContent = `${index + 1}: ${assignment.assignmentName}`
        document.querySelector("#assignments").appendChild(assignmentName)
    })
}

//  Adding options dynamically
    //  Traverses assignments and adds assignment Name as option, index needed so that option oject(with bracket notation) can be added
    //  For each object, render object's name as an option
    //  Bracket notation for accessing Options object and creating a new Option

    const addItemsToOptionsList = () => {

        const allAssignmentOption = document.querySelector("#all-assignments")
            allAssignmentOption.innerHTML = ""
    
        assignmentList.forEach((assignment, index) => {
    
        allAssignmentOption.options[allAssignmentOption.options.length] = new Option(assignment.assignmentName, index)
        
        }) 
    }

// Renders Options in Dropdown List
    // If no items in array AssignmentList then return assignment name is empty string
    // Whatever dropdown item is selected, then selectedIndex property gets set on option property in filter
    const renderOption = (assignmentList, filter) => {

        const assignmentName = document.createElement("p")
        
        // What if somehow they start fucking with the console? Idk..just trying out stuff
        if(filter.option > assignmentList.length){
            assignmentName.textContent = "HOW DID YOU DO THIS???"
            return document.querySelector("#assignments").appendChild(assignmentName)
        }
    
        if(assignmentList.length === 0){
            return assignmentName.textContent = ""
        }
    
        // Called to add items 
        addItemsToOptionsList()
    
        assignmentName.textContent = assignmentList[filter.option].assignmentName
        
        // Renders assignments in system
        renderAssignments()
    
        //return assignmentList[filter.option]
    }

    
// Save to localStorage
const saveAssignment = (assignments) => {
    localStorage.setItem("assignments", JSON.stringify(assignments))
    
}

// Retrieve saved assignments in Local Sotrage
const getSavedAssignments = () => {
    const assignmentsJSON = localStorage.getItem("assignments")
    if(assignmentsJSON != null){
        return JSON.parse(assignmentsJSON)
    } else {
        return []
    }
}

// Render individual assignment based on index in array

const renderAssignmentBasedOnIndex = (assignmentIndex) => {

    const currentAssignment = assignmentList[assignmentIndex]
    const h2Title = document.createElement("h2")
    const assignmentElement = document.querySelector("#assignments")

    if(assignmentList.length === 0){
        h2Title.textContent = "No Assignments have been added!"
    } else {
        h2Title.textContent = `Current Assignment:`

    }

    document.querySelector("#assignments").innerHTML = ""
    document.querySelector("#assignments").appendChild(h2Title)  

    const currentAssignmentName = document.createElement("p")
    const currentAssignmentCompleted = document.createElement("p")
    const currentAssignmentNameCriteria = document.createElement("p") // .id = "someId" // give it id to be able to target with CSS later
    const currentAssignmentFeedback = document.createElement("p")

    currentAssignmentName.textContent = `Assignment Name: ${currentAssignment.assignmentName}`
    currentAssignmentCompleted.textContent = `Completed: ${currentAssignment.completed ? "YES" : "NO"}`
    
    assignmentElement.appendChild(currentAssignmentName)  
    assignmentElement.appendChild(currentAssignmentCompleted)
    
    if(currentAssignment.criteriaList.length === 0 || currentAssignment.criteriaList === undefined){
        currentAssignmentNameCriteria.textContent = "No Criterion to Display"
        assignmentElement.appendChild(currentAssignmentNameCriteria)

    }else {
        currentAssignment.criteriaList.forEach((criteria, index) => {
            const currentAssignmentNameCriteria = document.createElement("p")
            currentAssignmentNameCriteria.textContent = `Criterion ${index + 1}: ${criteria}`
            assignmentElement.appendChild(currentAssignmentNameCriteria)
        })
    }

    if(currentAssignment.feedback.length === 0 || currentAssignment.feedback === undefined ){
        currentAssignmentFeedback.textContent = "No Feedback to Display"
        assignmentElement.appendChild(currentAssignmentFeedback)
    } else {
        currentAssignment.feedback.forEach((feedback, index) => {
            const currenAssignmentNameFeedback = document.createElement("p")
            currenAssignmentNameFeedback.textContent = `Feedback ${index + 1}: ${feedback}`
            assignmentElement.appendChild(currenAssignmentNameFeedback)
        })
    }



}