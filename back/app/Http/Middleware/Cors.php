<?php

namespace App\Http\Middleware;


class Cors {

  public function handle($request, \Closure $next)
  {
    $response = $next($request);
    $response->header('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
    $response->header('Access-Control-Allow-Headers', $request->header('Access-Control-Request-Headers'));
    if (strpos($request->header('Origin'), 'coompany'))
        $cors = $request->header('Origin');
    else
        $cors = '';
    $response->header('Access-Control-Allow-Origin', $cors);
    return $response;
  }

}
