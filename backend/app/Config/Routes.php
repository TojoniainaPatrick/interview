<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

$routes->get('/positionevaluation/enabled/(:num)', 'PositionEvaluation::index/$1');
$routes->get('/positionevaluation/search/(:num)', 'PositionEvaluation::findEvaluation/$1');
$routes->post('/positionevaluation/insertall', 'PositionEvaluation::insertAll');


// user routes
$routes->get('/user/list', 'User');
$routes->post('/user/login', 'User::show');
$routes->post('/user/add', 'User::add');


// interviewEvaluation routes
$routes->get('/interviewevaluation', 'InterviewEvaluation');
$routes->post('/interviewevaluation/insert', 'InterviewEvaluation::insertInterviewEvaluation');
$routes->get('/interviewevaluation/interview/(:num)', 'InterviewEvaluation::interviewEvaluations/$1');


// year routes
$routes->get('/year', 'YearOfOperation');
$routes->get('/year/(:num)', 'YearOfOperation::find/$1');
$routes->post('/year/new', 'YearOfOperation::create');

// period routes
$routes->get('/period', 'Period');

// interview routes
$routes->get('/interview', 'Interview');
$routes->get('/interview/post/(:num)', 'Interview::postRelated/$1');
$routes->get('/interview/(:num)', 'Interview::show/$1');
$routes->get('/interview/status', 'Interview::getInterviewByStatus');
$routes->get('/interview/create', 'Interview::createInterviews');
$routes->post('/interview/new', 'Interview::new');
$routes->get('/interview/user/(:num)', 'Interview::getInterviewUser/$1');

// section routes
$routes->get('/section', 'Section');
$routes->get('/section/(:num)', 'Section::show/$1');
$routes->post('/section/create', 'Section::create');
$routes->put('/section/update/(:num)', 'Section::update/$1');
$routes->delete('/section/delete/(:num)', 'Section::delete/$1');

// target routes
$routes->get('/target', 'Target');
$routes->get('/target/interview/(:num)', 'Target::interviewTargets/$1');
$routes->post('/target/create', 'Target::create');
$routes->put('/target/unaccomplish/(:num)', 'Target::unaccomplish/$1');
$routes->put('/target/accomplish/(:num)', 'Target::accomplish/$1');
$routes->put('/target/update/(:num)', 'Target::update/$1');
$routes->delete('/target/delete/(:num)', 'Target::delete/$1');

// question routes
$routes->get('/question', 'Question');
$routes->get('/question/interview/(:num)', 'Question::interviewQuestion/$1');
$routes->post('/question/create', 'Question::create');
$routes->put('/question/update/(:num)', 'Question::update/$1');
$routes->put('/question/respond/(:num)', 'Question::answer/$1');
$routes->put('/question/deleteresponse/(:num)', 'Question::deleteResponse/$1');
$routes->delete('/question/delete/(:num)', 'Question::delete/$1');

// interview comment routes
$routes->get('/comment/interview/(:num)', 'InterviewComment::index/$1');
$routes->post('/comment/create', 'InterviewComment::create');
$routes->put('/comment/update/(:num)', 'InterviewComment::update/$1');
$routes->delete('/comment/delete/(:num)', 'InterviewComment::delete/$1');

// comment response routes
$routes->get('/commentresponse/comment/(:num)', 'CommentResponse::index/$1');
$routes->post('/commentresponse/create', 'CommentResponse::create');
$routes->put('/commentresponse/update/(:num)', 'CommentResponse::update/$1');
$routes->delete('/commentresponse/delete/(:num)', 'CommentResponse::delete/$1');


// evaluation item routes
$routes->get('/evaluationItem', 'EvaluationItem');
$routes->post('/evaluationItem/new', 'EvaluationItem::create');


// position routes
$routes->get('/position', 'Position');
$routes->get('/position/find/(:num)', 'Position::show/$1');