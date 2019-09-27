

// Class syntax, like function, but supported by EC6, easier to read, can call also use call() to inherit properties from parent class 
    // Maybe even more generic Assignment can be created later as parent Object


class WrittenAssignment {
    // used to create an object with assignment name and array of criteria
    constructor(assignmentName){
        this.assignmentName = assignmentName,
        this.criteriaList = [],
        this.feedback = [],
        this.grade = "",
        this.completed = false,
        this.id = uuidv4()
    }
    
    // Pushes criteria with name and score to array of criteria                 
        // made 0 default because my dumbass forgets when testing
    addCriteria(criterionName, score = 0){
        const date = new Date()
        this.criteriaList.push({
            criterionName, 
            score,
            // converts date object to string with toJSON(), slice value from beginning to 10th char, replace dashes with regex
             // Some browsers don't support dashes, so made with forward slash and in UTC incase some person on the other side of the world sees this
                //...maybe this will give them hope for us Americans
            // Change to use moment()
            date: date.toJSON().slice(0,10).replace(/-/g,'/') })
    }
    getCriteria(){
        this.criteriaList.forEach((criteria, index) =>{
            console.log(`Criteria ${index +1}: ${criteria.criterionName}\n\tDate Enterd:${criteria.date}`) // Change to return string value to render in HTML
        }) 
    }
    // iterates through criteria array and finds matching name, assigns as score
    setCriteriaScore(critName, score){
        const criteria = this.criteriaList.find((criteria) =>{
            return criteria.criterionName.toLowerCase() === critName.toLowerCase()
        })
        // if nothing matches, then why continue? return a terminal message and stop
        if(!criteria){
            return console.log(`Didn't find shit for ${critName.toUpperCase()} criterion`) 
        }
        
        criteria.score = score;
        console.log(`${criteria.criterionName} score set to ${score}`) // change to return string, mabe return creteria object to render later
    }
    // give feedback on specific assignment
    addFeedback(feedbackText){
        if(!feedbackText){
            return console.log("You didn't type shit") 
        }
        this.feedback.push(feedbackText)
        return `${feedbackText.toUpperCase()} feedback was added to ${this.assignmentName.toUpperCase()}` // Return string value, maybe create a box that has changes
    }

    // Retrieve contents of feedack of array
    getFeedback(){
        if(this.feedback === undefined || this.feedback.length === 0){
            return console.log(`No feedback available`)
        }

        this.feedback.forEach((item, index) => {            //Change to render each feedback
            console.log(`${index +1}: ${item}`)
        })  
    }
    sumCriteriaScore(){
        let totalScore = 0

        if(this.criteriaList === 0 || this.criteriaList === undefined){
            return console.log("No scores assigned.")
        }

        this.criteriaList.forEach((criterion) => {
            totalScore += criterion.score
        })

        return totalScore;
    }
    // Sets letter grade
    setLetterGrade(score){

        if (score >= 90) {
            this.grade = "A"
        } else if (score <= 89 && score >= 80) {
            this.grade = "B"
        } else if (score <= 79 && score >= 70) {
            this.gradee = "C"
        } else if (score <= 69 && score>= 60) {
            this.grade = "D"
        } else {
            this.grade = "F"
        }

        this.completed = true
    }
    // Return pertinent info through template string
    getSummary(){
        // First message, print out score and grade
        const printOutScore = this.sumCriteriaScore();
        this.setLetterGrade(printOutScore)
        
        // Printout feedback
        console.log(`${this.assignmentName}:\nScore:${printOutScore}\nGrade:${this.grade}\n`)
        
        this.getCriteria()
        console.log("\n")

        console.log(`Feedback on ${this.assignmentName.toUpperCase()}:`) // Refactor to return template strings
        this.getFeedback()
    }

}



// const unit2Essay2 = new WrittenAssignment("Unit 2 Essay")

// unit2Essay2.addCriteria("Structure", 10)
// unit2Essay2.addCriteria("Grammar", 4)

// unit2Essay2.setCriteriaScore("grammar", 40)
// unit2Essay2.setCriteriaScore("credit", 100)

// unit2Essay2.addFeedback("Work on structure")

// unit2Essay2.getSummary()


