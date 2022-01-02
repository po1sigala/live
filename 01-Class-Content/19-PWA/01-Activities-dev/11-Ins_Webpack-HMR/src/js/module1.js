// Grab the target element
const targetEl = document.getElementById('target');

// Clear out the loading message that exists in the target element
targetEl.innerHTML = '';

// Create a new element in memory
const moduleContent = document.createElement('div');
moduleContent.id = 'module-1';

// Add some content to the new element
moduleContent.innerHTML = `
<div class="article-container">
<div class="row">
  <div class="col s12">
    <div class="card darken-1">
      <div class="card-content dark-text">
        <span class="card-title">THIS IS NEW CONTENT</span>
      </div>
    </div>
  </div>
</div>
</div>`;

// Append the new element to the target element
targetEl.appendChild(moduleContent);
