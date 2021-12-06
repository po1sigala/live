
* Navigate to `10-Stu_Webpack-Plugin/Solved` in your terminal and run `npm install` and `npm run build` to create a `dist` folder. 

* Open the `10-Stu_Webpack-Plugin/Solved/dist/index.html` using Live Server to demonstrate the following: 

  * We can audit an app's performance using a tool called Lighthouse using either the Chrome Extension on DevTools. 

  * To use Google DevTools to inspect our app, we click on the double arrows `>>` and select `Lighthouse`.

  * Lighthouse allows us to perform a number of audits aimed at providing metrics to help improve both overall performance and accessibility. For now, we will select `Performance` and run a test on the `Desktop` version.

  * We click `Generate Report` to start the audit. 

  * The report contains a number of metrics that show how fast the page loads and users can interact with the app. It looks like our optimized app is performing well! 

  * We can toggle the expanded view to see details and information about each metric as well as insights on how to improve the score. 
  
  * When we scroll down the page to the `Passed Audits`, we can also see that the improvements we will make during today's class have paid off. All audits are passing and minifying and bundling our files has reduced our payload and increased our app's speed. 

  * DevTools is just one way of using Lighthouse. Lighthouse is also available as an Chrome extension and as a node module for use during development. During the first activity, we will use another Lighthouse tool, the Chrome extension, to explore metrics. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use Lighthouse to audit our app's performance?

  * 🙋 We use Lighthouse to generate an audit report that provides key metrics about how fast our page loads and how quickly it is interactive to the user. The audit report also provides an explanation of each metric as well as insights to help see where our app is performing well and where we may need to make improvements. 
