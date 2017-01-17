<?php

namespace App\Http\Controllers;

use PHPMailer;
use Illuminate\Http\Request;
use Log;

class JoinUsController extends Controller
{

    public function send_email(Request $request)
    {
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = env('SMTP_HOST');
        $mail->Username = env('SMTP_USERNAME');
        $mail->Password = env('SMTP_PASSWORD');
        $mail->SMTPAuth = true;
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        $mail->Port = (int) env('SMTP_PORT');

        $mail->setFrom(env('JOIN_US_FROM_ADDRESS'));
        $mail->addAddress(env('JOIN_US_TO_ADDRESS'));

        if (empty($request->input('email'))) {
            return response([ 'error' => 'Missing email address' ], 400);
        }
        if (empty($request->input('body'))) {
            return response([ 'error' => 'Missing body' ], 400);
        }

        $mail->Subject = 'New message from ' . $request->input('email') . ' - join us';
        $mail->Body = $request->input('body');

        if(!$mail->send()) {
            Log::error("Message could not be sent.\nMailer Error: $mail->ErrorInfo");
            return response([ 'error' => $mail->ErrorInfo ], 500);
        }

        return response('', 201);
    }

}
