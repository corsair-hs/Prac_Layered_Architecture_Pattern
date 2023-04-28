// routes/posts.routes.js

const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/posts.controller');
const postsController = new PostsController();    // 불러온 모듈에 대한 클래스를 선언하는 부분

router.get('/', postsController.getPosts);  // 컨트롤러의 메서드가 실제로 동작을 하게끔
router.post('/', postsController.createPost); // express.Router가 연결을 해준다.

/*
그래서 이 라우터부분은 실제로 어떠한 로직이 실행되는지는 상관하지 않고
그 대신에 어떤 URL과 어떤 HTTP 메서드가 어떤 컨트롤러의 메서드로 갈지에 대해 확인하는 것이다.
그리고 URL과 컨트롤러 메서드 사이에 미들웨어를 추가할 수 있다 정도...
*/

module.exports = router;