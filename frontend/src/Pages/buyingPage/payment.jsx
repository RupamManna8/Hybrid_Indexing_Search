import React from 'react';

const RazorpayPayment = ({ amount }) => {
    const handlePayment = () => {
        const options = {
            key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
            amount: amount * 100, // Amount in paisa (1 INR = 100 paisa)
            currency: "INR",
            name: "Your Store Name",
            description: "Test Transaction",
            image: "https://yourstorelogo.com/logo.png", // Replace with your store's logo URL
            handler: function (response) {
                alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                // Handle post-payment actions like order confirmation
            },
            prefill: {
                name: "John Doe", // Replace with user details if available
                email: "john.doe@example.com",
                contact: "9876543210",
            },
            notes: {
                address: "User's Address",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return (
        <div>
            <button
                onClick={handlePayment}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#FF5722',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Proceed to Payment
            </button>
        </div>
    );
};

export default RazorpayPayment;
