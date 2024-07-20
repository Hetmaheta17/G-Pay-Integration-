document.addEventListener('DOMContentLoaded', function () {
    // Function to handle QR code scan success
    function onScanSuccess(decodedText, decodedResult) {
        console.log(`Code matched = ${decodedText}`, decodedResult);
        document.getElementById('payButton').style.display = 'block';
        console.log("on this")
        document.getElementById('payButton').onclick = function() {
            handleUPIPayment(decodedText);
        };
    }

    // Function to handle QR code scan failure
    function onScanFailure(error) {
        console.warn(`Code scan error = ${error}`);
    }

    // Initialize the HTML5 QR code scanner
    let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 }
    );
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);

    // Function to handle UPI payment
    function handleUPIPayment(upiUrl) {
        window.location.href = upiUrl;
    }
});

//-----------------------3-------------------
// document.addEventListener('DOMContentLoaded', function () {
//     // Function to handle QR code scan success
//     function onScanSuccess(decodedText, decodedResult) {
//         console.log(`Code matched = ${decodedText}`, decodedResult);
//         document.getElementById('payButton').style.display = 'block';
//         document.getElementById('payButton').onclick = function() {
//             handleUPIPayment(decodedText);
//         };
//     }

//     // Function to handle QR code scan failure
//     function onScanFailure(error) {
//         console.warn(`Code scan error = ${error}`);
//    }

//     // Initialize the HTML5 QR code scanner
//     let html5QrcodeScanner = new Html5QrcodeScanner(
//         "reader", { fps: 10, qrbox: 250 }
//     );
//     html5QrcodeScanner.render(onScanSuccess, onScanFailure);

//     // Function to handle UPI payment
//     function handleUPIPayment(upiUrl) {
//         // Directly use the UPI deep link
//         const deepLinkUrl = `upi://pay?pa=purv2882@okicici&pn=Purv&aid=uGICAgMC0nKaSVA`;
//         window.location.href = deepLinkUrl;
//     }
// });


// document.addEventListener('DOMContentLoaded', function () {
//     // Function to handle QR code scan success
//     function onScanSuccess(decodedText, decodedResult) {
//         console.log(`Code matched = ${decodedText}`, decodedResult);
//         document.getElementById('payButton').style.display = 'block';
//         document.getElementById('payButton').onclick = function() {
//             handleUPIPayment(decodedText);
//         };
//     }

//     // Function to handle QR code scan failure
//     function onScanFailure(error) {
//         console.warn(`Code scan error = ${error}`);
//     }

//     // Initialize the HTML5 QR code scanner
//     let html5QrcodeScanner = new Html5QrcodeScanner(
//         "reader", { fps: 10, qrbox: 250 }
//     );
//     html5QrcodeScanner.render(onScanSuccess, onScanFailure);

//     // Function to handle UPI payment via Google Pay API
//     function handleUPIPayment(upiUrl) {
//         const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });
//         const paymentDataRequest = {
//             apiVersion: 2,
//             apiVersionMinor: 0,
//             allowedPaymentMethods: [{
//                 type: 'UPI',
//                 parameters: {
//                     pa: 'purv2882@okicici',
//                     pn: 'Purv',
//                     tr: 'testTxn12345',
//                     tn: 'testTransaction',
//                     url: upiUrl
//                 }
//             }]
//         };

//         paymentsClient.loadPaymentData(paymentDataRequest)
//             .then(function(paymentData) {
//                 // Handle successful payment
//                 console.log(paymentData);
//             })
//             .catch(function(err) {
//                 console.error(err);
//                 alert("Payment failed. Please try again.");
//             });
//     }
// });




//-----------------------2-------------------

// document.addEventListener('DOMContentLoaded', function () {
//     // Function to handle QR code scan success
//     function onScanSuccess(decodedText, decodedResult) {
//         console.log(`Code matched = ${decodedText}`, decodedResult);
//         document.getElementById('payButton').style.display = 'block';
//         document.getElementById('payButton').onclick = function() {
//             handleUPIPayment(decodedText);
//         };
//     }

//     // Function to handle QR code scan failure
//     function onScanFailure(error) {
//         console.warn(`Code scan error = ${error}`);
//         // Optionally, provide feedback to the user
//         alert("QR code scan failed. Please try again.");
//     }

//     // Initialize the HTML5 QR code scanner
//     let html5QrcodeScanner = new Html5QrcodeScanner(
//         "reader", { fps: 10, qrbox: 250 }
//     );
//     html5QrcodeScanner.render(onScanSuccess, onScanFailure);

//     // Function to handle UPI payment
//     function handleUPIPayment(upiUrl) {
//         window.location.href = upiUrl;
//     }
// });





// function onGooglePayLoaded() {
//     const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });

//     const paymentDataRequest = {
//         apiVersion: 2,
//         apiVersionMinor: 0,
//         allowedPaymentMethods: [{
//             type: 'CARD',
//             parameters: {
//                 allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//                 allowedNetworks: ['AMEX', 'DISCOVER', 'MASTERCARD', 'VISA']
//             },
//             tokenizationSpecification: {
//                 type: 'PAYMENT_GATEWAY',
//                 parameters: {
//                     'gateway': 'example',
//                     'gatewayMerchantId': 'exampleGatewayMerchantId'
//                 }
//             }
//         }],
//         merchantInfo: {
//             merchantId: '01234567890123456789',
//             merchantName: 'Example Merchant'
//         },
//         transactionInfo: {
//             totalPriceStatus: 'FINAL',
//             totalPriceLabel: 'Total',
//             totalPrice: '12.34',
//             currencyCode: 'USD',
//             countryCode: 'US'
//         },
//         shippingAddressRequired: true,
//         callbackIntents: ['PAYMENT_AUTHORIZATION']
//     };

//     const button = paymentsClient.createButton({ onClick: onGooglePayButtonClicked });
//     document.getElementById('google-pay-button-container').appendChild(button);
// }

// function onGooglePayButtonClicked() {
//     const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });
//     paymentsClient.loadPaymentData(paymentDataRequest)
//         .then(function(paymentData) {
//             // Handle the response
//             Payment(paymentData);
//         })
//         .catch(function(err) {
//             // Handle errors
//             console.error('Error: ', err);
//         });
// }

// function Payment(paymentData) {
//     fetch('payment/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRFToken': '{{ csrf_token }}'
//         },
//         body: JSON.stringify({ paymentData: paymentData })
//     }).then(response => response.json())
//       .then(data => {
//           console.log('Payment processing result: ', data);
//       });
// }
