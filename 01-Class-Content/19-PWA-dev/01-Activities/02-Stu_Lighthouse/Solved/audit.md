# Lighthouse Audit

## Performance Metrics

Which metrics are failing and what do they measure?
List the metric and their definition. (Add bullet points if necessary)

* **Time to interactive:** Measures how much time until the webpage is fully functional.

* **Total Blocking Time:** Sum of all time periods between **First Contentful Paint**(FCP) and Time to Interactive. FCP marks the time which the first text or image is painted.
  
* Speed Index: Measures how quickly the contents of the page are visibly populated.

* Cumulative Layout Shift: Measures the movement of visible elements within the viewport.
  
* **Largest Contentful Paint:** Marks the time at which the largest text or image is painted.

## List a corrective measure for each metric selected above.

* Time to interactive: Defer or remove unneeded JavaScript.

* Total Blocking Time: Optimize JavaScript to reduce the amount it is loaded, parsed, and executed.

* Speed Index: Reduce load on the call stack or the main thread.

* Largest Contentful Paint: Reduce render blocking JavaScript.

* Cumulative Layout Shift: Always include size attributes on your images and video elements.
  