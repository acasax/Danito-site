<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

//if (empty($_POST['email']) && empty($_POST['name']) && empty($_POST['company']) && empty($_POST['phone']) && empty($_POST['msg']) ) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);

    $email_to = "office@danito.rs";
        $email_subject = 'Poruka sa sajta';


        $name = $_POST['name'];
        $company = $_POST['company'];
        $email = $_POST['email'];
        $message = $_POST['msg'];

        $email_message = "Ime: " . $name . "\n";
        $email_message = "Ime firme: " . $company . "\n";
        $email_message .= "E-mail: " . $email . "\n";
        $email_message .= "Poruka: " . $message . "\n";


        $headers = 'From: ' . $email . "\r\n" .
            'Reply-To: ' . $email . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
        if (@mail($email_to, $email_subject, $email_message, $headers)) {
            echo 'success';
        } else {
            echo 'error with sending mail';
        };

	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Poruka nije poslata"]);
	}

?>
