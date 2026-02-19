<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// Mostrar errores SOLO en desarrollo
ini_set("display_errors", 1);
ini_set("display_startup_errors", 1);
error_reporting(E_ALL);

// Cargar PHPMailer
require __DIR__ . "/phpmailer/phpmailer/src/PHPMailer.php";
require __DIR__ . "/phpmailer/phpmailer/src/SMTP.php";
require __DIR__ . "/phpmailer/phpmailer/src/Exception.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Obtener JSON del frontend
$data = json_decode(file_get_contents("php://input"), true);

$nombre   = $data["nombre"] ?? "";
$email    = $data["email"] ?? "";
$telefono = $data["telefono"] ?? "";
$motivo   = $data["motivo_consulta"] ?? "";
$plazo    = $data["plazo"] ?? "";
$entidad  = $data["entidad"] ?? "";
$mensaje  = $data["mensaje"] ?? "";

// ---------------- CONFIG GOOGLE SMTP ---------------- //
$SMTP_HOST = "smtp.gmail.com";
$SMTP_PORT = 587;
$SMTP_USER = "info@modularnorte.com";
$SMTP_PASS = "xwvt xoat rcze oubl"; // ← PON AQUÍ TU APP PASSWORD

$FROM_EMAIL = "info@modularnorte.com";
$FROM_NAME  = "Modular Norte";
$TO_EMAIL   = "info@modularnorte.com";

// ---------------- CUERPO DEL EMAIL ---------------- //
$subject = "Nuevo mensaje de $nombre desde la web Modular Norte";

$body  = "Nombre: $nombre\n";
$body .= "Email: $email\n";
$body .= "Teléfono: $telefono\n";
$body .= "Motivo de consulta: $motivo\n";
$body .= "Plazo: $plazo\n";
$body .= "Entidad: $entidad\n\n";
$body .= "Mensaje:\n$mensaje\n";

// ---------------- ENVIAR EMAIL ---------------- //
$mail = new PHPMailer(true);

try {

    // Activa debug solo si necesitas ver errores
    $mail->SMTPDebug = 0;

    $mail->isSMTP();
    $mail->Host       = $SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = $SMTP_USER;
    $mail->Password   = $SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $SMTP_PORT;
    $mail->CharSet    = "UTF-8";

    // Remitente
    $mail->setFrom($FROM_EMAIL, $FROM_NAME);
    $mail->addReplyTo($email, $nombre);

    // Destinatario
    $mail->addAddress($TO_EMAIL);

    $mail->Subject = $subject;
    $mail->Body    = $body;

    $mail->send();

    echo json_encode(["status" => "ok"]);

} catch (Exception $e) {

    error_log("PHPMailer Error: " . $mail->ErrorInfo);

    echo json_encode([
        "status" => "error",
        "error"  => $mail->ErrorInfo
    ]);
}
