var todo_array = [];
var pull_from_form = true;
var no_more = true;
var deleting = false;
var done_is_checked = false;
var gobal_temp_for_removing = "";
var done_array = [];
//get the information from form

function done_add(incoming_value) {
    done_array.push(incoming_value);
}
function display_done() {
    document.getElementById("display-done").innerHTML = "";
    for (var i = 0; i < done_array.length; i++) {
        var temp = `
        <form class="form-control form-control-ext1 todo-item">
                <span class="chk todo_check" unchecked onclick="remove_done(${i})"></span>
                <input class="todo_check check_box_display-none" type="checkbox">   
                <label class="todo_font" >${done_array[i]}</label>
                <br>
        </form>
        `;
        document.getElementById("display-done").innerHTML += temp;
        // console.log(i+ " inside: "+done_array[i]);
    }
    if (done_array.length == 0) {
        $("#done-title").hide()
        if (!no_more) {
            document.getElementById("block").innerHTML = "";
        }
    } else {
        document.getElementById("block").innerHTML = `
        <p class="mx-auto todo-delete">Click on the trash-bin icon below to delete a task when done.</p>
        `;
        $("#done-title").show();
    }

}
function remove_done(array_index) {
    done_array.splice(array_index, 1);
    display_done();
}
function display_todo() {
    var data_from_user = document.getElementById("todoTxt");
    console.log(data_from_user.value.length);
    if (data_from_user.value.length < 1 && !deleting) {
        alert("Todo text can not be empty");
        return;
    }
    if (deleting) {
        deleting = false;
    }
    //push it into the 
    if (pull_from_form) {
        todo_array.push(data_from_user.value);
    } else {
        pull_from_form = true;
    }

    if (todo_array.length > 0) {
        no_more = true;

    } else {
        no_more = false;
    }

    //clearing the field
    document.getElementById("display-todo").innerHTML = "";


    //display it on a format
    for (var i = 0; i < todo_array.length; i++) {
        var temp = `
        <form class="form-control form-control-ext1 todo-item">
                <span class="chk todo_check" unchecked onclick="remove(${i})"></span>
                <input class="todo_check check_box_display-none" type="checkbox">   
                <label class="todo_font" >${todo_array[i]}</label>
                <br>
                <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" onclick="done(${i})">
                <label class="form-check-label" >Done</label>
                </div>
        </form>
        `;
        document.getElementById("display-todo").innerHTML += temp;
    }

    clear();

    if (!no_more) {
        $("#pending-title").hide();
        if(done_array==0){
            document.getElementById("block").innerHTML = "";
        }
    } else {
        document.getElementById("block").innerHTML = `
    <p class="mx-auto todo-delete">Click on the trash-bin icon below to delete a task when done.</p>
    `;
        $("#pending-title").show();
    }

}
function done(num1) {
    remove(num1);
    done_add(gobal_temp_for_removing);
    display_done();
}

function clear() {
    todoTxt.value = "";
}

function remove(num1) {
    var array_temp = [];
    var new_array = [];

    var todo_array_counter = todo_array.length;
    if (todo_array.length == 1) {//last one on the list
        gobal_temp_for_removing = todo_array.pop();
        console.log("getting rid of: " + gobal_temp_for_removing);
    } else if ((num1 + 1) == todo_array.length) {//the very  bottom of the list
        gobal_temp_for_removing = todo_array.pop();
        console.log("getting rid of: " + gobal_temp_for_removing);
    } else if (num1 == 0) {
        gobal_temp_for_removing = todo_array[0];
        console.log("getting rid of: " + gobal_temp_for_removing);
        for (var i = 1; i < todo_array.length; i++) {
            new_array[i - 1] = todo_array[i];
        }
        todo_array = [];
        todo_array = new_array;
    } else {
        //popping off the array to save into another array
        console.log(`num1: ${num1}`);
        todo_array_counter = todo_array.length;
        num1++;
        for (var i = 0; i < todo_array_counter - num1; i++) {
            array_temp.push(todo_array.pop());
            console.log(`${i}array_temp: ${array_temp[i]}`);
        }
        gobal_temp_for_removing = todo_array.pop();
        console.log("getting rid of: " + gobal_temp_for_removing);

        //loading a new array and pushing it into old array
        for (var i = 0; i < todo_array.length; i++) {
            new_array.push(todo_array[i]);
            console.log(`${i}new_array: ${new_array[i]}`);
        }

        //console.log(`array_temp.length: ${array_temp.length}`);
        var array_temp_counter = array_temp.length;
        for (var i = 0; i < array_temp_counter; i++) {
            var temp1 = array_temp.pop();
            new_array.push(temp1);
            console.log(`temp1: ${temp1}`);
        }

        //reset old array with new array;
        todo_array = [];
        todo_array = new_array;
    }
    pull_from_form = false;
    deleting = true;
    display_todo();
}
function captureenter(e) {
    if (e.keyCode === 13) {//"Enter : e.key"
        //display_todo();
    }

}
function init() {
    window.location.replace("index.html?#");
    $("#pending-title").hide();
    $("#done-title").hide();
    $('#todoTxt').keypress(captureenter);
}


window.onload = init;