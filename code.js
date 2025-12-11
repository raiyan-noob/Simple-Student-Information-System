
function theoryCourses(numberOfcourses) {
    const courses = []; //course names
    const grades = [];  //course grades
    //loop to get course names and grades
    for (let i = 0; i < numberOfcourses; i++) {
        const courseName = prompt(`Enter the name of course ${i + 1}: `);
        //validation for course name
        if(courseName.length<5 && (courseName.charAt(0)<'A' || courseName.charAt(0)>'Z') && (courseName.charAt(1)<'A' || courseName.charAt(1)>'Z') && (courseName.charAt(2)<'A' || courseName.charAt(2)>'Z'))  {
            alert("Invalid course name");
            i--;
        }
//validation for grade
        else {
            const grade = parseFloat(prompt(`Enter the grade for ${courseName}: `));
            if(isNaN(grade) || grade < 0 || grade > 100) {
                alert("Invalid grade");
                i--;
                continue
            }
            //pushing valid course name and grade to respective arrays
            else {
              grades.push(grade);
              courses.push(courseName);
            }
        }
    }
    //returning arrays
    return [courses, grades];
}
function LabCourses(numberOfcourse) {
    const course = [];
    const gradee = [];
    //loop to get lab course names and grades 
    for (let i = 0; i < numberOfcourse; i++) {
        const courseName = prompt(`Enter the name of course ${i + 1}: `);
        if((courseName.length<5) && (courseName.charAt(0)<'A' || courseName.charAt(0)>'Z') && (courseName.charAt(1)<'A' || courseName.charAt(1)>'Z') && (courseName.charAt(2)<'A' || courseName.charAt(2)>'Z'))  {
            alert("Invalid course name");
            i--;
        }
        else {
            const grade = parseFloat(prompt(`Enter the grade for ${courseName}: `));
            if(isNaN(grade) || grade < 0 || grade > 100) {
                alert("Invalid grade");
                i--;
                continue
            }
            else {
              gradee.push(grade);
              course.push(courseName);
            }
        }
    }
    return [course, gradee];
}
function CalculateCGPA(courses,labCourses,grades,labGrades) {
    let credits=0; 
    let totalgpa=0;
    //loop to calculate total theory credits and total GPA
    for (let i = 0; i < courses.length; i++) {
        credits += 3;
        totalgpa+=grades[i]*3;
    }
    //loop to calculate total lab credits and total GPA
    for (let j = 0; j < labCourses.length; j++) {
        credits += 1.5;
        totalgpa+=labGrades[j]*1.5;
    }
    const cgpa = totalgpa / credits;
    return cgpa.toFixed(3);
}
function StudentInfo() {
    //object to store user information
    let userInfo= {
        name: '',
        id: '',
        numberOfTheorycourse: 0,
        gradeOftheorycourse: [],
        numberOflabcourse: 0,
        gradeOflabcourse: [],
        theoryCourses: [],
        labCourses: [],
        cgpa: 0
    };
    //getting user information
    userInfo.name = prompt("Enter your name: ");
    userInfo.id = prompt("Enter your ID: ");
    if(isNaN(userInfo.id) || userInfo.id.length<14) {
        alert("Invalid ID");
        userInfo.id = prompt("Enter your ID: ");
    }
    //getting courses and grades
    userInfo.numberOfTheorycourse = parseInt(prompt("Enter number of theory courses: "));
    [userInfo.theoryCourses, userInfo.gradeOftheorycourse] = theoryCourses(userInfo.numberOfTheorycourse);
    userInfo.numberOflabcourse = parseInt(prompt("Enter number of lab courses: "));
    [userInfo.labCourses, userInfo.gradeOflabcourse] = LabCourses(userInfo.numberOflabcourse);
    //calculating CGPA
    userInfo.cgpa = CalculateCGPA(userInfo.theoryCourses, userInfo.labCourses, userInfo.gradeOftheorycourse, userInfo.gradeOflabcourse);
    document.write(`<h2>Student Information System</h2>`);
    //displaying user information
    document.write(`<p>Name: ${userInfo.name}</p>`);
    document.write(`<p>ID: ${userInfo.id}</p>`);
    document.write("<h3>Theory Courses:</h3>");
    //loop to display theory courses and grades
    for (let i = 0; i < userInfo.theoryCourses.length; i++) {
        document.write(`<p>Course: ${userInfo.theoryCourses[i]}, Grade: ${userInfo.gradeOftheorycourse[i]}</p>`);
    }
    document.write("<h3>Lab Courses:</h3>");
    for (let j = 0; j < userInfo.labCourses.length; j++) {
        document.write(`<p>Course: ${userInfo.labCourses[j]}, Grade: ${userInfo.gradeOflabcourse[j]}</p>`);
    }
    document.write(`<h3>CGPA: ${userInfo.cgpa}</h3>`);
    //cgpa wise merit check
    if(userInfo.cgpa>=3.5) {
        document.write("<h3>Congratulations! You are eligible for a scholarship.</h3>");
    }
    else if(userInfo.cgpa<2.0) {
        document.write("<h3>Sorry! You have failed this semester.</h3>");
    }
    else {
        document.write("<h3>Bravo! You have passed this semester.</h3>");}

    }
    //calling main function
StudentInfo();
