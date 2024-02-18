<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process form submission
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Send email, save to database, or perform other actions as needed

    // Redirect or send response
    header("Location: thank-you.html"); // Redirect to a thank-you page
    exit();
} else {
    // Invalid request method
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
