// In this script, the accordion sections operate independently and can all be open at once

(function() {
    // Get all the H2 headings
    const headings = document.querySelectorAll(".js-accordion p");
  
    for (let heading of headings) {
      // Create button element
      const trigger = document.createElement("button");
      trigger.setAttribute("type", "button");
      trigger.setAttribute("aria-expanded", false);
      trigger.classList.add("u-button-reset");
  
      // Create icon
      const svgIcon =
        '<svg aria-hidden="true" focusable="false" viewBox="0 0 10 10"><rect class="vert" height="8" width="2" y="1" x="4"/><rect height="2" width="8" y="4" x="1"/></svg>';
  
      // Add original heading and icon to button
      trigger.innerHTML = heading.innerText + svgIcon;
  
      heading.innerHTML = ""; // Clear out current heading
      heading.appendChild(trigger);
  
      // Identify the content and hide it
      const wrapper = heading.nextElementSibling;
      wrapper.setAttribute("hidden", true);
  
      trigger.onclick = () => {
        // Cast the state as a boolean (it starts out as a string)
        let expanded = trigger.getAttribute("aria-expanded") === "true" || false;
        // Toggle the state
        trigger.setAttribute("aria-expanded", !expanded);
        // Toggle the content's visibility
        wrapper.hidden = expanded;
      };
    }
  })();
