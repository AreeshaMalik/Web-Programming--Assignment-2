// ---------------------- JavaScript for the portfolio page -------------------------

// enlarging the image on mouseover
function func_enlarge(){
    document.getElementById('AreePic').style.width="120px";
    // document.getElementById('AreePic').style.height="140px";
    document.getElementById('AreePic').style.position='float';
}

// on mouse out this will bring the image back to the original state
function func_original(){
    document.getElementById('AreePic').style.width="100px";
    document.getElementById('AreePic').style.position='float';
}

// checking the total number of projects in the portfolio while we load the page
window.onload = function() {
    if (document.getElementById("ulProj")){
        var getList = document.getElementById("ulProj").getElementsByTagName("li");
        var getLen = getList.length;
        console.log(getLen);
        document.getElementById("projNum").innerHTML= getLen;
    }
    else{
        
    }
    // alert(getLen);
}

// For displaying the form
function func_dispForm(){
    document.getElementById("formDiv").style.display='block';
    // Replacing the "Add Project Button" to "Hide Form" button
    document.getElementById("formBut").outerHTML="<button id='formHide' onclick=\"func_hideForm()\"> Hide Form </button>";
}

// For hiding the form once the projects have been added
function func_hideForm(){
    var check = document.getElementById("formDiv");
    if (check.style.display == 'block'){
        check.style.display = 'none';
    }
    document.getElementById("formHide").outerHTML="<button id='formBut' onclick=\"func_dispForm()\"> Add Project </button>";
}

// This to add the project details in a new project card (list)
function func_addToProject(){
    var getul = document.getElementById("ulProj");
    var title = document.getElementById("title").value;
    var year = document.getElementById("year").value;
    var description = document.getElementById("description").value;
    var technology = [];

    
    var tech = document.getElementsByClassName("tech");
    for(var a=0; tech[a]; ++a){
        if(tech[a].checked){
            technology.push(tech[a].value);
        }
    }

    // console.log(technology.length);
     // ------------- Performing Validation ------------
    if (title==""){
        alert("Please add the TITLE of the project");
    } 
    else if(/\D/.test(year)){
        console.log("if for year")
        alert("Please only enter numeric characters for YEAR! (From 0 to 9)")
    }
    else if(year.length !=4){
        alert("Length of YEAR should be 4 only");
    }
    else if (technology.length==0){
        alert("Please select the TECHNOLOGY used")
    }
    else if (description==""){
        alert("Please add the DESCRIPTION of the project")
    }
    // ----- If validation succeeds, this else adds the project ------- 
    else{
        var ap = "proj";
        newli = document.createElement("li");
        newli.setAttribute('id',ap);

            newh3 = document.createElement("h3");
            newh3.setAttribute('id',title);
            newh3.appendChild(document.createTextNode(title))
            newli.appendChild(newh3);

            newh31 = document.createElement("h3");
            newh31.setAttribute('id',year);
            newh31.appendChild(document.createTextNode("("+year+")"));
            newli.appendChild(newh31);

            newh4 = document.createElement("h4");
            newh4.setAttribute('id',"tech");
            newh4.appendChild(document.createTextNode(technology));
            newli.appendChild(newh4);

            newp = document.createElement("p");
            newp.setAttribute('id',"desc");
            newp.appendChild(document.createTextNode(description));
            newli.appendChild(newp);


        // newli.appendChild(document.createTextNode(year))
        getul.appendChild(newli)

        // Adding the project count 
        var getList = document.getElementById("ulProj").getElementsByTagName("li");
        var getLen = getList.length;
        // console.log(getLen);
        document.getElementById("projNum").innerHTML= getLen;
    }
    
}
// ---------------------- JavaScript for the timetable page ------------------------

// This is the delete function
// which deletes the whole row on one click
// this is just assumption as the sentence was not complete in the assignment statement
function func_delete(row){
    document.getElementById(row).remove();
}
// This is the edit function 
// That is editing the whole row of the timetable
// It takes the row as input so that we can get the element ids by looking 
// at which row is targeted by the user
function func_edit(row)
{   
    var check_e = row + "_edit";
    console.log("check_e:",check_e)

    var c1="c1", c2="c2", c3="c3", c4="c4", c5="c5", c6="c6", c7="c7",c8="c8";
    var col1= document.getElementById(row+c1);
    var col2= document.getElementById(row+c2);
    var col3= document.getElementById(row+c3);
    var col4= document.getElementById(row+c4);
    var col5= document.getElementById(row+c5);
    var col6= document.getElementById(row+c6);
    var col7= document.getElementById(row+c7);
    var col8= document.getElementById(row+c8);

    // console.log(col2);
    // console.log(col3);
    // console.log(col4);   

    // This is picking the value already written inside the box
    // Incase we do not edit it, it is saved as it was before
    var rowc1= col1.innerHTML;
    var rowc2= col2.innerHTML;
    console.log(rowc2);
    var rowc3= col3.innerHTML;
    var rowc4= col4.innerHTML;
    var rowc5= col5.innerHTML;
    var rowc6= col6.innerHTML;
    var rowc7= col7.innerHTML;
    var rowc8= col8.innerHTML;
    console.log(rowc4);

    // Giving a new id to each "td" input after the editing has been done
    var naya = row + "tx";
        
    // This is adding input tag inside each of the table boxes, so that we can edit the whole row
    col1.innerHTML= "<input type='text' id='"+naya+""+c1+"' value='"+rowc1+"'>";
    col2.innerHTML= "<input type='text' id='"+naya+""+c2+"' value='"+rowc2+"'>";
    col3.innerHTML= "<input type='text' id='"+naya+""+c3+"' value='"+rowc3+"'>";
    col4.innerHTML= "<input type='text' id='"+naya+""+c4+"' value='"+rowc4+"'>";
    col5.innerHTML= "<input type='text' id='"+naya+""+c5+"' value='"+rowc5+"'>";
    col6.innerHTML= "<input type='text' id='"+naya+""+c6+"' value='"+rowc6+"'>";
    col7.innerHTML= "<input type='text' id='"+naya+""+c7+"' value='"+rowc7+"'>";
    col8.innerHTML= "<button id='"+row+"_save' onclick=\"func_save('"+row+"')\" class='arow'> Save </button>";
}

