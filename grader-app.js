"use strict"

/* DOM Code
    // Purpose: Render a drop down of assignments in array dynmically
    //          Add new assignments

*/

// Array of Assignments
const assignmentList = getSavedAssignments()

//Filter to filter options or search text in the future
const filter = {
    searchText: "",
    option: 0
}


// Called to render options
renderOption(assignmentList, filter)


// Event listener for options 
const options = document.querySelector("#all-assignments")

    options.addEventListener("change", (e) => {
        e.preventDefault()
        
        console.log(e.target.selectedIndex)
        /*
        TODO
        Clear contents of HTML HERE, create a function that sets the #assignments element to the current selected option
        ////Set the filter option to the selected drop down item
        //filter.option = e.target.selectedIndex
        // Pass the selected index into a function so that render function knows which assignment to render?
        */
        // Testing bracket notation, since key in object is number
    
        console.log(e.target[e.target.selectedIndex].textContent)
        renderAssignmentBasedOnIndex(e.target.selectedIndex)
        
    })

// Event listener for form, calls functions to add new assignments and rerender assignments
const enterAssignment = document.querySelector("#enter-assignment")
    enterAssignment.addEventListener("submit", (e) => {
        e.preventDefault()
        const name = e.target.elements.assignmentName.value
        if(!name){
            return alert("Name Must Be Entered")
        }
        createAndAddNewAssignment(name)
        saveAssignment(assignmentList)
        //renderOption(assignmentList, filter)
    })



const changeFeedback = (assignment, index, newText) => {
    assignment.feedback[index] = newText
    saveAssignment(assginmentList)
    renderOption(assignmentList, filter)
}
