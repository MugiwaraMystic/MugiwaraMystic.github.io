document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceName = document.getElementById('serviceName').value;
    const paymentInterval = document.getElementById('paymentInterval').value;
    const nextPaymentDate = new Date(document.getElementById('nextPaymentDate').value);

    addSubscription(serviceName, paymentInterval, nextPaymentDate);
    scheduleReminder(serviceName, nextPaymentDate);
});

function addSubscription(serviceName, paymentInterval, nextPaymentDate) {
    const subscriptionsDiv = document.getElementById('subscriptions');
    const subscriptionDiv = document.createElement('div');
    subscriptionDiv.className = 'subscription';
    subscriptionDiv.innerHTML = `
        <h3>${serviceName}</h3>
        <p>Payment Interval: ${paymentInterval.charAt(0).toUpperCase() + paymentInterval.slice(1)}</p>
        <p>Next Payment Date: ${nextPaymentDate.toDateString()}</p>
    `;
    subscriptionsDiv.appendChild(subscriptionDiv);
}

function scheduleReminder(serviceName, nextPaymentDate) {
    const today = new Date();
    const timeDiff = nextPaymentDate - today;
    if (timeDiff > 0) {
        setTimeout(() => {
            alert(`Reminder: Your next payment for ${serviceName} is due today!`);
        }, timeDiff);
    } else {
        alert('The next payment date must be in the future.');
    }
}