// This is the save function
// Once the row has been edited, the changes are then saved 
function func_save(row){
    var check_s = row + "_save";
    console.log("check_s:",check_s)

    var naya = row + "tx";

    var c1="c1", c2="c2", c3="c3", c4="c4", c5="c5", c6="c6", c7="c7",c8="c8";

    // Get the value of the new edited boxes
    var col1=document.getElementById(naya+c1).value;
    var col2=document.getElementById(naya+c2).value;
    console.log(col2);
    var col3=document.getElementById(naya+c3).value;
    var col4=document.getElementById(naya+c4).value;
    var col5=document.getElementById(naya+c5).value;
    var col6=document.getElementById(naya+c6).value;
    var col7=document.getElementById(naya+c7).value;

    // add the value inside the boxes
    document.getElementById(row+c1).innerHTML = col1;
    document.getElementById(row+c2).innerHTML = col2;
    document.getElementById(row+c3).innerHTML = col3;
    document.getElementById(row+c4).innerHTML = col4;
    document.getElementById(row+c5).innerHTML = col5;
    document.getElementById(row+c6).innerHTML = col6;
    document.getElementById(row+c7).innerHTML = col7;

    // adding back the input buttons for Edit and Delete 
    // Once we have saved the row 
    var col8=document.getElementById(row+c8);
    col8.innerHTML="<button id='"+row+"_edit' value='Edit' onclick=\"func_edit('"+row+"')\" class='ed'> Edit </button> <br> <button id='"+row+"_delete' onclick=\"func_delete('"+row+"')\" class='del'> Delete </button> ";
}

function func_addRow(){

    // Taking the values added in each box in the row 
    var c1="rowc1", c2="rowc2", c3="rowc3", c4="rowc4", c5="rowc5", c6="rowc6", c7="rowc7", c8="rowc8";
    var row_c1 = document.getElementById(c1).value;
    var row_c2 = document.getElementById(c2).value;
    var row_c3 = document.getElementById(c3).value;
    var row_c4 = document.getElementById(c4).value;
    var row_c5 = document.getElementById(c5).value;
    var row_c6 = document.getElementById(c6).value;
    var row_c7 = document.getElementById(c7).value;

    // getting the count of rows in the table
    // subtracting one from it so that do not add the "add row" row to the total length
    var ttlen = (document.getElementById("timetable").rows.length)-1; 
    console.log(ttlen)
    var finlen = ttlen-2;
    // document.getElementById("timetable").insertRow(ttlen).innerHTML="<tr id='r"+ttlen-2+"'> <td id='r"+ttlen-2+"c1'> "+row_c1+" </td>  <td id='r"+ttlen-2+"c2'> "+row_c2+" </td>  <td id='r"+ttlen-2+"c3'> "+row_c3+"</td> <td id='r"+ttlen-2+"c4'> "+row_c4+"</td> <td id='r"+ttlen-2+"c5'> "+row_c5+"</td>  <td id='r"+ttlen-2+"c6'> "+row_c6+"</td> <td id='r"+ttlen-2+"c7'> "+row_c7+"</td> <td id='r"+ttlen-2+"c8'><input type='button' value='Edit' id='r"+ttlen-2+"_edit' onclick=\"func_edit('r"+ttlen-2+"')\"> <br> <input type='button' value='Delete' id='r"+ttlen-2+"_delete' onclick=\"func_delete('r"+ttlen-2+"')\"></td>   </tr>"
    document.getElementById("timetable").insertRow(ttlen).outerHTML="<tr id='r"+finlen+"'> <td id='r"+finlen+"c1'> "+row_c1+" </td> <td id='r"+finlen+"c2'> "+row_c2+"</td> <td id='r"+finlen+"c3'> "+row_c3+"</td> <td id='r"+finlen+"c4'> "+row_c4+"</td> <td id='r"+finlen+"c5'> "+row_c5+"</td> <td id='r"+finlen+"c6'> "+row_c6+"</td> <td id='r"+finlen+"c7'> "+row_c7+"</td> <td id='r"+finlen+"c8'><button id='r"+finlen+"_edit' onclick=\"func_edit('r"+finlen+"')\" class='ed'>Edit</button> <br> <button id='r"+finlen+"_delete' onclick=\"func_delete('r"+finlen+"')\" class='del'>Delete</button> </td> </tr>"

}

// ------------------------ JavaScript for the course videos page -----------------------