function openTab(tabName, elmnt, color) {
    // Hide all elements with class="tabWindow"
    var i, tabWindow, tablinks;
    tabWindow = document.getElementsByClassName("tabWindow");
    for (i = 0; i < tabWindow.length; i++) {
      tabWindow[i].style.display = "none";    
    }
  
    // Remove the background color of all tab link buttons
    tabLinks = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].style.backgroundColor = "";
    }
  
    // Show content for the tab whose button was clicked
    document.getElementById(tabName).style.display = "block";
  
    // Highlight the last button that was pressed
    elmnt.style.backgroundColor = 'skyblue';
  }
  
   // Get the element with id="defaultOpen" and click on it
 document.getElementById("defaultButton").click();



//   Code for calculating needed reactive power
// When the calcuation script is left in this .js file, the tab links no longer work as expected
// so, I moved the calculatino script directly into the div
    
    //     var p = document.getElementById("p").value;
    //     var pf1 = document.getElementById("pf1").value;
    //     var pf2 = document.getElementById("pf2").value;     
    // }
// Code for changing tabs on the page