const express = require('express');
const router = express.Router();
const { Post } = require('../models/Post');

router.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
  }
});

router.get('/', async (req, res) => {
  // Логика получения всех постов
});

router.put('/:id', async (req, res) => {
  // Логика обновления поста
});

router.delete('/:id', async (req, res) => {
  // Логика удаления поста
});

module.exports = router;