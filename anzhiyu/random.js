var posts=["posts/3de3.html","posts/bdb2.html","posts/635d.html","posts/635a.html","posts/bdbf.html","posts/7ae2.html","posts/635b.html","posts/7aek.html","posts/635c.html","posts/7ae4.html","posts/9743.html","posts/7af8.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};