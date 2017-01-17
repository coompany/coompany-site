<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Log;


class ProjectsController extends Controller
{

    const SIGNUP_FIELDS = [ 'email', 'project' ];

    public function signup(Request $request)
    {
        $record = $request->only(self::SIGNUP_FIELDS);

        $errors = [];
        foreach (self::SIGNUP_FIELDS as $field) {
            if (empty($record[$field])) {
                $errors[$field] = 'is missing';
            }
        }

        if (!empty($errors)) {
            return response([ 'errors' => $errors ], 400);
        }

        if (DB::table('coompany_signups')->where($record)->count() > 0) {
            return response('', 204);
        }

        $record['created_at'] = date('Y-m-d H:i:s');
        if (DB::table('coompany_signups')->insert($record) != 1) {
            Log::error("Inserting into DB signup of '{$record['email']}' for '{$record['project']}'");
            return response('', 500);
        }

        return response('', 201);
    }

}
