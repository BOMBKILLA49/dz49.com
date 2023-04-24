<?php
    $myemail = 'ask@dz49.com';

    // Check if form was submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        // Validate form data
        $name = test_input($_POST['name']);
        $email = test_input($_POST['email']);
        $subject = test_input($_POST['subject']);
        $message = test_input($_POST['message']);
        
        if (empty($name) || empty($email) || empty($subject) || empty($message)) {
            $error_message = "Please fill in all required fields.";
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error_message = "Please enter a valid email address.";
        } else {
            // Send email
            $to = $myemail;
            $email_subject = "$subject";
            $email_body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";
            $headers = "From: $email";
            if (mail($to, $email_subject, $email_body, $headers)) {
                $success_message = "Your message has been sent successfully.";
            } else {
                $error_message = "There was an error sending your message. Please try again later.";
            }
        }
    }
    
    // Helper function for form validation
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>

<!DOCTYPE html>
<html>
<head>
    <title>Contact Form</title>
</head>
<body>
    <?php if (isset($error_message)): ?>
        <div class="error"><?php echo $error_message; ?></div>
    <?php elseif (isset($success_message)): ?>
        <div class="success"><?php echo $success_message; ?></div>
    <?php endif; ?>
     
</body>
</html>
