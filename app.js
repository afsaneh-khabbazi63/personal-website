//Array of Courses lists level1 and level2
var courses=[
    {id:1,title:"introduction to programming",image:"images/courses/javay.jpg",alt:"java",courseId:"21S_CST8116",description:"start at spring 2021 finish at Agust 2021",level:"level 1"},
    {id:2,title:"Computer Essential",image:"images/courses/javad.jpg",alt:"Essential",courseId:"21S_CST8101",description:"start at spring 2021 finish at aqust 2021",level:"level 1"},
    {id:2,title:"introduction to database",image:"images/courses/javase.jpg",alt:"data",courseId:"21S_CST8215",description:"start at spring 2021 finish at aqust 2021",level:"level 1"},
    {id:3,title:"Tech Math for computer science",image:"images/courses/javache.jpg",alt:"math",courseId:"21S_Mat8001C",description:"start at spring 2021 finish at Agust 2021",level:"level 1"},
    {id:4,title:"comunicatio",image:"images/courses/javape.jpg",alt:"comunicat",courseId:"21S_ENL1813T",description:"start at spring 2021 finish at Agust 2021",level:"level 1"},
    {id:5,title:"Achieving Success in Changing Envirnment",image:"images/courses/javashi.jpg",alt:"envir",courseId:"21S_ENL1813T",description:"start at spring 2021 finish at Agust 2021",level:"level 1"},
    {id:6,title:"Java programming",image:"images/courses/htmly.jpg",alt:"eclipse",courseId:"21F_CST8284",description:"start at Fall 2021 finish at December 2021",level:"level 2"},
    {id:7,title:"web programming",image:"images/courses/htd.jpg",alt:"hcj",courseId:"21F_CST8285",description:"start at spring 2021 finish at Agust 2021",level:"level 2"},
    {id:8,title:"data base systems ",image:"images/courses/hts.jpg",alt:"sys",courseId:"21F-CST2355",description:"start at spring 2021 finish at Agust 2021",level:"level 2"},
    {id:9,title:"Opretating Systems",image:"images/courses/htc.jpg",alt:"oper",courseId:"21S_CST8102",description:"start at spring 2021 finish at Agust 2021",level:"level 2"},
    {id:10,title:"Coorprative Education",image:"images/courses/htp.jpg",alt:"coor",courseId:"21S_GEP1001",description:"start at spring 2021 finish at Agust 2021",level:"level 2"},
];

//get '.row' that is  the element for displaying course (holding list of courses's card)
let row=document.querySelector(".row");



//createCourses() is a function that gets a array(list of courses) and  creates a card(properties of course) for any course
// that is in the array and append to '.row' element
function createCourses(arrayOfCourses) {
    
for (let index = 0; index < arrayOfCourses.length; index++) {

    let div=document.createElement('div');
    div.className="column";

    let img=document.createElement("img");
    img.src=arrayOfCourses[index].image;
    img.alt=arrayOfCourses[index].alt;
    
    let pTitle=document.createElement('h4');
    pTitle.innerText=arrayOfCourses[index].title;

    let pCourseId=document.createElement('p');
    pCourseId.innerText=arrayOfCourses[index].courseId;

    let pDes=document.createElement('p');
    pDes.innerText=arrayOfCourses[index].description;

    let pLevel=document.createElement('p');
    pLevel.innerText=arrayOfCourses[index].level;

    div.appendChild(img);
    div.appendChild(pTitle);
    div.appendChild(pCourseId);
    div.appendChild(pDes);
    div.appendChild(pLevel);

    row.appendChild(div);
}
}

//call createCourses() for the "courses array" to first load page
createCourses(courses);


// searchCourse() is a function that handls " keyup event" for the "search input"
function searchCourse() {

    //get value of search input
    let value=document.getElementById('search-input').value.toLowerCase();

    //regular expression for search value
    let regEx=`^.*${value}.*$`;
   
    //filtering the "courses array" base on value regEx (to find any item of courses the course's title is simlare search value)
   let searchArray= courses.filter( (item) => item.title.toLowerCase().match(regEx));

   //emptying ".row" element
   row.innerHTML="";

  //call createCourses() by searchArray as a prameter to update list of courses
  createCourses(searchArray);
    
}

// filterCourse() is a function that handls "onchange event" for the "filter select element"
function filterCourse() {

     //get value of filter select
    let value=document.getElementById('filter').value;

    //define a empty array that it's filterArray and it is suposed to return lists of filtered courses.
    let filterArray=[];

    //if value equal of "all" fiterArray is same "courses array"
    if (value==="all") {
        filterArray=courses;
    }else{
        //filtering the "courses array" base on level(to find any item of courses the course's level is equal to filter value)
        filterArray= courses.filter( (item) => item.level=== value);
    }
   
//emptying ".row" element
   row.innerHTML="";

   //call createCourses() by filterArray as a prameter to update list of courses
   createCourses(filterArray);
    
}

// sortCourse() is a function that handls "onchange event" for the "sort select element"
function sortCourse() {
     //get value of sort select
    let value=document.getElementById('sort').value;

    //define a empty array that it's sortArray and it is suposed to return lists of  sorted courses.
    let sortArray=[];

     //filtering the "courses array" base on level 
    let sortArray1= courses.filter( (item) => item.level=== "level 1");
    let sortArray2= courses.filter( (item) => item.level=== "level 2");

    // not sorted
    if (value==="0") {
        sortArray=courses;

        //asending sort
    }else if(value==="1"){
       
        //appending two arrays in one array(sortArray) by pushing
        for (let i = 0; i < sortArray1.length; i++) {
            sortArray.push(sortArray1[i]) ;
        }
        for (let j = 0; j < sortArray2.length; j++) {
            sortArray.push(sortArray2[j]) ;
        }
        //desending sort
    }else{

        //appending two arrays in one array(sortArray) by pushing
        for (let i = 0; i < sortArray2.length; i++) {
            sortArray.push(sortArray2[i]) ;
        }
        for (let j = 0; j < sortArray1.length; j++) {
            sortArray.push(sortArray1[j]) ;
        }
    }
   
//emptying ".row" element
   row.innerHTML="";

   //call createCourses() by sortArray as a prameter to update list of courses
   createCourses(sortArray);
    
}


































