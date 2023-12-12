$(document).ready(function(){

    $('.menu').click(function(){
        $('.navbar').toggle();
        $('.menu .fa-bars').toggleClass('fa-times');
        $('section').toggleClass('nav-toggle');   
    });
    $(window).on('load scroll',function(){
        $('.navbar').hide();
        $('.menu .fa-bars').removeClass('fa-times');
        $('section').removeClass('nav-toggle');   
    });

});

const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});

// Adding tasks to the list
function addTask() {
  var inputValue = document.getElementById("taskInput").value;
  if (inputValue === '') {
      alert("Please enter a task!");
  } else {
      var ul = document.getElementById("tasks");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(inputValue));

      var deleteBtn = document.createElement("button");
      deleteBtn.appendChild(document.createTextNode("❌"));
      deleteBtn.onclick = function() {
          li.remove();
      };

      li.appendChild(deleteBtn);
      ul.appendChild(li);
      document.getElementById("taskInput").value = '';
  }
}

// Toggling completion of tasks
document.getElementById("tasks").addEventListener("click", function(event) {
  if (event.target.tagName === 'LI') {
      event.target.classList.toggle("checked");
  }
});

