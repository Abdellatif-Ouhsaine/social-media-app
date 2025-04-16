const express = require('express');
const { authenticate } = require('../middleware/authMiddleware');
const { createPost, deletePost, likePost, getAllPosts, getUserPosts ,getFeed ,getTrendingTopics } = require('../controllers/postController');
const router = express.Router();

router.post('/', authenticate, createPost);
router.delete('/:postId', authenticate, deletePost); 
router.put('/:postId/like', authenticate, likePost); // Liker un post
router.get('/user/:userId/', authenticate, getUserPosts); // Liker un post
router.get('/', getAllPosts); // Récupérer tous les posts
router.get("/feed", authenticate, getFeed);
router.get('/trending/topics', getTrendingTopics);

module.exports = router;