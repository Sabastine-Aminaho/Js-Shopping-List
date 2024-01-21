document.getElementById('clear').addEventListener('click', function (e) {
    // Remove the existing ripple element (if any)
    let ripple = this.querySelector('span.ripple');
    if (ripple) {
        ripple.remove();
    }

    // Create a new ripple element
    ripple = document.createElement('span');
    ripple.className = 'ripple';
    this.appendChild(ripple);

    // Position the ripple where the click event occurred
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
});
